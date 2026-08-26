# Known Issues — Sky New Horizons

本页记录整合包中**无法在仓库内修复**的已知问题，便于升级 mod 时跟踪。
本整合包 Minecraft 版本：1.21.1，模组加载器：NeoForge 21.1.248。

## KubeJS 配方解析 WARN（24 条）

**现象**：游戏启动后，`logs/kubejs/server.log` 中出现约 24 条形如下方的 WARN：
```
[WARN] KubeRecipe.java#90: Failed to parse recipe '<id>[<type>]'!
       Falling back to vanilla: ...
```
游戏仍正常加载了 26,942 个配方并启动完成，**没有崩溃**。WARN 仅表明 KubeJS
的严格配方 schema 拒绝了上游 mod 自带的若干 JSON。

**根因**：所有 WARN 都源于上游 mod 自带的 `data/<mod>/recipe/*.json` 缺陷，
不是 `kubejs/server_scripts/` 中本仓脚本的输出。已逐条核对：
- `metalbarrels:upgrades/combine/wood_to_*`（8 条）— 上游把 `ingredients` 写成空数组。
- `Re-Avaritia` 9 条 + `ae2ltpp:packaged_core/avaritia_extreme_smithing_packaged_core` — `avaritia:extreme_smithing` 配方使用 `{"item":"avaritia:upgrade_smithing_template"}` 但缺 `id` 字段。
- `morethermalevaporation:*` 4 条 — 配方 `result` 指向未注册的物品键（`morethermalevaporation:*_thermal_evaporation_compact`）。
- `ironfurnaces:upgrades/upgrade_{vibranium,unobtainium}` — `pattern` 槽位使用 1.21 已废弃的 `optional_ingredient` schema。
- `create_better_motors:items/lava_quartz` — 使用 `minecraft:fluid_stack` 作为流体原料键，1.21.1 改名为 `neoforge:fluid`。
- `casting:mixer/copper_alloy` — 配方 `output` 引用了未注册流体 `casting:molten_copper_alloy`（casting mod 自带的 mixer 配方 bug）。

**涉及 mod 及版本**：

| Mod | 版本（实例中） | 状态 |
| --- | --- | --- |
| metalbarrels | 7 | 上游 1.21.1 NeoForge 端口 |
| Re-Avaritia | 1.4.1-release | 上游 fork（原 Avaritia 1.21.x） |
| ae2ltpp | 1.2.0-beta.1 | 引用 Avaritia 配方类型 |
| More Thermal Evaporation (morethermalevaporation) | 1.1 | 上游 |
| Iron Furnaces | 4.3.2 | 上游 |
| Create Better Motors | 4.0.0 | 上游 |
| Casting | 2.3.13 | 上游 |

**为什么不在仓库修复**：
1. 这些配方来自 mod 自带的 `data/` 数据包，不在本仓 `kubejs/` 之下。
2. 用 `event.remove()` 把它们清掉再重写，工作量大且容易与上游后续修复冲突。
3. 配方并非 *缺失*，只是 *回退到 vanilla parser*，玩家体感无异常。

**如何消除**：等上述 mod 上游修复（或用 `kubejs/server_scripts/` 中
`event.remove(...)` + 自定义 `event.recipes.<type>(...)` 重新实现；本仓目前不
走这条路线）。

---

## 其它（暂无功能性影响）

- `forbidden_arcanus:stella_arcanum` 同时属于 `c:ores_in_ground/stone` 与
  `c:ores_in_ground/deepslate` —— 上游 `forbidden_arcanus 2.6.1` 数据 bug。
  本仓已通过 `kubejs/server_scripts/fix_stella_arcanum_tags.js` 兜底。
- `IntelliJ IDEA 2026.1JetBrainsldea/`（拼写错误）目录是 IDE 日志，会被
  git 视为未跟踪。暂未加入 `.gitignore`。
- `moonlight-global-datapacks/` 与 `texturepacks/` 为空，非问题。
- 资源包 / 光影包各 1 个，状态正常。
