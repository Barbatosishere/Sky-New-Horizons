// cookingforblockheads/removes.js
// ─────────────────────────────────────────────────────────
// 移除水槽原版配方（被自定义配方替代）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'cookingforblockheads:sink' });
});
