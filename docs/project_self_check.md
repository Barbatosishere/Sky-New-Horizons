# 项目完整自检报告

检查时间：2026-10-12

本次检查为只读静态审计，没有启动游戏、修改配置、修复脚本或删除文件。

## 需要处理

### P2：性能档位脚本可能漏检正在运行的游戏

`profiles/performance/apply-performance-profile.ps1:42-48` 将 `$MinecraftDir` 的反斜杠转换为正斜杠，却直接与 Windows Java 进程命令行比较。命令行使用常见的反斜杠路径时，`Test-GameRunning` 返回 `False`，脚本可能在游戏运行期间覆盖 `options.txt`、Iris 配置和实例内存配置。

已用隔离的 PowerShell AST 测试复现：Windows 路径返回 `False`，同一路径改为正斜杠后返回 `True`。`restore-performance-profile.ps1:15-25` 已正确归一化两侧路径，可作为修复参考。

### P3：未启用的空岛模板存在越界方块状态

`skyblockbuilder/templates/islands/template.nbt` 的调色板有 7 项（合法索引 `0-6`），但 704 个方块中有 562 个引用 `state: 7`。该文件可解析，但引用不完整；当前 `config/skyblockbuilder/templates.json5:70` 使用的是 `config/skyblockbuilder/templates/islands/default.nbt`，所以这不是当前默认模板的启动错误。若以后启用 `skyblockbuilder/templates/islands/template.nbt`，应先修复或重新导出。

## 当前运行结果

- KubeJS：126 个 JS（startup 4、client 3、server 119）均通过 Node 语法解析。
- KubeJS 日志：startup `5/5`、client `3/3`、server `119/119`，均为 0 errors / 0 warnings。
- 配方重载日志：Added 875、Removed 619、Modified 0、Failed 0。
- `voidminers/miner_recipes.js` 生成 27 个唯一 ID，字段符合 Void Miners 1.6.11 的 KubeJS schema；该文件在 11:49 修改，现有 server 日志在 11:31，需 `/reload` 后重新确认。
- 126 个脚本的隔离执行检查捕获 743 个 recipe calls、381 个 custom、340 个 remove filters，无执行异常或重复显式配方 ID。

## 模组、配置和资源

- 280 个顶层 JAR、93 个嵌入 JAR，共 373 个档案；压缩包/CRC 错误 0。
- 必需依赖缺失 0，依赖版本不满足 0，顶层模组 ID 重复 0，Java 21 字节码兼容。
- `mods/arseng-2.1.1-beta.jar` 的 `neoforge.mods.toml` 使用了不规范的 `[[dependencies]]` 元数据；当前 AE2 和 Ars Nouveau 已安装且版本满足，属于低优先级上游打包问题。
- 366 个 TOML、102 个 JSON、14 个 JSON5、42 个 SNBT 均通过解析。
- FTB Quests：27 章节、6 分组、730 任务节点、904 子任务、18 奖励、15 任务链接；未发现重复 ID、悬空依赖或依赖环。
- 5 个 NBT 均可解析；仅上述未启用模板存在调色板越界。
- 283 个 ZIP/JAR 共读取约 908 MB，未发现读取错误；51 张 PNG 全部解码成功。

## 日志警告

现有 `logs/kubejs/server.log` 有 94 条 WARN，均来自模组自带配方数据或其 schema 兼容性，不是本仓 KubeJS 脚本加载失败：Create Nuclear 64、Useless Mod 12、Metal Barrels 7、Avaritia 8，以及 ae2ltpp、Create Better Motors、Casting 各 1 条。KubeJS 已回退处理这些配方，当前统计仍为 0 failed recipes。Casting 的铜合金 mixer 配方还引用了未注册的 `casting:molten_copper_alloy`，属于上游数据问题。

## 文档与版本卫生

- `README.md`、`README_EN.md` 和 `docs/known_issues.md` 仍写 NeoForge 21.1.248，实际 `mmc-pack.json` 为 21.1.251。
- `docs/known_issues.md` 仍写约 24 条 WARN，当前日志为 94 条，文档需要更新。
- `.gitignore` 忽略 `defaultconfigs/`、`packmenu/`、`tlm_custom_pack/`；README 却要求从仓库复制这些目录，而它们当前没有 Git 跟踪文件。这是发布完整性/文档一致性问题，不能据此判定当前实例运行失败。
- `git diff --check` 仅发现已有文件的尾随空格，没有冲突标记或解析错误。

## 限制

本次没有执行完整游戏启动、创建世界、任务逐项领取或实际 Void Miner 产出测试；因此不能把静态注册检查等同于完整玩法验证。旧的 GeOre 6.2.4 与 Growth Accelerator 冲突已通过当前 GeOre 6.2.3 的静态目标检查排除，但仍建议下次启动时以新日志确认。
