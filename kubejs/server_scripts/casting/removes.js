// casting/removes.js
// ─────────────────────────────────────────────────────────
// 移除 Casting 模组自带的 8 个 mixer/* 合金配方（玩家通过其他途径获得）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'casting:mixer/conductive_alloy' });
    event.remove({ id: 'casting:mixer/brass' });
    event.remove({ id: 'casting:mixer/vibrant_alloy' });
    event.remove({ id: 'casting:mixer/pulsating_alloy' });
    event.remove({ id: 'casting:mixer/energetic_alloy' });
    event.remove({ id: 'casting:mixer/enderium' });
    event.remove({ id: 'casting:mixer/signalum' });
});
