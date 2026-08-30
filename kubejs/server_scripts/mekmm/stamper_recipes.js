// server_scripts/mekmm/stamper_recipes.js
ServerEvents.recipes(event => {

    // mekmm:stamper（每对 [输入, 输出] × 磨具）
    const MOLD_PLATE_MOLD = ['casting:plate_mold',              'plate_mold'];
    const MOLD_IE_PLATE   = ['immersiveengineering:mold_plate', 'ie_plate_mold'];

    const SHEETS = [
        ['create:brass_ingot',                    'create:brass_sheet'],
        ['minecraft:gold_ingot',                  'create:golden_sheet'],
        ['create_better_motors:reggarfonite_gem', 'create_better_motors:reggarfonite_sheet']
    ];

    const IE_MOLDS = [MOLD_PLATE_MOLD];
    const IE_PLATES = [
        ['#c:ingots/aluminum',   'immersiveengineering:plate_aluminum'],
        ['#c:ingots/constantan', 'immersiveengineering:plate_constantan'],
        ['#c:ingots/copper',     'immersiveengineering:plate_copper'],
        ['#c:ingots/electrum',   'immersiveengineering:plate_electrum'],
        ['minecraft:gold_ingot', 'immersiveengineering:plate_gold'],
        ['minecraft:iron_ingot', 'immersiveengineering:plate_iron'],
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
                // 任意金属 → 1× 对应板材  [stamper]
                event.custom({
                    type: 'mekmm:stamper',
                    input: input,
                    mold: { count: 1, item: moldItem },
                    output: { count: 1, id: out }
                }).id(`kubejs:mekmm/${out.replace(':', '_')}_from_stamper_${moldKey}`);
            }
        }
    };
    addStampers(SHEETS, [MOLD_PLATE_MOLD, MOLD_IE_PLATE]);
    addStampers(IE_PLATES, IE_MOLDS);

    // ae2lt:overload_crystal → ae2lt:unoverloaded_circuit_board  [stamper]
    event.custom({
        type: 'mekmm:stamper',
        input: { count: 1, item: 'ae2lt:overload_crystal' },
        mold: { count: 1, item: 'ae2lt:overload_inscriber_press' },
        output: { count: 1, id: 'ae2lt:unoverloaded_circuit_board' }
    }).id('kubejs:mekmm/unoverloaded_circuit_board_from_stamper');

    // neoecoae:energized_superconductive_ingot → neoecoae:superconducting_processor_print  [stamper]
    event.custom({
        type: 'mekmm:stamper',
        input: { count: 1, item: 'neoecoae:energized_superconductive_ingot' },
        mold: { count: 1, item: 'neoecoae:superconducting_processor_press' },
        output: { count: 1, id: 'neoecoae:superconducting_processor_print' }
    }).id('kubejs:mekmm/superconducting_processor_print_from_stamper');
});
