// 监听服务器配方加载事件
ServerEvents.recipes(event => {
    // ========== 活化水晶碎片（使用沙子） ==========
    const sandResultId = 'mysticalagriculture:prosperity_shard';
    const sandIngredient = 'minecraft:sand';

    // 铁筛网 2%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: sandIngredient },
        mesh: { item: 'exdeorum:iron_mesh' },
        result: { id: sandResultId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.02
        }
    });

    // 金筛网 5%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: sandIngredient },
        mesh: { item: 'exdeorum:golden_mesh' },
        result: { id: sandResultId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.05
        }
    });

    // 钻石筛网 8%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: sandIngredient },
        mesh: { item: 'exdeorum:diamond_mesh' },
        result: { id: sandResultId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.08
        }
    });

    // 下界合金筛网 10%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: sandIngredient },
        mesh: { item: 'exdeorum:netherite_mesh' },
        result: { id: sandResultId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.10
        }
    });

    // ========== 磊岩（使用末地石） ==========
    const kivResultId = 'xycraft_world:kivi';   // 你提供的正确ID
    const kivIngredient = 'exdeorum:crushed_end_stone';

    // 铁筛网 5%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: kivIngredient },
        mesh: { item: 'exdeorum:iron_mesh' },
        result: { id: kivResultId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.05
        }
    });

    // 金筛网 8%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: kivIngredient },
        mesh: { item: 'exdeorum:golden_mesh' },
        result: { id: kivResultId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.08
        }
    });

    // 钻石筛网 10%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: kivIngredient },
        mesh: { item: 'exdeorum:diamond_mesh' },
        result: { id: kivResultId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.10
        }
    });

    // 下界合金筛网 15%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: kivIngredient },
        mesh: { item: 'exdeorum:netherite_mesh' },
        result: { id: kivResultId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.15
        }
    });
});