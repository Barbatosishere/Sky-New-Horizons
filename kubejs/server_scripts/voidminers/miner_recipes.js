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
        }).id(`kubejs:voidminers/${item.replace(':', '_')}_${dimension.split(':')[1]}`);
    };

    addMiner('occultism:raw_iesnium', 5, 4, 'minecraft:the_nether');
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
});
