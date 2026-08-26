// extendedae_plus/removes.js
// ─────────────────────────────────────────────────────────
// 移除 extendedae_plus 自带的 2 个高级物品
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'extendedae_plus:infinity_biginteger_cell' });
    event.remove({ id: 'extendedae_plus:entity_speed_card' });
});
