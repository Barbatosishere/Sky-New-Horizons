# Sky New Horizons 性能档位

这里提供三套**手动选择**的性能档位。档位不会自动检测显卡，也不会覆盖整个 `config` 目录；自动判断硬件容易把核显、低显存显卡或高核心数 CPU 误判。

## 使用方法

请先完全退出 Minecraft，再在 PowerShell 中从本目录运行：

```powershell
Set-Location 'D:\MC\PrismLauncher_minecraft\Sky New Horizons\.minecraft\profiles\performance'
.\apply-performance-profile.ps1 low
.\apply-performance-profile.ps1 medium
.\apply-performance-profile.ps1 high
```

脚本会：

1. 检查 Sky New Horizons 是否仍在运行；
2. 读取对应的 JSON 档位；
3. 将当前 `options.txt`、`config/iris.properties` 和上层 `instance.cfg` 备份到 `backups/<时间戳>/`；
4. 只替换列入白名单的性能键；
5. 输出备份路径和需要重启的提示。

恢复最近一次备份：

```powershell
.\restore-performance-profile.ps1
```

恢复指定备份目录：

```powershell
.\restore-performance-profile.ps1 20260829-230000-000
```

备份目录也可以传入绝对路径。恢复脚本会先把当前配置另存为 `before-restore-<时间戳>`，因此恢复操作仍可回退。

> 不要在游戏运行时修改档位。`instance.cfg` 的内存和 Iris 配置需要完全重启后才会生效。

## 档位对照

| 档位 | 适合的整机内存/显卡 | Java 初始/最大堆 | 渲染/模拟距离 | FPS 默认值 | 光影 |
|---|---|---:|---:|---:|---|
| `low` | 8–12 GB、核显或低端独显 | 2/4 GB | 6/4 | 60 | 关闭 |
| `medium` | 16 GB、中端独显 | 4/8 GB | 8/6 | 144 | 关闭，可单独测试 Potato/Very Low |
| `high` | 32 GB 以上、中高端独显 | 6/12 GB | 10/8 | 260（无限制） | 关闭，可按 GPU 手动开启 |

### low：低配

适合系统内存紧张、显存不足或优先稳定帧时间的电脑：

- 图形模式 Fast；粒子最少；实体渲染距离 0.5；Mipmap 2；生物群系混合 0；
- 关闭云、实体阴影和光影；
- 建议减少 FTB Chunks 强制加载区块，暂停高并发 Create、AE2、Mekanism 和物流自动化；
- 8 GB 系统不要给 Java 分配 8 GB，必须为 Windows、驱动和后台程序留出内存。

`simulationDistance=4` 不只是画质选项，会缩小实体、方块实体、农场和自动化的活动范围。

### medium：平衡

适合 16 GB 系统内存和中端显卡：

- 8 区块渲染、6 区块模拟；
- FPS 默认 144；如果显示器是 60/75/120 Hz，应在游戏内改成对应值；
- 光影默认关闭。光影主要由 GPU/显存决定，不由 Java 堆大小决定。

### high：高配

适合 32 GB 以上系统内存和有充足显存的中高端显卡：

- 10 区块渲染、8 区块模拟；
- `maxFps=260` 是 Minecraft 的无限制档位，可能让 GPU 持续满载；
- 默认仍关闭云、实体阴影和光影，以优先保证大型基地的帧时间；
- 不建议仅因为内存足够就启用 Ultra 光影或把 Java 堆提高到 16 GB。

## 选择时要分别看三个瓶颈

- **GPU/显存**：决定渲染距离、光影、阴影、反射和粒子效果。Complementary 的 Potato/Very Low/Medium/High 应单独测试。
- **CPU 单核/IPC**：决定新区块生成、Create 动力学、AE2/Mekanism/SFM 物流和自动化区域的 MSPT/TPS。加大 Java 内存不能解决 CPU Tick 瓶颈。
- **系统内存**：决定模组加载、JEI/KubeJS、区块缓存和 GC 余量。最大堆不能超过系统可承受范围；应为 Windows 留出空间。

## 不随档位自动修改的设置

以下项目保持现有安全基线，不由低/中/高档位切换：

- Sodium 区块线程、延迟模式、render-ahead、staging buffer、GL context 和裁剪；
- ImmediatelyFast 实验选项；
- ModernFix 兼容性 mixin；
- FerriteCore 的线程检测风险选项；
- Lithium 功能开关；
- FastSuite Unsafe Mode；
- Packet Fixer 的协议限制。

这些设置涉及驱动、线程安全、Create/AE2/Mekanism 逻辑或网络安全，不是可靠的硬件等级开关。

## 备份与 Git

`backups/` 仅用于本地运行时备份，备份内容不应提交到 Git。档位 JSON、脚本和本说明属于版本控制内容。
