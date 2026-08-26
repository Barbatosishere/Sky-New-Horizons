// createnuclear/removes.js
// ─────────────────────────────────────────────────────────
// 移除 createnuclear 自带的钢配方（与 alltheores 重复）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'createnuclear:mixing/steel' });
});
