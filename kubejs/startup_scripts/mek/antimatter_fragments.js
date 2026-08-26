// mek/antimatter_fragments.js
// ─────────────────────────────────────────────────────────
// 来自原 startup_scripts/src/item.js（仅 mek: 部分）
// 注册反物质梯度物品（材质在 assets/mek/textures/item/）
// ─────────────────────────────────────────────────────────

StartupEvents.registry('item', event => {
    event.create('mek:mekanism_tiny_antimatter')
    event.create('mek:mekanism_small_antimatter')
    event.create('mek:mekanism_fragment_antimatter')
})
