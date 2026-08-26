ServerEvents.recipes(event => {
        event.remove({ type: 'exdeorum:sieve', input: [
            'minecraft:glowstone_dust',
            'minecraft:ghast_tear',
            'minecraft:nether_wart'
        ] });
        const souliumDustId = ['minecraft:glowstone_dust', 'minecraft:blaze_powder','minecraft:nether_wart'];
        const mss = 'minecraft:soul_sand';

        souliumDustId.forEach(chunkId => {
    event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: mss },
                mesh: { item: 'exdeorum:string_mesh' },
                result: { id: chunkId },
                result_amount: { min: 0, max: 1 }
            });

    event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: mss },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: chunkId },
            result_amount: { min: 0, max: 2 }
        });

    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: mss },
        mesh: { item: 'exdeorum:iron_mesh' },
        result: { id: chunkId },
        result_amount: { min: 0, max: 4 }   
    });

    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: mss },
        mesh: { item: 'exdeorum:golden_mesh' },
        result: { id: chunkId },
        result_amount:{ min: 0, max: 6 } 
    });

    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: mss },
        mesh: { item: 'exdeorum:diamond_mesh' },
        result: { id: chunkId },
        result_amount: { min: 0, max: 8 }   
      });

    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: mss },
        mesh: { item: 'exdeorum:netherite_mesh' },
        result: { id: chunkId },
        result_amount: { min: 0, max: 12 } 
    });
    })
    });