// 为黄铜锭和瑞加方石添加 MekMM CNC 数控压模机板材配方
ServerEvents.recipes(event => {
    // MekMM CNC 数控压模机 - 黄铜板配方
    event.custom({
        type: 'mekmm:stamper',
        input: {
            count: 1,
            item: 'create:brass_ingot'
        },
        mold: {
            count: 1,
            item: 'casting:plate_mold'
        },
        output: {
            count: 1,
            id: 'create:brass_sheet'
        }
    }).id('kubejs:mekmm/brass_sheet_from_stamper')

    // MekMM CNC 数控压模机 - 瑞加方石板配方
    event.custom({
        type: 'mekmm:stamper',
        input: {
            count: 1,
            item: 'create_better_motors:reggarfonite_gem'
        },
        mold: {
            count: 1,
            item: 'casting:plate_mold'
        },
        output: {
            count: 1,
            id: 'create_better_motors:reggarfonite_sheet'
        }
    }).id('kubejs:mekmm/reggarfonite_sheet_from_stamper')

    // MekMM CNC 数控压模机 - 未过载电路板配方
    event.custom({
        type: 'mekmm:stamper',
        input: {
            count: 1,
            item: 'ae2lt:overload_crystal'
        },
        mold: {
            count: 1,
            item: 'ae2lt:overload_inscriber_press'
        },
        output: {
            count: 1,
            id: 'ae2lt:unoverloaded_circuit_board'
        }
    }).id('kubejs:mekmm/unoverloaded_circuit_board_from_stamper')

    // MekMM CNC 数控压模机 - ECO-3A 超导电路板配方
    event.custom({
        type: 'mekmm:stamper',
        input: {
            count: 1,
            item: 'neoecoae:energized_superconductive_ingot'
        },
        mold: {
            count: 1,
            item: 'neoecoae:superconducting_processor_press'
        },
        output: {
            count: 1,
            id: 'neoecoae:superconducting_processor_print'
        }
    }).id('kubejs:mekmm/superconducting_processor_print_from_stamper')
})
