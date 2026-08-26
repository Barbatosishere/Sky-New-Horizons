// server_scripts/voidminers.js
ServerEvents.recipes(event => {
    /**
     * 添加虚空矿机配方
     * @param {string} item - 物品ID（如 'minecraft:diamond'）
     * @param {number} weight - 权重（浮点数）
     * @param {number} minTier - 最低矿机等级（整数，默认1）
     * @param {string} dimension - 维度（默认 'minecraft:overworld'）
     */
    const addMiner = (item, weight, minTier = 1, dimension = 'minecraft:overworld') => {
        const recipe = {
            type: 'voidminers:miner',
            allowHigherTiers: true,
            dimension: dimension,
            minTier: minTier,
            item: { id: item },   // 关键修正：必须使用对象
            weight: weight
        };

        const recipeId = `kubejs:voidminers/${item.replace(':', '_')}_${dimension.split(':')[1]}`;
        event.custom(recipe).id(recipeId);
    };

    // ---- 以下为所有配方 ----
    // 粗艾瑟金属（下界，等级3，权重5）
    addMiner('occultism:raw_iesnium', 5, 3, 'minecraft:the_nether');

    // 粗硅岩（末地，等级5，权重8）
    addMiner('mekanism_extras:raw_naquadah', 8, 5, 'minecraft:the_end');

    // 粗瑞加方石（等级1，权重10，三个维度）
    addMiner('create_better_motors:raw_reggarfonite', 10, 1, 'minecraft:overworld');
    addMiner('create_better_motors:raw_reggarfonite', 10, 1, 'minecraft:the_end');
    addMiner('create_better_motors:raw_reggarfonite', 10, 1, 'minecraft:the_nether');

    // 未知块（末地，等级3，权重3）
    addMiner('ifmup:unknown_block', 3, 3, 'minecraft:the_end');

    // 粗暗影（下界，等级3，权重3）
    addMiner('ifmup:raw_shadow', 3, 3, 'minecraft:the_nether');

    // 精华矿（等级1，权重10）
    addMiner('mysticalagriculture:inferium_ore', 10, 1, 'minecraft:overworld');
    addMiner('mysticalagriculture:deepslate_inferium_ore', 10, 1, 'minecraft:overworld');
    addMiner('mysticalagradditions:end_inferium_ore', 10, 1, 'minecraft:the_end');
    addMiner('mysticalagradditions:nether_inferium_ore', 10, 1, 'minecraft:the_nether');
});