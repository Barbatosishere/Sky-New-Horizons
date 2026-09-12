ServerEvents.recipes(event => {
    event.remove({ id: 'useless_mod:advanced_alloy_furnace_block' });
    event.shaped('useless_mod:advanced_alloy_furnace_block', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'skynh:nitro_crystal_block_1',
        B: 'pneumaticcraft:drone',
        C: 'pneumaticcraft:flux_compressor',
        D: 'industrialforegoing:machine_frame_supreme',
        E: 'ae2:256k_crafting_storage',
        F: 'megacells:portable_cell_workbench',
        G: 'mekanism:pellet_antimatter',
        H: 'mekanism_extras:absolute_energy_cube',
        I: 'extendedae_plus:256x_crafting_accelerator'
    });
});