// mekmm/removes.js
// ─────────────────────────────────────────────────────────
// 移除 mekmm 种植站原配方（玩家通过其他途径获得）
// 配方见 ../industrialforegoing/dissolution_chamber.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'mekmm:planting_station' });
});
