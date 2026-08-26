// mysticalagriculture/removes.js
// ─────────────────────────────────────────────────────────
// 移除 copper_alloy 相关配方（被自定义配方替代）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'mysticalagriculture:copper_alloy' });
    event.remove({ id: 'mysticalagriculture:essence/enderio/copper_alloy_ingot' });
});
