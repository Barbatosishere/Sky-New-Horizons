// kubejs/server_scripts/mekmm/stamper_recipes.js

ServerEvents.recipes(event => {

  // 金锭 → 金板
  event.custom({
    type: 'mekmm:stamper',
    input: { item: 'minecraft:gold_ingot', count: 1 },
    mold: { item: 'immersiveengineering:mold_plate' },
    output: { id: 'create:golden_sheet', count: 1 }
  }).id('kubejs:mekmm/create_golden_sheet_from_stamper_immersiveengineering_mold_plate');

  event.custom({
    type: 'mekmm:stamper',
    input: { item: 'minecraft:gold_ingot', count: 1 },
    mold: { item: 'casting:plate_mold' },
    output: { id: 'create:golden_sheet', count: 1 }
  }).id('kubejs:mekmm/create_golden_sheet_from_stamper_casting_plate_mold');

  // 铁锭 → 铁板
  event.custom({
    type: 'mekmm:stamper',
    input: { item: 'minecraft:iron_ingot', count: 1 },
    mold: { item: 'immersiveengineering:mold_plate' },
    output: { id: 'create:iron_sheet', count: 1 }
  }).id('kubejs:mekmm/create_iron_sheet_from_stamper_immersiveengineering_mold_plate');

  event.custom({
    type: 'mekmm:stamper',
    input: { item: 'minecraft:iron_ingot', count: 1 },
    mold: { item: 'casting:plate_mold' },
    output: { id: 'create:iron_sheet', count: 1 }
  }).id('kubejs:mekmm/create_iron_sheet_from_stamper_casting_plate_mold');

  // 黄铜锭 → 黄铜板
  event.custom({
    type: 'mekmm:stamper',
    input: { item: 'create:brass_ingot', count: 1 },
    mold: { item: 'immersiveengineering:mold_plate' },
    output: { id: 'create:brass_sheet', count: 1 }
  }).id('kubejs:mekmm/create_brass_sheet_from_stamper_immersiveengineering_mold_plate');

  event.custom({
    type: 'mekmm:stamper',
    input: { item: 'create:brass_ingot', count: 1 },
    mold: { item: 'casting:plate_mold' },
    output: { id: 'create:brass_sheet', count: 1 }
  }).id('kubejs:mekmm/create_brass_sheet_from_stamper_casting_plate_mold');

  // 铜锭 → 铜板
  event.custom({
    type: 'mekmm:stamper',
    input: { item: 'minecraft:copper_ingot', count: 1 },
    mold: { item: 'immersiveengineering:mold_plate' },
    output: { id: 'create:copper_sheet', count: 1 }
  }).id('kubejs:mekmm/create_copper_sheet_from_stamper_immersiveengineering_mold_plate');

  event.custom({
    type: 'mekmm:stamper',
    input: { item: 'minecraft:copper_ingot', count: 1 },
    mold: { item: 'casting:plate_mold' },
    output: { id: 'create:copper_sheet', count: 1 }
  }).id('kubejs:mekmm/create_copper_sheet_from_stamper_casting_plate_mold');

  // 雷加弗石 → 雷加弗板
  event.custom({
    type: 'mekmm:stamper',
    input: { item: 'create_better_motors:reggarfonite_gem', count: 1 },
    mold: { item: 'immersiveengineering:mold_plate' },
    output: { id: 'create_better_motors:reggarfonite_sheet', count: 1 }
  }).id('kubejs:mekmm/create_better_motors_reggarfonite_sheet_from_stamper_immersiveengineering_mold_plate');

  event.custom({
    type: 'mekmm:stamper',
    input: { item: 'create_better_motors:reggarfonite_gem', count: 1 },
    mold: { item: 'casting:plate_mold' },
    output: { id: 'create_better_motors:reggarfonite_sheet', count: 1 }
  }).id('kubejs:mekmm/create_better_motors_reggarfonite_sheet_from_stamper_casting_plate_mold');

});