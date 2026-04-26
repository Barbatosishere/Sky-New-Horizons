ServerEvents.recipes(event => {
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
            event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: dust },
                mesh: { item: 'exdeorum:string_mesh' },
                result: { id: chunkId },
                result_amount: { type: 'minecraft:uniform', min: 0, max: 1 }
            });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: dust },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 2 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: dust },
            mesh: { item: 'exdeorum:iron_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: dust },
            mesh: { item: 'exdeorum:golden_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 6 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: dust },
            mesh: { item: 'exdeorum:diamond_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 8 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: dust },
            mesh: { item: 'exdeorum:netherite_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 12 }
        });
    });

        event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: 'exdeorum:dust' },
                mesh: { item: 'exdeorum:string_mesh' },
                result: { id: 'minecraft:redstone' },
                result_amount: { type: 'minecraft:uniform', min: 0, max: 2 }
            });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: 'exdeorum:dust' },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: 'minecraft:redstone' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: 'exdeorum:dust' },
            mesh: { item: 'exdeorum:iron_mesh' },
            result: { id: 'minecraft:redstone' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 6 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: 'exdeorum:dust' },
            mesh: { item: 'exdeorum:golden_mesh' },
            result: { id: 'minecraft:redstone' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 8 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: 'exdeorum:dust' },
            mesh: { item: 'exdeorum:diamond_mesh' },
            result: { id: 'minecraft:redstone' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 10 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: 'exdeorum:dust' },
            mesh: { item: 'exdeorum:netherite_mesh' },
            result: { id: 'minecraft:redstone' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 12 }
        });
    });