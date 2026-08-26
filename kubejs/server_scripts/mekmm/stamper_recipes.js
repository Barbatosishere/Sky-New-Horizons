// mekmm/stamper_recipes.js
// ─────────────────────────────────────────────────────────
// MekMM CNC 数控压模机配方
//
// 玩家可通过以下任一压印磨具压出对应板材/印刷件：
//   - casting:plate_mold         （通用板模）
//   - ae2:calculation_processor_press （AE2 计算压印模板）
// ---------------------------------------------------------------------------

ServerEvents.recipes(event => {

    // ─── 黄铜板：两种磨具皆可 ───
    // (A) casting:plate_mold（通用板模）
    event.custom({
        type: 'mekmm:stamper',
        input: { count: 1, item: 'create:brass_ingot' },
        mold: { count: 1, item: 'casting:plate_mold' },
        output: { count: 1, id: 'create:brass_sheet' }
    }).id('kubejs:mekmm/brass_sheet_from_stamper_plate_mold')

    // (B) ae2:calculation_processor_press（AE2 计算压印模板）
    event.custom({
        type: 'mekmm:stamper',
        input: { count: 1, item: 'create:brass_ingot' },
        mold: { count: 1, item: 'ae2:calculation_processor_press' },
        output: { count: 1, id: 'create:brass_sheet' }
    }).id('kubejs:mekmm/brass_sheet_from_stamper_calc_press')

    // ─── 金板：两种磨具皆可 ───
    // (A) casting:plate_mold
    event.custom({
        type: 'mekmm:stamper',
        input: { count: 1, item: 'minecraft:gold_ingot' },
        mold: { count: 1, item: 'casting:plate_mold' },
        output: { count: 1, id: 'create:golden_sheet' }
    }).id('kubejs:mekmm/golden_sheet_from_stamper_plate_mold')

    // (B) ae2:calculation_processor_press
    event.custom({
        type: 'mekmm:stamper',
        input: { count: 1, item: 'minecraft:gold_ingot' },
        mold: { count: 1, item: 'ae2:calculation_processor_press' },
        output: { count: 1, id: 'create:golden_sheet' }
    }).id('kubejs:mekmm/golden_sheet_from_stamper_calc_press')

    // ─── 瑞加方石板：两种磨具皆可 ───
    // (A) casting:plate_mold
    event.custom({
        type: 'mekmm:stamper',
        input: { count: 1, item: 'create_better_motors:reggarfonite_gem' },
        mold: { count: 1, item: 'casting:plate_mold' },
        output: { count: 1, id: 'create_better_motors:reggarfonite_sheet' }
    }).id('kubejs:mekmm/reggarfonite_sheet_from_stamper_plate_mold')

    // (B) ae2:calculation_processor_press
    event.custom({
        type: 'mekmm:stamper',
        input: { count: 1, item: 'create_better_motors:reggarfonite_gem' },
        mold: { count: 1, item: 'ae2:calculation_processor_press' },
        output: { count: 1, id: 'create_better_motors:reggarfonite_sheet' }
    }).id('kubejs:mekmm/reggarfonite_sheet_from_stamper_calc_press')

    // ─── 未过载电路板：保持原样（仅 ae2lt:overload_inscriber_press） ───
    event.custom({
        type: 'mekmm:stamper',
        input: { count: 1, item: 'ae2lt:overload_crystal' },
        mold: { count: 1, item: 'ae2lt:overload_inscriber_press' },
        output: { count: 1, id: 'ae2lt:unoverloaded_circuit_board' }
    }).id('kubejs:mekmm/unoverloaded_circuit_board_from_stamper')

    // ─── ECO-3A 超导电路板：保持原样（仅 neoecoae:superconducting_processor_press） ───
    event.custom({
        type: 'mekmm:stamper',
        input: { count: 1, item: 'neoecoae:energized_superconductive_ingot' },
        mold: { count: 1, item: 'neoecoae:superconducting_processor_press' },
        output: { count: 1, id: 'neoecoae:superconducting_processor_print' }
    }).id('kubejs:mekmm/superconducting_processor_print_from_stamper')
})
