// appliedcreate/removes.js
// ─────────────────────────────────────────────────────────
// 移除所有依赖 AE2 物品的 Applied Create 配方。
//
// Applied Create 模组默认提供 16 个配方使用 ae2:quartz_glass / ae2:fluix_crystal
// / ae2:fluix_glass_cable / ae2:pattern_provider / ae2:all_certus_quartz
// 等 AE2 物品，违反了"Create 系列合成不要 AE"原则，故全部移除。
//
// 玩家仍可通过对应数据包的 DataPack 配方或后续补充的 AE-free 替代配方获得产物。
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // pattern_provider 系列（使用 ae2:pattern_provider）
    event.remove({ id: 'appliedcreate:andesite_pattern_provider' });
    event.remove({ id: 'appliedcreate:brass_pattern_provider' });

    // kinetic_energy_acceptor（使用 ae2:fluix_crystal + ae2:fluix_glass_cable）
    event.remove({ id: 'appliedcreate:kinetic_energy_acceptor' });

    // me_gearbox（使用 ae2:fluix_glass_cable）
    event.remove({ id: 'appliedcreate:me_gearbox' });

    // *_stress_cell_housing 系列（使用 ae2:quartz_glass）
    event.remove({ id: 'appliedcreate:andesite_stress_cell_housing' });
    event.remove({ id: 'appliedcreate:brass_stress_cell_housing' });

    // stress_storage_component_*（使用 ae2:quartz_glass / ae2:all_certus_quartz）
    for (const tier of ['1k', '4k', '16k', '64k', '256k', '1m', '4m', '16m', '64m', '256m']) {
        event.remove({ id: `appliedcreate:stress_storage_component_${tier}` });
    }
});
