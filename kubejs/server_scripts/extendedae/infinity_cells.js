// extendedae/infinity_cells.js
// ─────────────────────────────────────────────────────────
// extendedae 无限圆石/无限水 cell 配方
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {

    // 无限圆石
    event.shaped('extendedae:infinity_cobblestone_cell', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        B: 'minecraft:water_bucket',
        C: 'minecraft:lava_bucket',
        A: 'ae2:cell_component_256k',
        D: 'ae2omnicells:multidimensional_expansion_processor'
    });

    // 无限水
    event.shaped('extendedae:infinity_water_cell', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        B: 'functionalstorage:water_generator_upgrade',
        A: 'ae2:cell_component_256k',
        C: 'functionalstorage:fluid_1',
        D: 'ae2omnicells:multidimensional_expansion_processor'
    });
});
