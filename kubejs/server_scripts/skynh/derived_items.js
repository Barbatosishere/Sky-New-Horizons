// server_scripts/skynh/derived_items.js
ServerEvents.recipes(event => {

    // mob_grinding_utils:solid_xp_mould_blank → skynh:honeycomb_mold
    event.shaped('skynh:honeycomb_mold', [
        'AB'
    ], {
        A: 'mob_grinding_utils:solid_xp_mould_blank',
        B: 'immersiveengineering:wirecutter'
    });

    // powah:nitro_crystal_block → skynh:nitro_crystal_block_1
    event.shaped('skynh:nitro_crystal_block_1', [
        '###',
        '###',
        '###'
    ], {
        '#': 'powah:nitro_crystal_block'
    });

    // ae2lt:thunderstorm_condensate → ae2lt:moakiee_fumo
    event.shaped('ae2lt:moakiee_fumo', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'ae2lt:thunderstorm_condensate',
        B: 'ae2lt:clear_condensate',
        C: 'ae2lt:rain_condensate',
        D: 'ae2lt:lightning_collapse_matrix',
        E: 'ae2lt:pigmee_fumo',
        F: 'ae2lt:tesla_coil',
        G: 'ae2lt:lightning_assembly_chamber',
        H: 'ae2:creative_energy_cell',
        I: 'ae2lt:atmospheric_ionizer'
    });
});
