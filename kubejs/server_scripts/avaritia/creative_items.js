// server_scripts/avaritia/creative_items.js
ServerEvents.recipes(event => {

    // 移除配方 avaritia:mek_creative_bin
    event.remove({ id: 'avaritia:mek_creative_bin' });
    // 移除配方 avaritia:mek_creative_fluid_tank
    event.remove({ id: 'avaritia:mek_creative_fluid_tank' });
    // 移除配方 avaritia:mek_creative_chemical_tank
    event.remove({ id: 'avaritia:mek_creative_chemical_tank' });
    // 移除配方 avaritia:ae2_creative_energy_cell
    event.remove({ id: 'avaritia:ae2_creative_energy_cell' });
    // 移除配方 avaritia:eio_creative_power
    event.remove({ id: 'avaritia:eio_creative_power' });

    // ? → ?  [shaped_table]
    event.custom({
        type: 'avaritia:shaped_table',
        tier: 4,
        pattern: [
            'IAAAAAAAJ',
            'ABCCCCCBA',
            'ABCCCCCBA',
            'ABCCCCCBA',
            'ABBBDBBBA',
            'ABBBBBBBA',
            'ABEFGFHBA',
            'ABEFGFHBA',
            'JAAAAAAAI'
        ],
        key: {
            A: { item: 'mekanism_extras:naquadah_reactor_casing' },
            B: { item: 'mekanism_extras:infinite_bin' },
            C: { item: 'avaritia:infinity' },
            D: { item: 'avaritia:infinity_catalyst' },
            E: { item: 'mekanism_extras:infinite_induction_cell' },
            F: { item: 'mekanism_extras:infinite_fluid_tank' },
            G: { item: 'mekanism_extras:infinite_chemical_tank' },
            H: { item: 'mekanism_extras:infinite_induction_provider' },
            I: { item: 'extendedae_plus:xbai' },
            J: { item: 'extendedae_plus:c-h716' }
        },
        result: { id: 'mekanism:creative_bin' },
        show_notification: true
    }).id('kubejs:infinity_crafting/creative_bin');

    // ? → ?  [shaped_table]
    event.custom({
        type: 'avaritia:shaped_table',
        tier: 4,
        pattern: [
            'ABBBBBBBA',
            'BACCDCCAB',
            'BCCCDCCCB',
            'BCCCDCCCB',
            'BDDDEDDDB',
            'BCCCDCCCB',
            'BCCCDCCCB',
            'BACCDCCAB',
            'ABBBBBBBA'
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

    // ? → ?  [shaped_table]
    event.custom({
        type: 'avaritia:shaped_table',
        tier: 4,
        pattern: [
            '   C C   ',
            '   C C   ',
            'ABBBCBBBA',
            'BCCCCCCCB',
            'BCCCDCCCB',
            'BCCDEDCCB',
            'BCCCDCCCB',
            'BCCCCCCCB',
            'ABBBCBBBA'
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

    // ? → ?  [shaped_table]
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

    // ? → ?  [shaped_table]
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

    // ? → ?  [shaped_table]
    event.custom({
    type: 'avaritia:shaped_table',
    tier: 4,
    pattern: [
        'L ABCDE L',
        '  ABCDE  ',
        '  ABCDE  ',
        '  ABCDE  ',
        'KKKKMKKKK',
        '  FGHIJ  ',
        '  FGHIJ  ',
        '  FGHIJ  ',
        'L FGHIJ L'
    ],
    key: {
        A: { item: 'appliedcreate:stress_storage_cell_256m' },
        B: { item: 'megacells:source_storage_cell_256m' },
        C: { item: 'megacells:chemical_storage_cell_256m' },
        D: { item: 'megacells:fluid_storage_cell_256m' },
        E: { item: 'megacells:item_storage_cell_256m' },
        F: { item: 'appflux:fe_256m_cell' },
        G: { item: 'appliedpneumatics:air_cell_256m' },
        H: { item: 'ae2omnicells:quantum_omni_cell_256m' },
        I: { item: 'ae2omnicells:complex_omni_cell_256m' },
        J: { item: 'ae2omnicells:omni_cell_256m' },
        K: { item: 'minecraft:netherite_block' },
        L: { item: 'extendedae_plus:oblivion_singularity' },
        M: { item: 'extendedae_plus:infinity_core' }
    },
    result: { id: 'extendedae_plus:infinity_biginteger_cell', count: 1 },
    show_notification: true
}).id('kubejs:infinity_crafting/infinity_biginteger_cell');
});
