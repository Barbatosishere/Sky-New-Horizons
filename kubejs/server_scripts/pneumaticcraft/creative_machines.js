// pneumaticcraft/creative_machines.js
// ─────────────────────────────────────────────────────────
// 创造模式压缩机 / 创造模式压缩铁块
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // 创造模式压缩机
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

    // 创造模式压缩铁块
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
