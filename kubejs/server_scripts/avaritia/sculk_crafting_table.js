// server_scripts/avaritia/sculk_crafting_table.js
ServerEvents.recipes(event => {
    // 移除配方 avaritia:sculk_crafting_table
    event.remove({ id: 'avaritia:sculk_crafting_table' });

    // avaritia:sculk_crafting_table → minecraft:sculk_shrieker  [extendedcrafting.shaped_table]
    event.recipes.extendedcrafting.shaped_table('avaritia:sculk_crafting_table', [
        'AAAAA',
        'ABBBA',
        'ABBBA',
        'CBBBC',
        'CCCCC'
    ], {
        A: 'minecraft:sculk_shrieker',
        B: 'avaritia:double_compressed_crafting_table',
        C: 'minecraft:sculk_sensor'
    });
});
