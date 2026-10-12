// server_scripts/voidminers/miner_recipes.js
ServerEvents.recipes(event => {
    // 任一物品 + 权重 + 最小等级 + 维度 → 添加一台虚空采矿机输出条目
    const addMiner = (item, weight, minTier, dimension) => {
        event.custom({
            type: 'voidminers:miner',
            item: { id: item, count: 1 },
            weight: weight,
            minTier: minTier,
            dimension: dimension,
            allowHigherTiers: true
        }).id(`kubejs:voidminers/${item.replace(':', '_')}_${dimension.split(':')[1]}_tier_${minTier}`);
    };

    addMiner('occultism:raw_iesnium', 5, 3, 'minecraft:the_nether');
    addMiner('mekanism_extras:raw_naquadah', 8, 5, 'minecraft:the_end');
    addMiner('create_better_motors:raw_reggarfonite', 8, 3, 'minecraft:overworld');
    addMiner('create_better_motors:raw_reggarfonite', 8, 3, 'minecraft:the_end');
    addMiner('create_better_motors:raw_reggarfonite', 8, 3, 'minecraft:the_nether');
    addMiner('ifmup:unknown_block', 3, 5, 'minecraft:the_end');
    addMiner('ifmup:raw_shadow', 3, 5, 'minecraft:the_nether');
    addMiner('mysticalagriculture:inferium_ore', 10, 3, 'minecraft:overworld');
    addMiner('mysticalagriculture:deepslate_inferium_ore', 10, 3, 'minecraft:overworld');
    addMiner('mysticalagradditions:end_inferium_ore', 10, 3, 'minecraft:the_end');
    addMiner('mysticalagradditions:nether_inferium_ore', 10, 3, 'minecraft:the_nether');
    addMiner('allthemodium:allthemodium_ore', 8, 3, 'minecraft:overworld');
    addMiner('allthemodium:allthemodium_ore', 8, 3, 'minecraft:the_end');
    addMiner('allthemodium:allthemodium_ore', 8, 3, 'minecraft:the_nether');
    addMiner('allthemodium:vibranium_ore', 8, 5, 'minecraft:overworld');
    addMiner('allthemodium:allthemodium_ore', 8, 5, 'minecraft:the_end');
    addMiner('allthemodium:allthemodium_ore', 8, 5, 'minecraft:the_nether');
    addMiner('allthemodium:unobtainium_ore', 8, 7, 'minecraft:overworld');
    addMiner('allthemodium:unobtainium_ore', 8, 7, 'minecraft:the_end');
    addMiner('allthemodium:unobtainium_ore', 8, 7, 'minecraft:the_nether');
    addMiner('astralsorcery:aquamarine_shale', 6, 7, 'minecraft:overworld');
    addMiner('astralsorcery:aquamarine_shale', 6, 7, 'minecraft:the_end');
    addMiner('astralsorcery:aquamarine_shale', 6, 7, 'minecraft:the_nether');
    addMiner('astralsorcery:rock_crystal_ore', 3, 7, 'minecraft:overworld');
    addMiner('astralsorcery:rock_crystal_ore', 3, 7, 'minecraft:the_end');
    addMiner('astralsorcery:rock_crystal_ore', 3, 7, 'minecraft:the_nether');
});