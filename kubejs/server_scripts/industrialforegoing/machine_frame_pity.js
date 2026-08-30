// server_scripts/industrialforegoing/machine_frame_pity.js
ServerEvents.recipes(event => {
    // 移除配方 industrialforegoing:machine_frame_pity
    event.remove({ id: 'industrialforegoing:machine_frame_pity' });

    // industrialforegoing:machine_frame_pity → pneumaticcraft:compressed_iron_block  [extendedcrafting.shaped_table]
    event.recipes.extendedcrafting.shaped_table('industrialforegoing:machine_frame_pity', [
        'AAAAA',
        'ABBBA',
        'ABCBA',
        'ABBBA',
        'AAAAA'
    ], {
        A: '#minecraft:logs',
        B: 'pneumaticcraft:compressed_iron_block',
        C: 'minecraft:redstone_block'
    });
});
