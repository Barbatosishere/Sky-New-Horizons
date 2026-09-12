# Sky New Horizons（天空新视界）

> [English](README_EN.md) | 中文

科技 × 魔法 空岛生存整合包，基于自定义任务线与深度配方魔改，自带完整中文本地化。

| 项目 | 版本 |
|---|---|
| Minecraft | 1.21.1 |
| 加载器 | NeoForge 21.1.248 |
| Java | 21 |
| 当前整合包版本 | 0.3.7 |
| Mod 数量 | 270+ |

## 特点

- **空岛生存**：基于 SkyblockBuilder 的空岛世界，从一无所有到全自动工厂
- **任务引导**：FTBQuests 原创任务线，覆盖科技、魔法、存储、农业全流程（已汉化）
- **深度魔改**：KubeJS / CraftTweaker 大量自定义配方与脚本，许多进程做了平衡调整
- **完整中文化**：内置中文语言资源包与自定义纹理
- **性能优化**：Sodium、Lithium、ModernFix、FerriteCore、ImmediatelyFast、Dynamic FPS、Clumps 等优化栈开箱即用

## 主要 Mod 一览

| 类别 | 代表 Mod |
|---|---|
| 科技 | Mekanism、Create、EnderIO、Industrial Foregoing、PneumaticCraft、Immersive Engineering |
| 存储 | Applied Energistics 2、ExtendedAE、AdvancedAE、Sophisticated Storage、Functional Storage |
| 魔法 | Ars Nouveau、Forbidden Arcanus、Occultism、Nature's Aura |
| 农业 | Mystical Agriculture、ProductiveBees、BotanyPots、Ex Deorum |
| 魔改 | KubeJS、CraftTweaker、LootJS、AlmostUnified、FTB Quests |
| 性能 | Sodium、Lithium、ModernFix、FerriteCore、ImmediatelyFast、FastSuite、Dynamic FPS、Clumps |

完整列表见 [`mods/`](mods/) 目录。

## 安装

1. 安装 [Prism Launcher](https://prismlauncher.org/)（或任意支持 NeoForge 1.21.1 的启动器），并安装 **Java 21**
2. 新建 1.21.1 NeoForge 实例，将本仓库的 `mods`、`config`、`kubejs`、`resourcepacks`、`defaultconfigs`、`packmenu`、`skyblockbuilder`、`tlm_custom_pack` 覆盖进实例的 `.minecraft`
3. 内存建议 **6–12 GB**（初始 6 GiB / 最大 12 GiB）
4. 启动游戏，跟随任务书推进度

## 性能档位

仓库提供低 / 中 / 高三档硬件预设（渲染距离、模拟距离、FPS 上限、内存），见 [`profiles/performance/`](profiles/performance/)：

```powershell
cd profiles\performance
.\apply-performance-profile.ps1 medium   # low / medium / high
.\restore-performance-profile.ps1        # 回滚到最近备份
```

详细调优说明见 [`docs/performance_tuning.md`](docs/performance_tuning.md)。

## 更新日志

见 [CHANGELOG.md](CHANGELOG.md)。

## 作者

**Barbatosishere** — [Sky-New-Horizons](https://github.com/Barbatosishere/Sky-New-Horizons)

欢迎 Issue 反馈 Bug 与建议。整合包仅供学习交流，Mod 版权归各自作者所有。
