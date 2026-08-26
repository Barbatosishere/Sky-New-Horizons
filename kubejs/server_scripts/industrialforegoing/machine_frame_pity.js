// industrialforegoing/machine_frame_pity.js
// ─────────────────────────────────────────────────────────
// 简陋机器框架（industrialforegoing:machine_frame_pity）
// 移除原版 + Extended Crafting 5x5 shaped_table 重新定义
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'industrialforegoing:machine_frame_pity' });

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
