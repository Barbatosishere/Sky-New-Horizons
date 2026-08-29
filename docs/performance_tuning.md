# Sky New Horizons 性能调优记录

> 目标环境：Minecraft 1.21.1、NeoForge 21.1.x、Java 21。本文记录当前整合包的低风险性能配置，以及需要单独测试的候选模组。

## 本轮已调整

### Prism Launcher 实例内存

`instance.cfg` 当前设置为：

- `MinMemAlloc=6144`（6 GiB）
- `MaxMemAlloc=12288`（12 GiB）
- `JvmArgs=` 保持为空

本机物理内存约 32 GiB，因此 12 GiB 最大堆可以为 Windows、显卡和其他程序保留余量。没有把其他实例的 ZGC、`AlwaysPreTouch` 或长串 GC 参数复制到这个 NeoForge 实例；Java 21 默认 G1GC 是更保守的兼容选择。

### 客户端档位

`.minecraft/options.txt` 当前关键值：

- `renderDistance=10`
- `simulationDistance=8`
- `maxFps=260`（Minecraft 视频设置中的“无限制”档位）
- `renderClouds="false"`
- `entityShadows=false`
- `particles=0`（Minecraft 的全部粒子；低配档会改为 `2`，即最少）
- `enableVsync=false`

渲染距离主要影响客户端区块渲染，模拟距离会影响实体、方块实体和自动化区域的活动范围。FPS 不设置上限时，显卡可能持续满载；如果出现温度、功耗或画面撕裂问题，可在游戏内改为接近显示器刷新率的固定值。

### Sodium Extra 调试显示

关闭每 tick 刷新的 steady debug HUD：

- `steady_debug_hud=false`
- `steady_debug_hud_refresh_interval=20`

普通 FPS 显示仍保持开启。调试时可临时重新打开 steady HUD，但不建议作为日常设置。

### Packet Fixer

将 `allSizesUnlimited` 从 `true` 改为 `false`，保留配置中的 Minecraft 默认限制：

- NBT：2 MiB
- 普通包：1 MiB
- 解码器：8 MiB
- 区块包数据：2 MiB

无限制包大小不是 FPS 优化，会把异常 NBT 或数据包的内存影响扩大。若某个服务器确实需要更大的合法包，应只针对服务器需求调整具体上限，而不是全局解除限制。

## 当前建议保留的优化模组

- Sodium、Sodium Extra：客户端区块和渲染优化
- Iris、Iris-Flywheel Compat：需要着色器或 Create/Flywheel 兼容时保留；当前默认关闭着色器
- ImmediatelyFast：文字、GUI、HUD 和缓冲区优化
- ModernFix、FerriteCore：加载、内存和模型/方块状态优化
- Lithium：原版逻辑和 Tick 优化，但要通过 Create、AE2、Mekanism 压力场景验证
- FastSuite、FastWorkbench、FastFurnace：配方查询优化；FastSuite 的 Unsafe Mode 保持关闭
- CreateBetterFPS、Glodium、FlickerFix：属于与渲染路径交互较多的扩展，出现模型、粒子、透明方块或机械动画异常时优先二分排查
- EnderIO Conduit Opt：Ender IO 导管专项优化
- spark、Observable：性能诊断工具，不是常驻 FPS 加速器

## 可单独测试但本轮不盲加

### Entity Culling

适合机器、展示方块和容器密集的基地，但 Sodium 已经启用基础实体裁剪。若添加，应验证 Create 移动结构、玻璃后的机器、AE2 终端和 Iris 着色器；不要同时安装多个实体裁剪实现。

### Dynamic FPS

主要降低失焦或后台运行时的 FPS、功耗和发热，不会提升前台游戏性能。适合笔记本或经常切出游戏的场景。

### Clumps

只有存在高产经验农场、经验球数量很多时才值得测试；否则收益有限。

### Chunky

用于提前预生成区块，减少探索时的世界生成尖峰，不是客户端 FPS 模组。应在世界生成配置稳定、并做好世界备份后使用。

## 不建议直接添加

- Embeddium、Rubidium、OptiFine 或其他完整替代渲染器：当前已使用 Sodium，不能叠加
- 第二套配方并行/缓存优化器：当前已有 ModernFix、FastSuite、FastWorkbench 和 FastFurnace，继续叠加可能影响 KubeJS、Create 或 AE2 配方重载
- 未明确支持 NeoForge 1.21.1 的 C2ME、Noisium 等世界生成改造：大型自定义生物群系、结构和矿物包的线程安全风险较高
- Distant Horizons、Nvidium：属于高交互的远景/GPU 扩展，不是低风险通用优化

## 压力测试建议

遇到卡顿时，先用 spark 区分客户端渲染、区块生成、方块实体 Tick、实体 Tick、网络或内存回收，再用 Observable 定位具体机器。至少分别观察：

1. 空旷区域；
2. Create 机械网络；
3. AE2/Mekanism 自动化区域；
4. 探索新区域时的世界生成。

不要仅凭启动成功判断优化有效；重点确认配方、机械结构、网络更新和区块生成没有异常。

## 按硬件选择性能档位

仓库提供了可回滚的手动档位，位置为 `profiles/performance/`：

| 档位 | 适合系统内存 | Java 初始/最大堆 | 渲染/模拟距离 | FPS 默认值 | 光影 |
|---|---|---:|---:|---:|---|
| `low` | 8–12 GB | 2/4 GB | 6/4 | 60 | 关闭 |
| `medium` | 16 GB | 4/8 GB | 8/6 | 144 | 关闭 |
| `high` | 32 GB 以上 | 6/12 GB | 10/8 | 260（无限制） | 默认关闭 |

应用档位前必须退出游戏：

```powershell
Set-Location 'D:\MC\PrismLauncher_minecraft\Sky New Horizons\.minecraft\profiles\performance'
.\apply-performance-profile.ps1 low
.\apply-performance-profile.ps1 medium
.\apply-performance-profile.ps1 high
```

恢复最近一次备份：

```powershell
.\restore-performance-profile.ps1
```

档位脚本只修改白名单中的 `options.txt` 视频键、Iris 的 `enableShaders` 和实例内存值，并将原文件保存到带时间戳的本地备份目录。不会覆盖按键、资源包、存档、服务器列表或其他模组配置。

### 硬件瓶颈不是同一个维度

- GPU/显存不足时，优先选择 `low` 或 `medium`、关闭光影、降低渲染距离和粒子。
- CPU 单核性能不足时，降低 `simulationDistance` 并减少 FTB Chunks 强制加载、Create 机械网络和 AE2/Mekanism/SFM 高并发自动化；加大 Java 堆不能解决 Tick 瓶颈。
- 系统只有 8 GB 内存时，不要把 Java 最大堆设置为 8 GB；必须给 Windows、驱动和后台程序留出余量。
- 16 GB 系统不建议沿用当前 12 GB 最大堆；32 GB 以上通常 10–12 GB 已足够，除非实际出现内存不足。
- FPS 上限应结合显示器刷新率和温度调整。`maxFps=260` 是无限制档位，不代表所有电脑都应使用它。

`simulationDistance` 会改变实体、方块实体、农场和自动化的活动范围，因此它是“模拟/游戏行为”选项，不应在游戏运行中自动切换。光影主要取决于 GPU 和显存，也不应仅根据系统内存自动启用。
