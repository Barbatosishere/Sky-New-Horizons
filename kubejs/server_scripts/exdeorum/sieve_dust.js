// server_scripts/exdeorum/sieve_dust.js
ServerEvents.recipes(event => {
    // 移除类型 exdeorum:sieve 的全部配方
    event.remove({ type: 'exdeorum:sieve', input: 'exdeorum:dust' });

    const oreChunks = [
        'minecraft:gunpowder',
        'minecraft:bone_meal',
        'ae2:sky_dust',
        'minecraft:glowstone_dust',
        'ae2:certus_quartz_dust',
        'enderio:grains_of_infinity',
        'minecraft:blaze_powder',
    ];

    const dust = 'exdeorum:dust';

        oreChunks.forEach(chunkId => {
    // ? → ?  [sieve]
            event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: dust },
                mesh: { item: 'exdeorum:string_mesh' },
                result: { id: chunkId },
                result_amount: { type: 'minecraft:uniform', min: 0, max: 1 }
            });
    // ? → ?  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: dust },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 2 }
        });
    // ? → ?  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: dust },
            mesh: { item: 'exdeorum:iron_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
    // ? → ?  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: dust },
            mesh: { item: 'exdeorum:golden_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 6 }
        });
    // ? → ?  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: dust },
            mesh: { item: 'exdeorum:diamond_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 9 }
        });
    // ? → ?  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: dust },
            mesh: { item: 'exdeorum:netherite_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 12 }
        });
    });

    // ? → minecraft:redstone  [sieve]
        event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: 'exdeorum:dust' },
                mesh: { item: 'exdeorum:string_mesh' },
                result: { id: 'minecraft:redstone' },
                result_amount: { type: 'minecraft:uniform', min: 0, max: 1 }
            });
    // ? → minecraft:redstone  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: 'exdeorum:dust' },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: 'minecraft:redstone' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 2 }
        });
    // ? → minecraft:redstone  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: 'exdeorum:dust' },
            mesh: { item: 'exdeorum:iron_mesh' },
            result: { id: 'minecraft:redstone' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
    // ? → minecraft:redstone  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: 'exdeorum:dust' },
            mesh: { item: 'exdeorum:golden_mesh' },
            result: { id: 'minecraft:redstone' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 6 }
        });
    // ? → minecraft:redstone  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: 'exdeorum:dust' },
            mesh: { item: 'exdeorum:diamond_mesh' },
            result: { id: 'minecraft:redstone' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 8 }
        });
    // ? → minecraft:redstone  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: 'exdeorum:dust' },
            mesh: { item: 'exdeorum:netherite_mesh' },
            result: { id: 'minecraft:redstone' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 12 }
        });
    });
