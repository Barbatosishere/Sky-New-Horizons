// server_scripts/exdeorum/sieve_gravel_lapis.js
ServerEvents.recipes(event => {

    const oreChunks = [
        'minecraft:lapis_lazuli',
        'minecraft:diamond',
        'minecraft:emerald'
    ];

    const gravel = 'minecraft:gravel';

    oreChunks.forEach(chunkId => {     
        
    // ? → ?  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:iron_mesh' },
            result: { id: chunkId },
            result_amount: {                          
        type: "minecraft:binomial",
        n: 1.0,                               
        p: 0.12                                 
    }
        });
        
    // ? → ?  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:golden_mesh' },
            result: { id: chunkId },
            result_amount: { min: 0, max: 2 }
        });
        
    // ? → ?  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:diamond_mesh' },
            result: { id: chunkId },
            result_amount: { min: 0, max: 4 }
        });
        
    // ? → ?  [sieve]
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:netherite_mesh' },
            result: { id: chunkId },
            result_amount: { min: 0, max: 6 }
        });
    });
});
