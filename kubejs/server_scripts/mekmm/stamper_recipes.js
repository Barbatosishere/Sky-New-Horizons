// mekmm/stamper_recipes.js
// ─────────────────────────────────────────────────────────
// MekMM CNC 数控压模机配方
//
// 板类统一策略：任意板材/金属板都接受以下任一"板类磨具"：
//   - casting:plate_mold               （通用板模）
//   - immersiveengineering:mold_plate  （IE 板模）
//   - ae2:calculation_processor_press  （AE2 计算压印模板）
// 背景：mekmm 自带的 IE 兼容配方只认 ie:mold_plate（11 种金属板），
// 原 kubejs 配方只认 casting:plate_mold / calc_press（黄铜、金、瑞加方石板），
// 导致同一机器上不同板材磨具不通用。此文件以矩阵补全两种方向。
// 印刷件（电路板等）保持专用模具，不参与矩阵。
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {

    // ─── 磨具（[物品 id, 命名用短键]）───
    const MOLD_PLATE_MOLD = ['casting:plate_mold',              'plate_mold'];
    const MOLD_IE_PLATE   = ['immersiveengineering:mold_plate', 'ie_plate_mold'];
    const MOLD_CALC_PRESS = ['ae2:calculation_processor_press', 'calc_press'];

    // ─── Create 系板材：jar 无任何原生配方，三种磨具全部补上 ───
    const SHEETS = [
        ['create:brass_ingot',                    'create:brass_sheet'],
        ['minecraft:gold_ingot',                  'create:golden_sheet'],
        ['create_better_motors:reggarfonite_gem', 'create_better_motors:reggarfonite_sheet']
    ];

    // ─── IE 兼容金属板：mekmm 数据包已有 ie:mold_plate 版本，只补缺的两种磨具 ───
    const IE_MOLDS = [MOLD_PLATE_MOLD, MOLD_CALC_PRESS];
    const IE_PLATES = [
        ['#c:ingots/aluminum',   'immersiveengineering:plate_aluminum'],
        ['#c:ingots/constantan', 'immersiveengineering:plate_constantan'],
        ['#c:ingots/copper',     'immersiveengineering:plate_copper'],
        ['#c:ingots/electrum',   'immersiveengineering:plate_electrum'],
        ['#c:ingots/gold',       'immersiveengineering:plate_gold'],
        ['#c:ingots/iron',       'immersiveengineering:plate_iron'],
        ['#c:ingots/lead',       'immersiveengineering:plate_lead'],
        ['#c:ingots/nickel',     'immersiveengineering:plate_nickel'],
        ['#c:ingots/silver',     'immersiveengineering:plate_silver'],
        ['#c:ingots/steel',      'immersiveengineering:plate_steel'],
        ['#c:ingots/uranium',    'immersiveengineering:plate_uranium']
    ];

    const addStampers = (pairs, molds) => {
        for (const [ing, out] of pairs) {
            const input = ing.startsWith('#')
                ? { count: 1, tag: ing.slice(1) }
                : { count: 1, item: ing };
            for (const [moldItem, moldKey] of molds) {
                event.custom({
                    type: 'mekmm:stamper',
                    input: input,
                    mold: { count: 1, item: moldItem },
                    output: { count: 1, id: out }
                }).id(`kubejs:mekmm/${out.replace(':', '_')}_from_stamper_${moldKey}`);
            }
        }
    };

    addStampers(SHEETS, [MOLD_PLATE_MOLD, MOLD_IE_PLATE, MOLD_CALC_PRESS]);
    addStampers(IE_PLATES, IE_MOLDS);

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
