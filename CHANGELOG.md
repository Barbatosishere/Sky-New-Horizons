# Sky New Horizons - 更新日志

> 当前版本：**SkyNH 0.3.8**
> Minecraft 版本：1.21.1 (NeoForge)
> NeoForge 版本：21.1.251
> 仓库：[Barbatosishere/Sky-New-Horizons](https://github.com/Barbatosishere/Sky-New-Horizons)

---

## v0.3.8 (2026-10-12)

本版本整合了此前 0.3.8/0.3.9 beta 阶段的改动，重点更新模组依赖、KubeJS 配方和任务配置，并完成一次全项目静态自检。

### 🔧 Mod 与运行环境
- NeoForge 更新至 `21.1.251`，Minecraft 仍为 `1.21.1`，Java 要求仍为 21。
- 批量更新 AE2、Apotheosis、Ars Nouveau、Create、FTB、Mekanism、ProductiveBees、Sophisticated、Void Miners 等模组。
- 新增或启用 Astral Sorcery、Productive Bees Genesis、AppliedAs、Compact Extreme Reactors、Pipez Optimizer、ObserverLib 等组件。
- GeOre 固定为 `6.2.3`，与 Growth Accelerator Tiers `2.0.0` 的 Mixin 目标保持兼容。
- 清理旧版本模组 JAR、卸载残留配置、备份文件和运行缓存，保留当前实例所需内容。

### 📜 KubeJS 与配方
- KubeJS 目录整理为 startup、client、server 三类脚本；当前共 126 个 JavaScript 文件。
- 新增 ProductiveBees Genesis、JDTE、MekMM、Void Miners 等配方兼容脚本。
- Void Miners 新增矿物产出配置，覆盖维度、最低等级、权重和高等级继承，共 27 条唯一配方。
- 修复 Powah、Mekanism Generators、Iron Furnaces、IFMUP、Create Connected、EnderIO Evolution 等配方移除 ID，清理无效 `event.remove`。
- 修复 ProductiveBees 蜂种、Astral Sorcery 矿物、Avaritia、ExtendedAE、Casting、筛网和机械合成相关配方。
- 清理已删除脚本、重复配方和历史注释，统一脚本目录和命名。

### 📋 任务、配置与资源
- 更新 FTB Quests 章节、任务依赖、奖励和中文语言数据，补充新增模组的任务内容。
- 更新 SkyblockBuilder、JEI、Jade、Iris、JDTE、ProductiveBees、Useless Mod 等配置。
- 更新中文语言资源包、自定义纹理和 KubeJS 数据包；补充新增模组的默认配置文件。
- 增加性能档位脚本和低 / 中 / 高三档配置，统一实例内存建议为 6–12 GiB。

### ✅ 自检结果
- 126 个 KubeJS 文件通过语法检查；startup、client、server 脚本加载均为 0 errors / 0 warnings。
- 配方重载结果为新增 875、移除 619、失败 0。
- 373 个模组档案通过压缩完整性、依赖和 Java 21 字节码检查。
- TOML、JSON、JSON5、SNBT 和 FTB Quests 数据均通过静态解析。

### ⚠️ 已知问题
- 上游模组配方仍会产生约 94 条回退 WARN，涉及 Create Nuclear、Useless Mod、Metal Barrels、Avaritia、Casting 等，不影响 KubeJS 脚本加载。
- 性能档位应用脚本在 Windows 反斜杠路径下可能漏检正在运行的游戏，应用档位前应先完全退出游戏。
- `skyblockbuilder/templates/islands/template.nbt` 为未启用模板，存在调色板索引越界；默认模板不受影响。

## v0.3.7 (2026-09-12)

### 🔧 Mod 更新与新增
- **批量更新 Mod**（60+ 个），主要包括：
  - AE2 系列：ae2lt (2.0.4)、AdvancedAE (1.6.12)、ExtendedAE (2.2.35)、ae2wtlib (19.5.1)、AppliedCreate (1.1.7)
  - FTB 系列：ftb-chunks (2101.1.21)、ftb-library (2101.1.34)、ftb-quests (2101.1.29)、ftb-essentials (2101.1.10)、ftb-xmod-compat (21.1.10)
  - Sophisticated 系列：sophisticatedcore (1.4.80)、sophisticatedbackpacks (3.25.73)、sophisticatedstorage (1.5.83)
  - Apotheosis 系列：Apotheosis (8.7.0)、ApothicAttributes (2.10.1)、ApothicEnchanting (1.6.0)、ApothicSpawners (1.4.0)
  - Integrated 系列：integrateddynamics (1.34.0)、integratedterminals (1.7.0)、integratedtunnels (1.9.4)、integratedmekanism (1.0.4)
  - 其他：PneumaticCraft (8.2.23)、Sodium (0.8.13-beta.1)、ModernFix (5.27.20)、JEI (19.43.0.393)、Rhino (2101.2.8-build.91)、ldlib2 (2.2.32)、Moonlight (3.3.0)、Occultism (1.224.1)
- **新增 Mod**：
  - EnderIO Evolution (3.1.3)、EnderIO Conduit Optimizer (1.1.0)
  - Flux Overdrive (1.0.4)、Thunderbolt (1.0.1)
  - Multiblocked2 (21.0.11)、PackagedExCrafting (4.0.0.11)
  - JustDireThings (1.5.7)、ItemCollectors (1.1.10)、Modular Routers (13.2.7)
  - CobbleGenGalore (0.2.9)、MoreThermalEvaporation (1.1)
  - Quest Enhance (2.7)、CreateUltimine (1.3.2)、CreateJEICompat (1.0.3)
  - ExtraHNN (2.2.5)、MEPlacementTool (2.1.5)、ae2ltpp (1.1.1)
  - Quark (4.1-482)、Re-Avaritia (1.4.1)、SkyblockBuilder (21.1.32)
- **删除 Mod**：Reliable Recipes

### 🍯 ProductiveBees 新增
- 新增 **中子素蜜蜂 (Neutronium Bee)**：
  - 以中子锭为花方块和繁殖物品，不可自然繁殖
  - 产出中子素蜂窝，离心可获得中子碎片 (1-5个)
  - 具有凋零效果被动攻击，防火防水

### 🚀 性能 Mod
- 新增 Dynamic FPS `3.11.4`（客户端后台降载）
- 新增 Clumps `19.0.0.1`（经验球合并）
- 移除 ServerCore：默认配置对当前包没有可感知收益，行为改变选项又不适合 Create / AE2 / Mekanism / FTB Chunks

### ⚙️ 启动与仓库
- Prism Launcher `instance.cfg` 内存改为 `MinMemAlloc=6144`、`MaxMemAlloc=12288`，与 high 档文档一致；不再使用 8 MB 初始堆 / 16 GiB 最大堆
- `.gitignore` 增加 `.zcode/`、`nul`、`IntelliJ IDEA*/`、`*.bak`
- 删除 IDE 缓存、空 `nul` 文件、配置 `.bak`，以及已卸载 Mod 的残留配置（Advanced Rocketry、CC: Tweaked、CCCBridge、JAMD、Extended Compressor、Re-Endergy、KEnergy、Lingua Peripherals、Title Changer、Default World Type、Reliable Recipes、Better Advanced Tooltips、libIPN、Fabric Indigo、Avaritia Expand 及其堆肥颜色表）
- `.packignore` 补充 `.cache`、`.gitignore`、`crash-reports`、`ldlib2`、`logs`、`spark`、`texturepacks`、`patchouli_data.json`，导出整合包时自动排除

### 🐛 Bug 修复
- **修复 mekmm CNC 压模机配方 ReferenceError**：`stamper_recipes.js` 金板/铁板使用 `minecraft:gold_ingot` / `minecraft:iron_ingot`，避免 AlmostUnified 把金锭标签改写成黄铜；当前压模表为 5 组板材 × 2 种模具（金/铁、黄铜、铜、reggarfonite）
- **ECO 集成工作站**（`neoecoae:integrated_working_station`）：移除旧配方与脚本，新配方改放到 `kubejs/server_scripts/ECO/aeintegrated_working_station.js`
- **修复 `extendedae_plus:infinity_biginteger_cell` 配方**：用 avaritia `infinity_crafting`（4×4 超维工作台）重写，输入 5 大类 256m 存储元件 + netherite_block + oblivion_singularity + infinity_core，输出 ×1
- **JEI 取消隐藏** `extendedae_plus:infinity_biginteger_cell`
- **修复 `voidminers/miner_recipes.js`**：移除多余的 `JsonObject` 包装，将 `the_nethe` 拼写错误修正为 `the_nether`
- **删除 `productivebees/removes.js`**：先清理 4 个不存在物品的 quark 蜂箱/扩展箱 event.remove 警告，随后整个文件移除，仅保留 `honey_generator.js`
- **修复超导印刷电路序列装配**：印刷电路配方改用 `skynh:superconducting_processor_print` 作为过渡物品，不再和过载电路板抢 `ae2lt`
- **修复中子素 / 反物质蜜蜂凋零光环**：效果 ID 改为 `minecraft:wither`，并改成 ProductiveBees 要求的数组结构
- **补回种植站配方**：原版 `mekmm:planting_station` 仍移除；改由工业先锋溶解室 + 500mB 暗耀流体合成
- **修复灵魂沙 / 粉碎下界岩筛网**：`remove` 改为按输入方块 + 目标掉落清理原版配方，产量补上 `minecraft:uniform` / `binomial` 类型
- **修复铀晶块铸模**：810mB 凝固体输出 `powah:uraninite_block`
- **修复下界岩粉碎冲突**：去掉与碎下界岩抢同一输入的红沙配方
- **太阳能发电机**：删除原版便宜配方，只保留钋锭新配方
- **实体加速卡**：按真实配方 ID 移除 `entity_speed_card_x2/x4/x8/x16`
- **FTB Chunks 坟包白名单**：`epitaphs:grave` 改为 `gravestone:gravestone`
- **粗艾瑟金属虚空采矿等级**降至 3
- **锡晶芽**补入 GeOre 石子战利品
- **黄铜样板供应器机械合成**指定合法配方 ID，避免 `create:kjs/appliedcreate:...` 注册失败
- **任务回退语言**改为 `zh_cn`（英文语言文件为空）
- **窗口标题脚本**不再读取被 KubeJS 拦截的 `java.lang.System`
- **修正一批空 `event.remove`**：Powah / IFMUP 插件 / 神秘农业种子 / Iron Furnaces / IE 温差发电机 / Integrated Dynamics 煤炭发电机 / Create Connected 流体容器 / 龙之研究发电机 / EnderIO Evolution 发电机，改为数据包真实配方 ID（JEI 隐藏不再等于删配方）
- **Apotheosis 8.8 材料改名**：铁/金/钻石升级模板和熵种子不再引用已删除的 `common/uncommon/rare/epic/mythic_material`，改为 `mysterious_scrap_metal` / `timeworn_fabric` / `luminous_crystal_shard` / `arcane_sands` / `godforged_pearl`
- **压缩下界岩粉碎冲突**：去掉与碎下界岩抢同一输入的红沙配方
- **Mekanism 发电机移除 ID**：风/生物燃气/燃气/温差发电机改为 `generator/*` 真实路径；菌丝反应堆改为 `dissolution_chamber/mycelial_reactor`
- **清理死代码**：删除指向不存在配方的移除（IFMUP 高级远程插件 47/63/71/79 级、四种板材、AppliedCreate 旧 `create:kjs/...` 自动 ID）

### 📜 KubeJS 配方调整
- **新增配方**：
  - 重载合金毛坯 (ae2lt:overload_alloy_blank)：使用末影之眼、紫水晶碎片、红石、天空之锭、熵之锭、增强红石锭
  - 冶金灌注机 (mekanism:metallurgic_infuser)：使用铁锭、熔炉、红石、钢壳
  - 种植站 (mekmm:planting_station)：通过工业先锋溶解室制作，使用暗耀流体
  - 铂锭冶炼：Create 粉碎铂矿可通过 blasting 获得；新增水洗粉碎铂矿配方
  - pneumaticcraft 压力室增补混沌碎片、超导晶体等配方
- **移除配方**：
  - ECO 超频处理器合成配方
  - 冶金灌注机、种植站原始配方
  - 灵魂火灵魂调谐宝石配方（改为其他获取方式）
  - 重载合金毛坯、Entangled 方块原始配方
  - Quark 木质蜂箱/扩展箱配方（无对应木材）
  - JustDireThings T1 发电机相关物品
  - 钢铁配方：移除 CreateNuclear 和 ATO 冶炼配方，新增其他途径
- **配方修改**：
  - 熵之种子配方中灵魂宝石改为三位一体宝石 (trinity_gem)
- **修复**：
  - 序列组装中过载压印模板的变量引用错误
- 几乎所有 `kubejs/server_scripts/` 与 `kubejs/client_scripts/` 注释清理：删除冗余历史注释，按 "X → Y" 翻译风格重写

### ⛏️ 虚空采矿机调整
- 粗艾瑟金属 (Iesnium) 采集等级从 4 降至 3
- 调整部分矿物采集参数

### 📋 任务系统
- 更新大量 FTBQuests 任务章节配置（20+ 章节），新增 2 个任务章节
- 更新任务中文语言文件、FTB 任务数据与客户端配置
- 调整任务图标/触发器配置

### ⚙️ 配置调整
- 更新 ae2lt、Avaritia、Flux Overdrive、Dummmmmmy、Explorer's Compass、FarmingForBlockheads、PacketFixer、Sodium Extra、SkyblockBuilder 等 Mod 配置
- 更新 Apotheosis 名称生成配置
- 新增 EnderIO Conduit Optimizer、EnderIO Evolution、CCCbridge、JustDireThings、Lingua Peripherals、MBD2、ItemCollectors 等 Mod 配置
- 更新 Compost Colors 新增 Mod 兼容（ComputerCraft、JustDireThings、LinguaPeripherals、MBD2）
- 更新 JEI、Jade 排序与插件配置
- 更新 FTBChunks 小地图配置
- `config/almostunified/unification/materials.json` 新增 11 条 mekmm IE 板兼容配方 ignore ID，防止 AlmostUnified 改写
- 删除过时的 `config/exdeorum/compost_colors/quark.txt` 和 `config/quark-common.toml`

### 🎨 资源包与其他
- 更新中文语言资源包
- 新增 IntegratedTerminals KubeJS 资源
- 新增 ae2lt 数据包（中子素 energized crystal 过载处理配方）

---

## v0.3.6 (2026-06-29)

### 🐛 Bug 修复
- 为 Apotheosis 附魔系统添加了 `forbidden_arcanus:soul_looting` 附魔配置
- 修复了 Apotheosis 名称生成系统中各工具材质的物品归属问题：
  - 修复 MysticalAgriculture 工具（Supremium、Tertium、Awakened Supremium）从 `mysticalagradditions:paxel` 改为正确的独立工具 ID
  - 新增 Forbidden Arcanus 各材质 Blacksmith Gavel 的工具名称组
  - 新增 Botania 工具（Glass Pickaxe、Manasteel、Elementium、Terrasteel）和盔甲（Manaweave、Terrasteel、Manasteel、Elementium）的名称组
  - 新增 Advanced Rocketry 太空服的盔甲名称组

### ⚙️ 配置调整
- 更新 EnderIO 配置：禁用灵魂瓶（Soul Vial）修改刷怪笼功能，限制火焰追踪数量
- 关闭 Create Better Motors 的更新提示消息

### 🔧 Mod 更新
- EnderIO 更新至 8.2.11-beta
- ProductiveBees 更新至 13.13.5
- 更新 Mob Grinding Utils

---

## v0.3.5 (2026-06-22)

### ⚙️ 优化
- 禁用 BotanyPots 的 MysticalAgriculture 种子掉落（`allow_seed_drops` 设为 false）
- 更新 FTBChunks 小地图实体图标映射
- 优化 JEI 书签，清理冗余条目，新增 MysticalAgriculture 种子相关书签

### 🐛 Bug 修复
- 更新 MysticalCustomization 作物等级配置文件

---

## v0.3.4 (2026-06-21)

### ⚙️ 优化
- 更新 FTBChunks 小地图实体图标完整映射表
- 关闭 DraconicEvolution 混沌守卫（Chaos Guardian）着色器渲染，防止部分显卡崩溃
- 清理 JEI 书签数据

### 🐛 Bug 修复
- 新增 BBL Casting 工具强化备份配置文件
- 移除无用合成配方

---

## v0.3.3 (2026-06-20)

### ⚙️ 优化
- 部分游戏配置优化调整

---

## v0.3.2 (2026-06-15)

### 🐛 Bug 修复
- 修复了部分已知 Bug

---

## v0.3.1 (2026-06-14)

### ✨ 新增内容
- **任务线大幅优化**：新增/重写了大量任务章节
- 新增 Mod：
  - EnchantingInfuser（附魔灌注器）
  - NeoEcoAE（经济 AE 扩展）
  - Observable（性能监测）
  - Spark（性能分析）
  - Tweakerge（合成调整）
  - 更新 ae2lt 至 1.0.15、ldlib2 至 2.2.18
- 新增 KubeJS 脚本：
  - `BBL_Compat.js` - BBL 兼容配方
  - `FTB.js` - FTB 任务交互
  - `Mother_Rock_Formula.js` - 母岩配方
  - `bedrock_infinity.js` - 基岩无限化
  - `budding_geore.js` - 晶芽相关
  - `darkshine.js` - 暗耀相关
  - `pneumaticcraft.js` - 气动工艺配方
  - `pressure_recioe.js` - 压力容器配方
  - `remove_Avaritia.js` - 无尽贪婪配方移除
  - `sequenced_assembly.js` - 序列组装配方
  - `voidminers.js` - 虚空采矿机配方
- 新增自定义纹理：熔融 budding 铀矿流体、超导处理器、硝基晶体块等
- 新增 ProductiveBees 反物质蜜蜂数据

### 🐛 Bug 修复
- AE2 客户端显示单位从 AE 改为 FE
- 修复 Apotheosis 名称生成中 MysticalAgriculture 工具组的归属
- 新增 NeoEcoAE 工具（钨、铝合金、黑钨合金、铝）的名称组
- 更新 FTB 任务中文语言文件

---

## v0.3.0 (2026-06-05)

### ⚙️ 优化
- **筛矿系统优化**：
  - 从深板岩/沙砾筛矿中移除青金石、钻石、绿宝石的直接掉落，改为独立低概率精华掉落
  - 调整各等级筛网的矿石碎片掉落数量（整体略微下调）
  - 新增灵魂沙筛矿配方（萤石粉、烈焰粉、下界疣）
  - 新增下界岩筛矿配方（石英、烈焰粉）
- 新增 Mekanism 粉碎配方：圆石→深板岩、末地石→末地石粉、下界岩→下界岩粉、黑石→黑石粉
- 将 Mekanism 相关脚本整理至 `mek/` 子目录

### 🐛 Bug 修复
- 修复处理器纹理 mcmeta 文件（多维扩展电路板、过载电路板动画）

---

## v0.2.0 (2026-06-04)

### 🎉 初始发布
- 基于 Minecraft 1.21.1 NeoForge 的科技魔法空岛整合包
- 包含 200+ Mod，涵盖：
  - **科技**：Mekanism、Create、EnderIO、Industrial Foregoing、PneumaticCraft、Immersive Engineering、Advanced Rocketry 等
  - **魔法**：Ars Nouveau、Forbidden Arcanus、Occultism、Botania、Nature's Aura 等
  - **存储**：Applied Energistics 2、Sophisticated Storage、Functional Storage、Tom's Simple Storage 等
  - **农业**：Mystical Agriculture、ProductiveBees、BotanyPots、Ex Deorum 等
  - **魔改**：KubeJS、CraftTweaker、LootJS、AlmostUnified 等
  - **优化**：Sodium、Lithium、ModernFix、FerriteCore、ImmediatelyFast 等
- 自定义任务系统（FTBQuests）
- 空岛生成器（SkyblockBuilder）
- 完整的 KubeJS 自定义配方与脚本
- 大量自定义纹理与中文本地化

---

## 版本历史

| 版本         | 日期         | 主要变更                              |
|------------|------------|-----------------------------------|
| 0.3.8 | 2026-10-12 | NeoForge 与模组更新、KubeJS 配方整理、任务配置更新、项目自检 |
| 0.3.7 | 2026-09-12 | Mod 批量更新、中子素蜜蜂、KubeJS 配方修复（mekmm/ECO/ExtendedAE+）、内存修正、性能调整与残留清理 |
| 0.3.6      | 2026-06-29 | Apotheosis 附魔兼容、EnderIO 配置、Mod 更新 |
| 0.3.5      | 2026-06-22 | 禁用 BotanyPots 种子掉落、JEI 书签优化       |
| 0.3.4      | 2026-06-21 | FTBChunks 实体图标、关闭 DE 着色器          |
| 0.3.3      | 2026-06-20 | 部分配置优化                            |
| 0.3.2      | 2026-06-15 | 部分 Bug 修复                         |
| 0.3.1      | 2026-06-14 | 任务线优化、新增 Mod 与脚本、AE2 单位修复         |
| 0.3.0      | 2026-06-05 | 筛矿系统优化、Mekanism 粉碎配方              |
| 0.2.0      | 2026-06-04 | 初始发布                              |
