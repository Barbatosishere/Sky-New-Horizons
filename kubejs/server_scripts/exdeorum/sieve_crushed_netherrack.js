// server_scripts/exdeorum/sieve_crushed_netherrack.js
    ServerEvents.recipes(event => {
    // 移除类型 exdeorum:sieve 的全部配方
        event.remove({ type: 'exdeorum:sieve', input: ['minecraft:quartz'] });
        const souliumDustId = ['minecraft:quartz', 'minecraft:blaze_powder'];
        const crushedNetherrack = 'exdeorum:crushed_netherrack';
        souliumDustId.forEach(chunkId => {
    // ? → ?  [sieve]
    event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: crushedNetherrack },
                mesh: { item: 'exdeorum:string_mesh' },
                result: { id: chunkId },
                result_amount: { min: 0, max: 1 }
            });

    // ? → ?  [sieve]
    event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: crushedNetherrack },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: chunkId },
            result_amount: { min: 0, max: 2 }
        });

    // ? → ?  [sieve]
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: crushedNetherrack },
        mesh: { item: 'exdeorum:iron_mesh' },
        result: { id: chunkId },
        result_amount: { min: 0, max: 4 }   
    });

    // ? → ?  [sieve]
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: crushedNetherrack },
        mesh: { item: 'exdeorum:golden_mesh' },
        result: { id: chunkId },
        result_amount:{ min: 0, max: 6 } 
    });

    // ? → ?  [sieve]
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: crushedNetherrack },
        mesh: { item: 'exdeorum:diamond_mesh' },
        result: { id: chunkId },
        result_amount: { min: 0, max: 8 }   
      });

    // ? → ?  [sieve]
    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: crushedNetherrack },
        mesh: { item: 'exdeorum:netherite_mesh' },
        result: { id: chunkId },
        result_amount: { min: 0, max: 12 } 
    });
    })
    });
