ServerEvents.recipes(event => {

    const oreChunks = [
        'minecraft:lapis_lazuli',
        'minecraft:diamond',
        'minecraft:emerald'
    ];

    const gravel = 'minecraft:gravel';

    oreChunks.forEach(chunkId => {     
        
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:iron_mesh' },
            result: { id: chunkId },
            result_amount: 1,
            chance: 0.12
        });
        
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:golden_mesh' },
            result: { id: chunkId },
            result_amount: { min: 0, max: 2 }
        });
        
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:diamond_mesh' },
            result: { id: chunkId },
            result_amount: { min: 0, max: 4 }
        });
        
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:netherite_mesh' },
            result: { id: chunkId },
            result_amount: { min: 0, max: 6 }
        });
    });
});