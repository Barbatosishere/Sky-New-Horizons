// server_scripts/extendedae/fishbig.js
ServerEvents.recipes(event => {
    // pneumaticcraft:creative_compressed_iron_block → extendedae:fishbig
    event.shaped('extendedae:fishbig', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'pneumaticcraft:creative_compressed_iron_block',
        B: 'draconicevolution:creative_capacitor',
        C: 'pneumaticcraft:creative_compressor',
        D: 'mekanism:creative_chemical_tank',
        E: 'mekanism:creative_bin',
        F: 'mekanism:creative_fluid_tank',
        G: 'enderio:creative_power',
        H: 'ae2:creative_energy_cell',
        I: 'draconicevolution:creative_op_capacitor'
    });
});
