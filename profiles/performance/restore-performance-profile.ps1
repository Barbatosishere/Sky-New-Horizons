[CmdletBinding()]
param(
    [Parameter(Position = 0)]
    [string]$BackupDirectory
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$ProfileDir = $PSScriptRoot
$MinecraftDir = Split-Path -Parent (Split-Path -Parent $ProfileDir)
$InstanceDir = Split-Path -Parent $MinecraftDir
$BackupRoot = Join-Path $ProfileDir 'backups'

function Test-GameRunning {
    $normalizedMinecraft = (($MinecraftDir -replace '\\', '/') -replace '/+', '/').TrimEnd('/')
    foreach ($process in (Get-CimInstance Win32_Process -ErrorAction SilentlyContinue)) {
        if ($process.Name -ne 'java.exe' -and $process.Name -ne 'javaw.exe') {
            continue
        }
        $commandLine = [string]$process.CommandLine
        $normalizedCommandLine = (($commandLine -replace '\\', '/') -replace '/+', '/')
        if ($normalizedCommandLine -and $normalizedCommandLine.IndexOf($normalizedMinecraft, [System.StringComparison]::OrdinalIgnoreCase) -ge 0) {
            return $true
        }
    }
    return $false
}

function Assert-File([string]$Path) {
    if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) {
        throw "备份文件不存在：$Path"
    }
}

if (Test-GameRunning) {
    throw '检测到 Sky New Horizons 正在运行。请完全退出游戏后再恢复性能档位。'
}

if ([string]::IsNullOrWhiteSpace($BackupDirectory)) {
    if (-not (Test-Path -LiteralPath $BackupRoot -PathType Container)) {
        throw "没有找到性能档位备份目录：$BackupRoot"
    }
    $backup = Get-ChildItem -LiteralPath $BackupRoot -Directory |
        Where-Object { $_.Name -match '^\d{8}-\d{6}-\d{3}$' } |
        Sort-Object Name -Descending |
        Select-Object -First 1
    if ($null -eq $backup) {
        throw "没有找到可恢复的性能档位备份：$BackupRoot"
    }
    $BackupDirectory = $backup.FullName
} elseif (-not [System.IO.Path]::IsPathRooted($BackupDirectory)) {
    $BackupDirectory = Join-Path $BackupRoot $BackupDirectory
}

$BackupDirectory = [System.IO.Path]::GetFullPath($BackupDirectory)
$optionsBackup = Join-Path $BackupDirectory 'options.txt'
$irisBackup = Join-Path $BackupDirectory 'iris.properties'
$instanceBackup = Join-Path $BackupDirectory 'instance.cfg'
foreach ($path in @($optionsBackup, $irisBackup, $instanceBackup)) {
    Assert-File $path
}

$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss-fff'
$beforeRestore = Join-Path $BackupRoot ("before-restore-" + $timestamp)
New-Item -ItemType Directory -Path $beforeRestore -Force | Out-Null
Copy-Item -LiteralPath (Join-Path $MinecraftDir 'options.txt') -Destination (Join-Path $beforeRestore 'options.txt')
Copy-Item -LiteralPath (Join-Path $MinecraftDir 'config/iris.properties') -Destination (Join-Path $beforeRestore 'iris.properties')
Copy-Item -LiteralPath (Join-Path $InstanceDir 'instance.cfg') -Destination (Join-Path $beforeRestore 'instance.cfg')

Copy-Item -LiteralPath $optionsBackup -Destination (Join-Path $MinecraftDir 'options.txt') -Force
Copy-Item -LiteralPath $irisBackup -Destination (Join-Path $MinecraftDir 'config/iris.properties') -Force
Copy-Item -LiteralPath $instanceBackup -Destination (Join-Path $InstanceDir 'instance.cfg') -Force

Write-Host "已恢复性能配置备份：$BackupDirectory" -ForegroundColor Green
Write-Host "恢复前的当前配置已另存为：$beforeRestore"
Write-Host '请完全重启 Prism Launcher/Minecraft，使内存和 Iris 设置生效。'
