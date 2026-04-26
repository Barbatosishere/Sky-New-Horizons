ServerEvents.recipes(event => {
    event.remove({ type: 'exdeorum:sieve', input: 'exdeorum:crushed_deepslate' });

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

    const crushedDeepslate = 'exdeorum:crushed_deepslate';

        oreChunks.forEach(chunkId => {
            event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: crushedDeepslate },
                mesh: { item: 'exdeorum:string_mesh' },
                result: { id: chunkId },
                result_amount: { type: 'minecraft:uniform', min: 0, max: 2 }
            });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: crushedDeepslate },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: crushedDeepslate },
            mesh: { item: 'exdeorum:iron_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 5 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: crushedDeepslate },
            mesh: { item: 'exdeorum:golden_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 8 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: crushedDeepslate },
            mesh: { item: 'exdeorum:diamond_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 10 }
        });
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: crushedDeepslate },
            mesh: { item: 'exdeorum:netherite_mesh' },
            result: { id: chunkId },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 14 }
        });
    });

    const deepslateMeshes = ['exdeorum:iron_mesh', 'exdeorum:golden_mesh', 'exdeorum:diamond_mesh', 'exdeorum:netherite_mesh'];
    deepslateMeshes.forEach(meshId => {
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: crushedDeepslate },
            mesh: { item: meshId },
            result: { id: 'exdeorum:deepslate_pebble' },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
    });

    const pebbles = ['exdeorum:calcite_pebble', 'exdeorum:basalt_pebble', 'exdeorum:tuff_pebble'];
    pebbles.forEach(id => {
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: crushedDeepslate },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: id },
            result_amount: { type: 'minecraft:uniform', min: 0, max: 4 }
        });
    });
});