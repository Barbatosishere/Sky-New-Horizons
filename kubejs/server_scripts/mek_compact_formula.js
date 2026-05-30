ServerEvents.recipes(event => {
    // 配方1：紧凑型聚变反应堆
    event.custom({
        type: 'ae2lt:lightning_assembly',
        priority: 0,
        inputs: [
            { ingredient: { item: 'mekanismgenerators:fusion_reactor_controller' }, count: 1 },
            { ingredient: { item: 'mekanismgenerators:fusion_reactor_frame' }, count: 36 },
            { ingredient: { item: 'mekanismgenerators:fusion_reactor_port' }, count: 4 },
            { ingredient: { item: 'mekanismgenerators:laser_focus_matrix' }, count: 1 },
            { ingredient: { item: 'mekanismgenerators:reactor_glass' }, count: 24 }
        ],
        result: { id: 'compactmekanismmachinesplus:compact_fusion_reactor', count: 1 },
        totalEnergy: 200000,
        lightningCost: 256,
        lightningTier: 'extreme_high_voltage'
    });

    // 配方2：紧凑型 SPS
    event.custom({
        type: 'ae2lt:lightning_assembly',
        priority: 0,
        inputs: [
            { ingredient: { item: 'mekanism:sps_casing' }, count: 60 },
            { ingredient: { item: 'mekanism:sps_port' }, count: 3 },
            { ingredient: { item: 'mekanism:supercharged_coil' }, count: 2 },
            { ingredient: { item: 'mekanism:structural_glass' }, count: 123 }
        ],
        result: { id: 'compactmekanismmachinesplus:compact_sps', count: 1 },
        totalEnergy: 200000,
        lightningCost: 256,
        lightningTier: 'extreme_high_voltage'
    });

    // 配方3：紧凑型热电锅炉
    event.custom({
        type: 'ae2lt:lightning_assembly',
        priority: 0,
        inputs: [
            { ingredient: { item: 'mekanism:structural_glass' }, count: 1598 },
            { ingredient: { item: 'mekanism:boiler_valve' }, count: 4 },
            { ingredient: { item: 'mekanism:pressure_disperser' }, count: 225 },
            { ingredient: { item: 'mekanism:superheating_element' }, count: 88 }
        ],
        result: { id: 'compactmekanismmachinesplus:compact_thermoelectric_boiler', count: 1 },
        totalEnergy: 200000,
        lightningCost: 256,
        lightningTier: 'extreme_high_voltage'
    });
});