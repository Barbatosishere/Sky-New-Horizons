// server_scripts/pneumaticcraft/creative_machines.js
ServerEvents.recipes(event => {

    // pneumaticcraft:compressed_iron_block → pneumaticcraft:creative_compressor
    event.shaped('pneumaticcraft:creative_compressor', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        B: 'pneumaticcraft:compressed_iron_block',
        A: 'ae2:cell_component_256k',
        C: 'avaritia:dense_neutron_compressor',
        D: 'ae2omnicells:multidimensional_expansion_processor'
    });

    // pneumaticcraft:compressed_iron_block → pneumaticcraft:creative_compressed_iron_block
    event.shaped('pneumaticcraft:creative_compressed_iron_block', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        A: 'pneumaticcraft:compressed_iron_block',
        B: 'ae2:cell_component_256k',
        C: 'avaritia:dense_neutron_compressor',
        D: 'ae2omnicells:multidimensional_expansion_processor'
    });
});
