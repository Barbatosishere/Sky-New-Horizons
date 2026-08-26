// mysticalagriculture/tier_removes.js
// ─────────────────────────────────────────────────────────
// 移除 6 个种子/精华（玩家通过其他途径获得）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'mysticalagriculture:neutronium_seeds' });
    event.remove({ id: 'mysticalagriculture:neutronium_essence' });
    event.remove({ id: 'mysticalagriculture:awakened_draconium_seeds' });
    event.remove({ id: 'mysticalagriculture:awakened_draconium_essence' });
    event.remove({ id: 'mysticalagriculture:dragon_egg_seeds' });
    event.remove({ id: 'mysticalagriculture:dragon_egg_essence' });
});
