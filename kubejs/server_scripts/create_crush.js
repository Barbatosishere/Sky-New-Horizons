ServerEvents.recipes(event =>{
    event.recipes.create.crushing(Item.of('exdeorum:crushed_deepslate'), 'minecraft:cobbled_deepslate').processingTime(200);
    event.recipes.create.crushing(Item.of('exdeorum:crushed_netherrack', 9), 'exdeorum:compressed_netherrack').processingTime(1000);
    event.recipes.create.crushing(Item.of('exdeorum:crushed_end_stone', 9), 'exdeorum:compressed_end_stone').processingTime(1000);
    event.recipes.create.crushing(Item.of('exdeorum:crushed_deepslate', 9), 'exdeorum:compressed_deepslate').processingTime(1000);
    event.recipes.create.crushing(Item.of('exdeorum:crushed_blackstone', 9), 'exdeorum:compressed_blackstone').processingTime(1000);
    event.recipes.create.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_cobblestone').processingTime(1000);
    event.recipes.create.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_diorite').processingTime(1000);
    event.recipes.create.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_granite').processingTime(1000);
    event.recipes.create.crushing(Item.of('minecraft:gravel', 9), 'exdeorum:compressed_andesite').processingTime(1000);
    event.recipes.create.crushing(Item.of('minecraft:sand', 9), 'exdeorum:compressed_gravel').processingTime(1000);
    event.recipes.create.crushing(Item.of('exdeorum:dust', 9), 'exdeorum:compressed_sand').processingTime(1000);
    event.recipes.create.crushing(Item.of('exdeorum:dust', 9), 'exdeorum:compressed_red_sand').processingTime(1000);
    event.recipes.create.crushing(Item.of('exdeorum:crushed_deepslate', 9), 'exdeorum:compressed_cobbled_deepslate').processingTime(1000);
});