// ironfurnaces/removes.js
// ─────────────────────────────────────────────────────────
// 移除 ironfurnaces 自带的 2 个升级
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'ironfurnaces:augment_generator' });
    event.remove({ id: 'ironfurnaces:upgrade_allthemodium' });
});
