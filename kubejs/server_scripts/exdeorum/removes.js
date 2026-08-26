// exdeorum/removes.js
// ─────────────────────────────────────────────────────────
// 移除 exdeorum 默认的四种筛网配方（玩家通过其他途径获得）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'exdeorum:flint_mesh' });
    event.remove({ id: 'exdeorum:iron_mesh' });
    event.remove({ id: 'exdeorum:golden_mesh' });
    event.remove({ id: 'exdeorum:diamond_mesh' });
});
