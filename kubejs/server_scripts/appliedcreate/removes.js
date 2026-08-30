// server_scripts/appliedcreate/removes.js
ServerEvents.recipes(event => {

    // 移除配方 appliedcreate:andesite_pattern_provider
    event.remove({ id: 'appliedcreate:andesite_pattern_provider' });
    // 移除配方 appliedcreate:brass_pattern_provider
    event.remove({ id: 'appliedcreate:brass_pattern_provider' });

    // 移除配方 appliedcreate:kinetic_energy_acceptor
    event.remove({ id: 'appliedcreate:kinetic_energy_acceptor' });

    // 移除配方 appliedcreate:me_gearbox
    event.remove({ id: 'appliedcreate:me_gearbox' });

    // 移除配方 appliedcreate:andesite_stress_cell_housing
    event.remove({ id: 'appliedcreate:andesite_stress_cell_housing' });
    // 移除配方 appliedcreate:brass_stress_cell_housing
    event.remove({ id: 'appliedcreate:brass_stress_cell_housing' });

    for (const tier of ['1k', '4k', '16k', '64k', '256k', '1m', '4m', '16m', '64m', '256m']) {
        event.remove({ id: `appliedcreate:stress_storage_component_${tier}` });
    }
});
