// server_scripts/mekanism/crushing.js
ServerEvents.recipes(event => {
    // exdeorum:crushed_netherrack → minecraft:netherrack  [mekanism.crushing]
    event.recipes.mekanism.crushing('exdeorum:crushed_netherrack', 'minecraft:netherrack');
    // minecraft:red_sand → minecraft:netherrack  [mekanism.crushing]
    event.recipes.mekanism.crushing('minecraft:red_sand', 'minecraft:netherrack');
    // exdeorum:crushed_end_stone → minecraft:end_stone  [mekanism.crushing]
    event.recipes.mekanism.crushing('exdeorum:crushed_end_stone', 'minecraft:end_stone');
    // exdeorum:crushed_deepslate → minecraft:deepslate  [mekanism.crushing]
    event.recipes.mekanism.crushing('exdeorum:crushed_deepslate', 'minecraft:deepslate');
    // exdeorum:crushed_deepslate → minecraft:cobbled_deepslate  [mekanism.crushing]
    event.recipes.mekanism.crushing('exdeorum:crushed_deepslate', 'minecraft:cobbled_deepslate');
    // exdeorum:crushed_blackstone → minecraft:blackstone  [mekanism.crushing]
    event.recipes.mekanism.crushing('exdeorum:crushed_blackstone', 'minecraft:blackstone');
    // exdeorum:crushed_netherrack → exdeorum:compressed_netherrack  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('exdeorum:crushed_netherrack', 9), 'exdeorum:compressed_netherrack');
    // exdeorum:crushed_end_stone → exdeorum:compressed_end_stone  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('exdeorum:crushed_end_stone', 9), 'exdeorum:compressed_end_stone');
    // exdeorum:crushed_deepslate → exdeorum:compressed_deepslate  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('exdeorum:crushed_deepslate', 9), 'exdeorum:compressed_deepslate');
    // exdeorum:crushed_blackstone → exdeorum:compressed_blackstone  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('exdeorum:crushed_blackstone', 9), 'exdeorum:compressed_blackstone');
    // exdeorum:dust → exdeorum:compressed_sand  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('exdeorum:dust', 9), 'exdeorum:compressed_sand');
    // exdeorum:dust → exdeorum:compressed_red_sand  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('exdeorum:dust', 9), 'exdeorum:compressed_red_sand');
    // exdeorum:crushed_deepslate → exdeorum:compressed_cobbled_deepslate  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('exdeorum:crushed_deepslate', 9), 'exdeorum:compressed_cobbled_deepslate');
    // minecraft:gravel → exdeorum:compressed_cobblestone  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_cobblestone');
    // minecraft:gravel → exdeorum:compressed_diorite  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_diorite');
    // minecraft:gravel → exdeorum:compressed_granite  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_granite');
    // minecraft:gravel → exdeorum:compressed_andesite  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_andesite');
    // minecraft:sand → exdeorum:compressed_gravel  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('minecraft:sand', 9), 'exdeorum:compressed_gravel');
    // minecraft:red_sand → exdeorum:compressed_netherrack  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('minecraft:red_sand', 9), 'exdeorum:compressed_netherrack');
    // ae2lt:firmament_dust → naturesaura:sky_ingot  [mekanism.crushing]
    event.recipes.mekanism.crushing(Item.of('ae2lt:firmament_dust'), 'naturesaura:sky_ingot');
});
