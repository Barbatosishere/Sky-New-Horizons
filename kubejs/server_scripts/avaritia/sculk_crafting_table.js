// avaritia/sculk_crafting_table.js
// ─────────────────────────────────────────────────────────
// 幽匿工作台（avaritia:sculk_crafting_table）
// 移除原版 + Extended Crafting 5x5 shaped_table 重新定义
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'avaritia:sculk_crafting_table' });

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
