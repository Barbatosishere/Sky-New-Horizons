// entangled/block.js
// ─────────────────────────────────────────────────────────
// 纠缠方块（entangled:block）合成
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('entangled:block', [
        'ABA',
        'DCD',
        'ABA'
    ], {
        A: 'advanced_ae:shattered_singularity',
        B: 'ae2:dense_energy_cell',
        C: 'ae2omnicells:quantum_omni_cell_component_256k',
        D: 'ae2omnicells:multidimensional_expansion_processor'
    });
});
