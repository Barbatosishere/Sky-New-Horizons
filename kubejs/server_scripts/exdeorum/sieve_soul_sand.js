// server_scripts/exdeorum/sieve_soul_sand.js
ServerEvents.recipes(event => {
    // 移除类型 exdeorum:sieve 的全部配方
        event.remove({ type: 'exdeorum:sieve', input: [
            'minecraft:glowstone_dust',
            'minecraft:ghast_tear',
            'minecraft:nether_wart'
        ] });
        const souliumDustId = ['minecraft:glowstone_dust', 'minecraft:blaze_powder','minecraft:nether_wart'];
        const mss = 'minecraft:soul_sand';

        souliumDustId.forEach(chunkId => {
    // ? → ?  [sieve]
    event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: mss },
                mesh: { item: 'exdeorum:string_mesh' },
                result: { id: chunkId },
                result_amount: { min: 0, max: 1 }
            });

    // ? → ?  [sieve]
    event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: mss },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: chunkId },
            result_amount: { min: 0, max: 2 }
        });

    // ? → ?  [sieve]
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: mss },
        mesh: { item: 'exdeorum:iron_mesh' },
        result: { id: chunkId },
        result_amount: { min: 0, max: 4 }   
    });

    // ? → ?  [sieve]
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: mss },
        mesh: { item: 'exdeorum:golden_mesh' },
        result: { id: chunkId },
        result_amount:{ min: 0, max: 6 } 
    });

    // ? → ?  [sieve]
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: mss },
        mesh: { item: 'exdeorum:diamond_mesh' },
        result: { id: chunkId },
        result_amount: { min: 0, max: 8 }   
      });

    // ? → ?  [sieve]
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: mss },
        mesh: { item: 'exdeorum:netherite_mesh' },
        result: { id: chunkId },
        result_amount: { min: 0, max: 12 } 
    });
    })
    });
