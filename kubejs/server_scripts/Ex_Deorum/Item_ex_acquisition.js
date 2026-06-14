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
    const kivResultId = 'xycraft_world:kivi';
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

    // ========== 门瑞欧树苗（使用泥土） ==========
    // 线筛网 5% 获得门瑞欧树苗
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: 'minecraft:dirt' },
        mesh: { item: 'exdeorum:string_mesh' },
        result: { id: 'integrateddynamics:menril_sapling' },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.05
        }
    });

    // ========== 火把花（使用泥土） ==========
    // 线筛网 5% 获得门瑞欧树苗
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: 'minecraft:dirt' },
        mesh: { item: 'exdeorum:string_mesh' },
        result: { id: 'minecraft:torchflower_seeds' },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.05
        }
    });

    // ========== 瓶子草（使用泥土） ==========
    // 线筛网 5% 获得门瑞欧树苗
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: 'minecraft:dirt' },
        mesh: { item: 'exdeorum:string_mesh' },
        result: { id: 'minecraft:pitcher_pod' },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.05
        }
    });

    // ========== 高魂粉（使用粉碎下界岩） ==========
    const souliumDustId = 'mysticalagriculture:soulium_dust';
    const crushedNetherrack = 'exdeorum:crushed_netherrack';

    // 铁筛网 5%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: crushedNetherrack },
        mesh: { item: 'exdeorum:iron_mesh' },
        result: { id: souliumDustId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.05
        }
    });

    // 金筛网 8%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: crushedNetherrack },
        mesh: { item: 'exdeorum:golden_mesh' },
        result: { id: souliumDustId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.08
        }
    });

    // 钻石筛网 10%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: crushedNetherrack },
        mesh: { item: 'exdeorum:diamond_mesh' },
        result: { id: souliumDustId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.10
        }
    });

    // 下界合金筛网 15%
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: crushedNetherrack },
        mesh: { item: 'exdeorum:netherite_mesh' },
        result: { id: souliumDustId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.15
        }
    });
    // ========== 幽匿感测体（使用粉碎末地石） ==========
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: 'exdeorum:crushed_end_stone' },
        mesh: { item: 'exdeorum:netherite_mesh' },
        result: { id: 'minecraft:sculk_sensor' },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.03
        }
    });

    // ========== 龙之心左半部分 ==========
event.custom({
    type: 'exdeorum:sieve',
    ingredient: { item: 'minecraft:dragon_egg' },
    mesh: { item: 'exdeorum:netherite_mesh' },
    result: { id: 'draconicevolution:dragon_heart_left' },
    result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: 0.25
    }
});

// ========== 龙之心右半部分 ==========
event.custom({
    type: 'exdeorum:sieve',
    ingredient: { item: 'minecraft:dragon_egg' },
    mesh: { item: 'exdeorum:netherite_mesh' },
    result: { id: 'draconicevolution:dragon_heart_right' },
    result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: 0.25
    }
});

// ========== 龙息 ==========
event.custom({
    type: 'exdeorum:sieve',
    ingredient: { item: 'minecraft:dragon_egg' },
    mesh: { item: 'exdeorum:netherite_mesh' },
    result: { id: 'minecraft:dragon_breath' },
    result_amount: {
        type: 'minecraft:binomial',
        n: 1.0,
        p: 0.5
    }
});

// ========== 龙尘（数量随机） ==========
event.custom({
    type: 'exdeorum:sieve',
    ingredient: { item: 'minecraft:dragon_egg' },
    mesh: { item: 'exdeorum:netherite_mesh' },
    result: { id: 'draconicevolution:draconium_dust' },
    result_amount: {
        type: 'minecraft:uniform',
        min: 1.0,
        max: 32.0
    }
});
});