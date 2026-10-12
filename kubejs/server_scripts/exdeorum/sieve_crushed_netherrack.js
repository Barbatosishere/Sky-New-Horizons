// server_scripts/exdeorum/sieve_crushed_netherrack.js
ServerEvents.recipes(event => {
    const meshes = [
        { id: 'exdeorum:string_mesh', amount: { type: 'minecraft:binomial', n: 1.0, p: 0.12 } },
        { id: 'exdeorum:flint_mesh', amount: { type: 'minecraft:uniform', min: 0, max: 2 } },
        { id: 'exdeorum:iron_mesh', amount: { type: 'minecraft:uniform', min: 0, max: 3 } },
        { id: 'exdeorum:golden_mesh', amount: { type: 'minecraft:uniform', min: 0, max: 4 } },
        { id: 'exdeorum:diamond_mesh', amount: { type: 'minecraft:uniform', min: 0, max: 6 } },
        { id: 'exdeorum:netherite_mesh', amount: { type: 'minecraft:uniform', min: 0, max: 8 } }
    ];
    const meshNames = ['string', 'flint', 'iron', 'golden', 'diamond', 'netherite'];

    meshNames.forEach(name => {
        event.remove({ id: `exdeorum:sieve/crushed_netherrack/${name}/quartz` });
        event.remove({ id: `exdeorum:sieve/crushed_netherrack/${name}/blaze_powder` });
    });

    const drops = ['minecraft:quartz', 'minecraft:blaze_powder'];
    const crushedNetherrack = 'exdeorum:crushed_netherrack';

    drops.forEach(dropId => {
        meshes.forEach(mesh => {
            event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: crushedNetherrack },
                mesh: { item: mesh.id },
                result: { id: dropId },
                result_amount: mesh.amount
            });
        });
    });
});
