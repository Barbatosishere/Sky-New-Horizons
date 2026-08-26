// mekanism/combining.js
// ─────────────────────────────────────────────────────────
// Mekanism Combining 配方（8 阶控制电路） - 来自原 mek/mek_recipe_fusion.js
// 与 ../mekanism/control_circuits.js（shaped_table 配方）配合：
//   shaped_table 是手工合成路径；combining 是机器批量生产路径。
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
  event.recipes.mekanismCombining
  ('mekanism:basic_control_circuit',
    Item.of('minecraft:redstone', 8) ,
      'immersiveengineering:ingot_steel')

  event.recipes.mekanismCombining
  ('mekanism:advanced_control_circuit',
    Item.of('mekanism:alloy_infused', 8) ,
      'mekanism:basic_control_circuit')
      
  event.recipes.mekanismCombining
  ('mekanism:elite_control_circuit',
    Item.of('mekanism:alloy_reinforced', 8) ,
      'mekanism:advanced_control_circuit')
      
  event.recipes.mekanismCombining
  ('mekanism:ultimate_control_circuit',
    Item.of('mekanism:alloy_atomic', 8) ,
      'mekanism:elite_control_circuit')
      
  event.recipes.mekanismCombining
  ('mekanism_extras:absolute_control_circuit',
    Item.of('mekanism_extras:alloy_radiance', 8) ,
      'mekanism:ultimate_control_circuit')
      
  event.recipes.mekanismCombining
  ('mekanism_extras:supreme_control_circuit',
    Item.of('mekanism_extras:alloy_thermonuclear', 8) ,
      'mekanism_extras:absolute_control_circuit')
      
  event.recipes.mekanismCombining
  ('mekanism_extras:cosmic_control_circuit',
    Item.of('mekanism_extras:alloy_shining', 8) ,
      'mekanism_extras:supreme_control_circuit')
      
  event.recipes.mekanismCombining
  ('mekanism_extras:infinite_control_circuit',
    Item.of('mekanism_extras:alloy_spectrum', 8) ,
      'mekanism_extras:cosmic_control_circuit')
})