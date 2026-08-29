[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [ValidateSet('low', 'medium', 'high')]
    [string]$ProfileName
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$ProfileDir = $PSScriptRoot
$MinecraftDir = Split-Path -Parent (Split-Path -Parent $ProfileDir)
$InstanceDir = Split-Path -Parent $MinecraftDir
$ProfilePath = Join-Path $ProfileDir ($ProfileName + '.json')
$OptionsPath = Join-Path $MinecraftDir 'options.txt'
$IrisPath = Join-Path $MinecraftDir 'config/iris.properties'
$InstanceConfigPath = Join-Path $InstanceDir 'instance.cfg'
$BackupRoot = Join-Path $ProfileDir 'backups'

function Read-JsonFile([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) {
        throw "找不到性能档位文件：$Path"
    }
    return (Get-Content -LiteralPath $Path -Raw -Encoding UTF8 | ConvertFrom-Json)
}

function Write-Utf8NoBom([string]$Path, [string]$Content) {
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, $Content, $utf8NoBom)
}

function Replace-KeyLine([string]$Content, [string]$Key, [string]$Separator, [string]$Value) {
    $pattern = '(?m)^' + [regex]::Escape($Key) + [regex]::Escape($Separator) + '[^\r\n]*'
    if (-not [regex]::IsMatch($Content, $pattern)) {
        throw "目标配置缺少键：$Key$Separator"
    }
    $replacement = '{0}{1}{2}' -f $Key, $Separator, $Value
    return [regex]::Replace($Content, $pattern, $replacement)
}

function Test-GameRunning {
    $normalizedMinecraft = ($MinecraftDir -replace '\\', '/').TrimEnd('/')
    foreach ($process in (Get-CimInstance Win32_Process -ErrorAction SilentlyContinue)) {
        if ($process.Name -ne 'java.exe' -and $process.Name -ne 'javaw.exe') {
            continue
        }
        $commandLine = [string]$process.CommandLine
        if ($commandLine -and $commandLine.IndexOf($normalizedMinecraft, [System.StringComparison]::OrdinalIgnoreCase) -ge 0) {
            return $true
        }
    }
    return $false
}

function Assert-File([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) {
        throw "找不到目标配置：$Path"
    }
}

$profile = Read-JsonFile $ProfilePath
if ([string]$profile.profile -ne $ProfileName) {
    throw "档位文件 profile 字段与文件名不一致：$ProfilePath"
}

foreach ($path in @($OptionsPath, $IrisPath, $InstanceConfigPath)) {
    Assert-File $path
}

if (Test-GameRunning) {
    throw '检测到 Sky New Horizons 正在运行。请完全退出游戏后再应用性能档位。'
}

$memoryMin = [int]$profile.memory.minMemAllocMb
$memoryMax = [int]$profile.memory.maxMemAllocMb
if ($memoryMin -lt 1024 -or $memoryMax -lt $memoryMin -or $memoryMax -gt 32768) {
    throw '性能档位的内存范围无效。'
}

$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss-fff'
$backupDir = Join-Path $BackupRoot $timestamp
New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
Copy-Item -LiteralPath $OptionsPath -Destination (Join-Path $backupDir 'options.txt')
Copy-Item -LiteralPath $IrisPath -Destination (Join-Path $backupDir 'iris.properties')
Copy-Item -LiteralPath $InstanceConfigPath -Destination (Join-Path $backupDir 'instance.cfg')

$options = [System.IO.File]::ReadAllText($OptionsPath)
$options = Replace-KeyLine $options 'renderDistance' ':' ([int]$profile.options.renderDistance)
$options = Replace-KeyLine $options 'simulationDistance' ':' ([int]$profile.options.simulationDistance)
$options = Replace-KeyLine $options 'maxFps' ':' ([int]$profile.options.maxFps)
$options = Replace-KeyLine $options 'graphicsMode' ':' ([int]$profile.options.graphicsMode)
$options = Replace-KeyLine $options 'renderClouds' ':' ($(if ([bool]$profile.options.renderClouds) { '"true"' } else { '"false"' }))
$options = Replace-KeyLine $options 'entityShadows' ':' ($(if ([bool]$profile.options.entityShadows) { 'true' } else { 'false' }))
$options = Replace-KeyLine $options 'particles' ':' ([int]$profile.options.particles)
$options = Replace-KeyLine $options 'entityDistanceScaling' ':' ([double]$profile.options.entityDistanceScaling).ToString([System.Globalization.CultureInfo]::InvariantCulture)
$options = Replace-KeyLine $options 'mipmapLevels' ':' ([int]$profile.options.mipmapLevels)
$options = Replace-KeyLine $options 'biomeBlendRadius' ':' ([int]$profile.options.biomeBlendRadius)
Write-Utf8NoBom $OptionsPath $options

$iris = [System.IO.File]::ReadAllText($IrisPath)
$iris = Replace-KeyLine $iris 'enableShaders' '=' ($(if ([bool]$profile.iris.enableShaders) { 'true' } else { 'false' }))
Write-Utf8NoBom $IrisPath $iris

$instance = [System.IO.File]::ReadAllText($InstanceConfigPath)
$instance = Replace-KeyLine $instance 'MinMemAlloc' '=' $memoryMin
$instance = Replace-KeyLine $instance 'MaxMemAlloc' '=' $memoryMax
Write-Utf8NoBom $InstanceConfigPath $instance

$manifest = [ordered]@{
    profile = $ProfileName
    appliedAt = (Get-Date).ToString('o')
    backupDirectory = $backupDir
    options = $profile.options
    memory = $profile.memory
    iris = $profile.iris
}
Write-Utf8NoBom (Join-Path $backupDir 'manifest.json') (($manifest | ConvertTo-Json -Depth 8) + [Environment]::NewLine)

Write-Host "已应用性能档位：$($profile.label) ($ProfileName)" -ForegroundColor Green
Write-Host "备份位置：$backupDir"
Write-Host "内存：$memoryMin MB - $memoryMax MB"
Write-Host "视距：$($profile.options.renderDistance)，模拟距离：$($profile.options.simulationDistance)，FPS：$($profile.options.maxFps)"
Write-Host '请完全重启 Prism Launcher/Minecraft，使内存和 Iris 设置生效。'
