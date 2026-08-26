// alltheores/removes.js
// ─────────────────────────────────────────────────────────
// 移除 alltheores 自带的合金/锭配方（被自定义配方替代）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // 钢锭配方
    event.remove({ id: 'alltheores:arcfurnace/steel/ingot' });
    event.remove({ id: 'alltheores:alloysmelter/steel/ingot' });
    event.remove({ id: 'alltheores:crafting/steel/alloy_blending_from_dust' });
    event.remove({ id: 'alltheores:alloy_smelting/steel_ingot' });
    // 黄铜
    event.remove({ id: 'alltheores:alloysmelter/brass/ingot' });
    event.remove({ id: 'alltheores:arcfurnace/brass/ingot' });
    event.remove({ id: 'alltheores:crafting/brass/alloy_blending_from_dust' });
    // 琥珀金锭
    event.remove({ id: 'alltheores:arcfurnace/electrum/ingot' });
    event.remove({ id: 'alltheores:alloysmelter/electrum/ingot' });
    // 末影锭
    event.remove({ id: 'alltheores:arcfurnace/enderium/ingot' });
    // 信素锭
    event.remove({ id: 'alltheores:arcfurnace/signalum/ingot' });
    // 青铜锭
    event.remove({ id: 'alltheores:arcfurnace/bronze/ingot' });
});
