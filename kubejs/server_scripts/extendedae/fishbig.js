// extendedae/fishbig.js
// ─────────────────────────────────────────────────────────
// 鱼大（extendedae:fishbig）合成配方 - 终极创造方块组合
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
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
