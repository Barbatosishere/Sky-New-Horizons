# Sky New Horizons

> English | [中文](README.md)

A tech × magic skyblock modpack built around a custom quest line, heavily customized recipes, and full Chinese localization.

| Item | Version |
|---|---|
| Minecraft | 1.21.1 |
| Loader | NeoForge 21.1.248 |
| Java | 21 |
| Modpack version | 0.3.7 |
| Mod count | 270+ |

## Highlights

- **Skyblock survival**: a SkyblockBuilder island world — from nothing to fully automated factories
- **Quest-driven**: an original FTBQuests line covering tech, magic, storage, and agriculture (localized in Chinese)
- **Heavy customization**: extensive custom recipes and scripts via KubeJS / CraftTweaker, with rebalanced progression
- **Localized**: bundled Chinese language resource pack and custom textures
- **Optimized out of the box**: Sodium, Lithium, ModernFix, FerriteCore, ImmediatelyFast, Dynamic FPS, Clumps, and more

## Mod Overview

| Category | Representative Mods |
|---|---|
| Tech | Mekanism, Create, EnderIO, Industrial Foregoing, PneumaticCraft, Immersive Engineering |
| Storage | Applied Energistics 2, ExtendedAE, AdvancedAE, Sophisticated Storage, Functional Storage |
| Magic | Ars Nouveau, Forbidden Arcanus, Occultism, Nature's Aura |
| Agriculture | Mystical Agriculture, ProductiveBees, BotanyPots, Ex Deorum |
| Coremod / Tweaks | KubeJS, CraftTweaker, LootJS, AlmostUnified, FTB Quests |
| Performance | Sodium, Lithium, ModernFix, FerriteCore, ImmediatelyFast, FastSuite, Dynamic FPS, Clumps |

See the [`mods/`](mods/) directory for the full list.

## Installation

1. Install [Prism Launcher](https://prismlauncher.org/) (or any launcher that supports NeoForge 1.21.1) along with **Java 21**
2. Create a 1.21.1 NeoForge instance, then copy this repository's `mods`, `config`, `kubejs`, `resourcepacks`, `defaultconfigs`, `packmenu`, `skyblockbuilder`, and `tlm_custom_pack` into the instance's `.minecraft`
3. Recommended memory: **6–12 GB** (6 GiB initial / 12 GiB max)
4. Launch the game and follow the quest book

Note: the quest book and most in-game text are written in Chinese.

## Performance Profiles

Low / medium / high hardware presets (render & simulation distance, FPS cap, memory) live in [`profiles/performance/`](profiles/performance/):

```powershell
cd profiles\performance
.\apply-performance-profile.ps1 medium   # low / medium / high
.\restore-performance-profile.ps1        # roll back to the latest backup
```

See [`docs/performance_tuning.md`](docs/performance_tuning.md) for detailed tuning notes (Chinese).

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## Author

**Barbatosishere** — [Sky-New-Horizons](https://github.com/Barbatosishere/Sky-New-Horizons)

Issues for bugs and suggestions are welcome. This modpack is for personal / educational use; all mods belong to their respective authors.
