ServerEvents.recipes(event => {
    // 创造箱柜
    event.custom({
        type: 'avaritia:shaped_table',
        tier: 4,
        pattern: [
            'AAAAAAAAA',
            'ABCCCCCBA',
            'ABCCCCCBA',
            'ABCCCCCBA',
            'ABBBDBBBA',
            'ABBBBBBBA',
            'ABEFGFHBA',
            'ABEFGFHBA',
            'AAAAAAAAA'
        ],
        key: {
            A: { item: 'mekanism_extras:naquadah_reactor_casing' },
            B: { item: 'mekanism_extras:infinite_bin' },
            C: { item: 'avaritia:infinity' },            
            D: { item: 'avaritia:infinity_catalyst' },
            E: { item: 'mekanism_extras:infinite_induction_cell' },
            F: { item: 'mekanism_extras:infinite_fluid_tank' },
            G: { item: 'mekanism_extras:infinite_chemical_tank' },
            H: { item: 'mekanism_extras:infinite_induction_provider' }
        },
        result: { id: 'mekanism:creative_bin' },
        show_notification: true
    }).id('kubejs:infinity_crafting/creative_bin');

    // 创造流体储罐
    event.custom({
        type: 'avaritia:shaped_table',
        tier: 4,
        pattern: [
            '         ',
            ' ABBCBBA ',
            ' BCCDCCB ',
            ' BCCDCCB ',
            ' BDDEDDB ',
            ' BCCDCCB ',
            ' BCCDCCB ',
            ' ABBCBBA ',
            '         '
        ],
        key: {
            A: { item: 'avaritia:infinity_catalyst' },
            B: { item: 'mekanism_extras:infinite_fluid_tank' },
            C: { item: 'mekanism:dynamic_tank' },
            D: { item: 'mekanismgenerators:reactor_glass' },
            E: { item: 'avaritia:infinity' }       
        },
        result: { id: 'mekanism:creative_fluid_tank' },
        show_notification: true
    }).id('kubejs:infinity_crafting/creative_fluid_tank');

    // 创造化学品储罐
    event.custom({
        type: 'avaritia:shaped_table',
        tier: 4,
        pattern: [
            '   C C   ',
            ' ABBCBBA ',
            ' BCCCCCB ',
            ' BCCDCCB ',
            ' BCDEDCB ',
            ' BCCDCCB ',
            ' BCCCCCB ',
            ' ABBCBBA ',
            '         '
        ],
        key: {
            A: { item: 'avaritia:infinity_catalyst' },
            B: { item: 'mekanism_extras:infinite_chemical_tank' },
            C: { item: 'mekanism:dynamic_tank' },
            D: { item: 'mekanismgenerators:reactor_glass' },
            E: { item: 'avaritia:infinity' }       
        },
        result: { id: 'mekanism:creative_chemical_tank' },
        show_notification: true
    }).id('kubejs:infinity_crafting/creative_chemical_tank');

    // 创造能源元件
    event.custom({
        type: 'avaritia:shaped_table',
        tier: 4,
        pattern: [
            'AAAABAAAA',
            'ACDCBCDCA',
            'ADCEBFCDA',
            'ACEEBFFCA',
            'BBBBGBBBB',
            'ACFFBEECA',
            'ADCFBECDA',
            'ACDCBCDCA',
            'AAAABAAAA'
        ],
        key: {
            A: { item: 'megacells:mega_energy_cell' },
            B: { item: 'ae2omnicells:singularity_block' },
            C: { item: 'mekanism:quantum_entangloporter' },
            D: { item: 'avaritia:infinity' },
            E: { item: 'mekanism_extras:infinite_induction_cell' } ,
            F: { item: 'mekanism_extras:infinite_induction_provider' }  ,
            G: { item: 'advanced_ae:quantum_core' }                
        },
        result: { id: 'ae2:creative_energy_cell' },
        show_notification: true
    }).id('kubejs:infinity_crafting/creative_energy_cell');

    // 创造能源
    event.custom({
        type: 'avaritia:shaped_table',
        tier: 4,
        pattern: [
            'ACDDDDDCB',
            'CEFFFFFEC',
            'DFGHHHGFD',
            'DFHBDAHFD',
            'DFHDIDHFD',
            'DFHADBHFD',
            'DFGHHHGFD',
            'CEFFFFFEC',
            'BCDDDDDCA'
        ],
        key: {
            A: { item: 'mekanism_extras:infinite_induction_cell' },
            B: { item: 'mekanism_extras:infinite_induction_provider' },
            C: { item: 'avaritia:neutron' },
            D: { item: 'avaritia:infinity' },
            E: { item: 'enderio:frank_n_zombie' } ,
            F: { item: 'enderio:sentient_ender' }  ,
            G: { item: 'enderio:ender_crystal' } ,
            H: { item: 'enderio:weather_crystal' } ,
            I: { item: 'advanced_ae:quantum_core' }                

        },
        result: { id: 'enderio:creative_power' },
        show_notification: true
    }).id('kubejs:infinity_crafting/creative_power');
});