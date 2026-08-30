// server_scripts/exdeorum/main_recipes.js
ServerEvents.recipes(event => {

    const sandResultId = 'mysticalagriculture:prosperity_shard';
    const sandIngredient = 'minecraft:sand';

    // ? → ?  [sieve]
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

    // ? → ?  [sieve]
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

    // ? → ?  [sieve]
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

    // ? → ?  [sieve]
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

    const kivResultId = 'xycraft_world:kivi';
    const kivIngredient = 'exdeorum:crushed_end_stone';

    // ? → ?  [sieve]
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

    // ? → ?  [sieve]
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

    // ? → ?  [sieve]
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

    // ? → ?  [sieve]
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

    // ? → integrateddynamics:menril_sapling  [sieve]
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

    // ? → minecraft:torchflower_seeds  [sieve]
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

    // ? → minecraft:pitcher_pod  [sieve]
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

    const souliumDustId = 'mysticalagriculture:soulium_dust';
    const crushedNetherrack = 'exdeorum:crushed_netherrack';

    // ? → ?  [sieve]
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

    // ? → ?  [sieve]
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

    // ? → ?  [sieve]
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

    // ? → ?  [sieve]
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

    // ? → minecraft:sculk_sensor  [sieve]
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

    // ? → draconicevolution:dragon_heart_left  [sieve]
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

    // ? → draconicevolution:dragon_heart_right  [sieve]
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

    // ? → minecraft:dragon_breath  [sieve]
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

    // ? → draconicevolution:draconium_dust  [sieve]
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
