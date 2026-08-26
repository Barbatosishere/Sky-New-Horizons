// skynh/antimatter_pellets.js
// ─────────────────────────────────────────────────────────
// 反物质梯度（mek: 命名空间）合成链：
//   tiny → small → fragment → pellet_antimatter
// 注：这些物品的纹理在 assets/mek/textures/item/ 下。
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {

    event.shaped('mekanism:pellet_antimatter', [
        '###',
        '###',
        '###'
    ], {
        '#': 'mek:mekanism_fragment_antimatter'
    });

    event.shaped('mek:mekanism_fragment_antimatter', [
        '###',
        '###',
        '###'
    ], {
        '#': 'mek:mekanism_small_antimatter'
    });

    event.shaped('mek:mekanism_small_antimatter', [
        '###',
        '###',
        '###'
    ], {
        '#': 'mek:mekanism_tiny_antimatter'
    });
});
