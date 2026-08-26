// compactmekanismmachinesplus/removes.js
// ─────────────────────────────────────────────────────────
// 移除紧凑型聚变反应堆/SPS/热力锅炉配方（玩家通过其他途径获得）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'compactmekanismmachinesplus:compact_fusion_reactor' });
    event.remove({ id: 'compactmekanismmachinesplus:compact_sps' });
    event.remove({ id: 'compactmekanismmachinesplus:compact_thermoelectric_boiler' });
});
