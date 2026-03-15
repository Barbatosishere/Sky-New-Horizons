ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting('extendedcrafting:basic_table', [
    'AAAAA',
    'ABCBA',
    'AEFEA',
    'ABDBA',
    'AAAAA'
  ], {
    A:"extendedcrafting:black_iron_block",
    B:"extendedcrafting:basic_component",
    C:"extendedcrafting:basic_catalyst",
    D:"extendedcrafting:black_iron_slate",
    E:"minecraft:crafting_table",
    F:"minecraft:iron_block"
  })

    event.recipes.create.mechanical_crafting('extendedcrafting:advanced_table', [
    'AAAAA',
    'ABCBA',
    'AEFEA',
    'ABDBA',
    'AAAAA'
  ], {
    A:"extendedcrafting:black_iron_block",
    B:"extendedcrafting:advanced_component",
    C:"extendedcrafting:advanced_catalyst",
    D:"extendedcrafting:black_iron_slate",
    E:"extendedcrafting:basic_table",
    F:"minecraft:gold_block"
  })

    event.recipes.create.mechanical_crafting('extendedcrafting:elite_table', [
    'AAAAA',
    'ABCBA',
    'AEFEA',
    'ABDBA',
    'AAAAA'
  ], {
    A:"extendedcrafting:black_iron_block",
    B:"extendedcrafting:elite_component",
    C:"extendedcrafting:elite_catalyst",
    D:"extendedcrafting:black_iron_slate",
    E:"extendedcrafting:advanced_table",
    F:"minecraft:diamond_block"
  })

    event.recipes.create.mechanical_crafting('extendedcrafting:ultimate_table', [
    'AAAAA',
    'ABCBA',
    'AEFEA',
    'ABDBA',
    'AAAAA'
  ], {
    A:"extendedcrafting:black_iron_block",
    B:"extendedcrafting:ultimate_component",
    C:"extendedcrafting:ultimate_catalyst",
    D:"extendedcrafting:black_iron_slate",
    E:"extendedcrafting:elite_table",
    F:"minecraft:emerald_block"
  })
})