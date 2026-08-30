// server_scripts/create/crushing.js
ServerEvents.recipes(event =>{
    // exdeorum:crushed_deepslate → minecraft:cobbled_deepslate  [create.crushing]
    event.recipes.create.crushing(Item.of('exdeorum:crushed_deepslate'), 'minecraft:cobbled_deepslate').processingTime(200);
    // exdeorum:crushed_netherrack → exdeorum:compressed_netherrack  [create.crushing]
    event.recipes.create.crushing(Item.of('exdeorum:crushed_netherrack', 9), 'exdeorum:compressed_netherrack').processingTime(1000);
    // exdeorum:crushed_end_stone → exdeorum:compressed_end_stone  [create.crushing]
    event.recipes.create.crushing(Item.of('exdeorum:crushed_end_stone', 9), 'exdeorum:compressed_end_stone').processingTime(1000);
    // exdeorum:crushed_deepslate → exdeorum:compressed_deepslate  [create.crushing]
    event.recipes.create.crushing(Item.of('exdeorum:crushed_deepslate', 9), 'exdeorum:compressed_deepslate').processingTime(1000);
    // exdeorum:crushed_blackstone → exdeorum:compressed_blackstone  [create.crushing]
    event.recipes.create.crushing(Item.of('exdeorum:crushed_blackstone', 9), 'exdeorum:compressed_blackstone').processingTime(1000);
    // minecraft:gravel → exdeorum:compressed_cobblestone  [create.crushing]
    event.recipes.create.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_cobblestone').processingTime(1000);
    // minecraft:gravel → exdeorum:compressed_diorite  [create.crushing]
    event.recipes.create.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_diorite').processingTime(1000);
    // minecraft:gravel → exdeorum:compressed_granite  [create.crushing]
    event.recipes.create.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_granite').processingTime(1000);
    // minecraft:gravel → exdeorum:compressed_andesite  [create.crushing]
    event.recipes.create.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_andesite').processingTime(1000);
    // minecraft:sand → exdeorum:compressed_gravel  [create.crushing]
    event.recipes.create.crushing(Item.of('minecraft:sand', 9), 'exdeorum:compressed_gravel').processingTime(1000);
    // exdeorum:dust → exdeorum:compressed_sand  [create.crushing]
    event.recipes.create.crushing(Item.of('exdeorum:dust', 9), 'exdeorum:compressed_sand').processingTime(1000);
    // exdeorum:dust → exdeorum:compressed_red_sand  [create.crushing]
    event.recipes.create.crushing(Item.of('exdeorum:dust', 9), 'exdeorum:compressed_red_sand').processingTime(1000);
    // exdeorum:crushed_deepslate → exdeorum:compressed_cobbled_deepslate  [create.crushing]
    event.recipes.create.crushing(Item.of('exdeorum:crushed_deepslate', 9), 'exdeorum:compressed_cobbled_deepslate').processingTime(1000);
});
