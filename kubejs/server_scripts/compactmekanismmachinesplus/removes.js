// server_scripts/compactmekanismmachinesplus/removes.js
ServerEvents.recipes(event => {
    // 移除配方 compactmekanismmachinesplus:compact_fusion_reactor
    event.remove({ id: 'compactmekanismmachinesplus:compact_fusion_reactor' });
    // 移除配方 compactmekanismmachinesplus:compact_sps
    event.remove({ id: 'compactmekanismmachinesplus:compact_sps' });
    // 移除配方 compactmekanismmachinesplus:compact_thermoelectric_boiler
    event.remove({ id: 'compactmekanismmachinesplus:compact_thermoelectric_boiler' });
});
