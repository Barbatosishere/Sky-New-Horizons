ServerEvents.recipes(event => {
    event.remove({ type: 'exdeorum:sieve', input: 'minecraft:gravel' });

    const oreChunks = [
        'exdeorum:iron_ore_chunk',
        'exdeorum:copper_ore_chunk',
        'exdeorum:tin_ore_chunk',
        'exdeorum:lead_ore_chunk',
        'exdeorum:silver_ore_chunk',
        'exdeorum:nickel_ore_chunk',
        'exdeorum:aluminum_ore_chunk',
        'exdeorum:zinc_ore_chunk',
        'exdeorum:gold_ore_chunk',
        'exdeorum:iridium_ore_chunk',
        'exdeorum:osmium_ore_chunk',
        'exdeorum:uranium_ore_chunk',
        'minecraft:lapis_lazuli',
        'minecraft:diamond',
        'minecraft:emerald',
        'minecraft:amethyst_shard',
        'minecraft:coal'
    ];

    const gravel = 'minecraft:gravel';

        oreChunks.forEach(chunkId => {
            event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: gravel },
                mesh: { item: 'exdeorum:string_mesh' },
                result: { id: chunkId },
                result_amount: { type: 'minecraft:uniform', min: 0, max: 1 }
            });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 2 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:iron_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:golden_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 6 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:diamond_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 8 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:netherite_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 12 }
        });
    });

    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: gravel },
        mesh: { item: 'exdeorum:string_mesh' },
        result: { id: 'exdeorum:stone_pebble' },
        result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
    });

    const stoneMeshes = ['exdeorum:flint_mesh', 'exdeorum:iron_mesh', 'exdeorum:golden_mesh'];
    stoneMeshes.forEach(meshId => {
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: meshId },
            result: { id: 'exdeorum:stone_pebble' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
    });

    const deepslateMeshes = ['exdeorum:iron_mesh', 'exdeorum:golden_mesh', 'exdeorum:diamond_mesh', 'exdeorum:netherite_mesh'];
    deepslateMeshes.forEach(meshId => {
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: meshId },
            result: { id: 'exdeorum:deepslate_pebble' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 6 }
        });
    });

    const flintMeshes = ['exdeorum:string_mesh', 'exdeorum:flint_mesh', 'exdeorum:iron_mesh', 'exdeorum:golden_mesh', 'exdeorum:diamond_mesh'];
    flintMeshes.forEach(meshId => {
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: meshId },
            result: { id: 'minecraft:flint', chance: 0.1 },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
    });

    const pebbles = ['exdeorum:andesite_pebble', 'exdeorum:granite_pebble', 'exdeorum:diorite_pebble', 'minecraft:pointed_dripstone'];
    pebbles.forEach(id => {
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: gravel },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: id },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
    });
});