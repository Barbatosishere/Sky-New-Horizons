// server_scripts/exdeorum/budding_geore_loot.js
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
