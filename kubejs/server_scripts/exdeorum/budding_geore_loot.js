// exdeorum/budding_geore_loot.js
// ─────────────────────────────────────────────────────────
// LootJS: 给 geore 模组的所有萌芽块（budding）添加 exdeorum:stone_pebble 掉落。
// 原文件 budding_geore.js
// ─────────────────────────────────────────────────────────

LootJS.modifiers((event) => {
  const materials = [
    "coal",
    "copper",
    "diamond",
    "emerald",
    "gold",
    "iron",
    "lapis",
    "quartz",
    "redstone",
    "ancient_debris",
    "ruby",
    "sapphire",
    "zinc",
    "uraninite",
    "black_quartz",
    "aluminum",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "uranium"
  ]

 for (const resource of materials) {
    event.addBlockModifier(`geore:small_${resource}_bud`).addLoot(LootEntry.of("exdeorum:stone_pebble"))
    event.addBlockModifier(`geore:medium_${resource}_bud`).addLoot(LootEntry.of("exdeorum:stone_pebble"))
    event.addBlockModifier(`geore:large_${resource}_bud`).addLoot(LootEntry.of("exdeorum:stone_pebble"))
  }
})