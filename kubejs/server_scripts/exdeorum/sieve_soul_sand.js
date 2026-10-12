// server_scripts/exdeorum/sieve_soul_sand.js
ServerEvents.recipes(event => {
    const meshes = [
        { id: 'exdeorum:string_mesh', max: 1 },
        { id: 'exdeorum:flint_mesh', max: 2 },
        { id: 'exdeorum:iron_mesh', max: 4 },
        { id: 'exdeorum:golden_mesh', max: 6 },
        { id: 'exdeorum:diamond_mesh', max: 8 },
        { id: 'exdeorum:netherite_mesh', max: 12 }
    ];
    const meshNames = ['string', 'flint', 'iron', 'golden', 'diamond', 'netherite'];

    meshNames.forEach(name => {
        event.remove({ id: `exdeorum:sieve/soul_sand/${name}/glowstone_dust` });
        event.remove({ id: `exdeorum:sieve/soul_sand/${name}/nether_wart` });
    });

    const drops = ['minecraft:glowstone_dust', 'minecraft:blaze_powder', 'minecraft:nether_wart'];
    const soulSand = 'minecraft:soul_sand';

    drops.forEach(dropId => {
        meshes.forEach(mesh => {
            event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: soulSand },
                mesh: { item: mesh.id },
                result: { id: dropId },
                result_amount: { type: 'minecraft:uniform', min: 0, max: mesh.max }
            });
        });
    });
});
