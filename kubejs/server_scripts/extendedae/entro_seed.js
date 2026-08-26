// extendedae/entro_seed.js
// ─────────────────────────────────────────────────────────
// 恩特罗种子（extendedae:entro_seed）合成配方
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('extendedae:entro_seed', [
        'ABC',
        'DEF',
        'HIG'
    ], {
        A: 'ars_nouveau:wilden_tribute',
        B: 'industrialforegoing:machine_frame_advanced',
        C: 'mysticalagradditions:insanium_gemstone',
        D: 'pneumaticcraft:printed_circuit_board',
        E: 'occultism:trinity_gem',
        F: 'apotheosis:mythic_material',
        H: 'skynh:nitro_crystal_block_1',
        I: 'mekanism:pellet_antimatter',
        G: 'draconicevolution:small_chaos_frag'
    });
});
