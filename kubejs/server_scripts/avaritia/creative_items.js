// avaritia/creative_items.js
// ─────────────────────────────────────────────────────────
// 创造模式物品的 Extended Crafting shaped_table 配方（来自原 remove_Avaritia.js）
// 同时移除原 remove_recipes.js 中相关 avaritia:mek_creative_* 配方。
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // 移除原版 avaritia 创造物品配方
    event.remove({ id: 'avaritia:mek_creative_bin' });
    event.remove({ id: 'avaritia:mek_creative_fluid_tank' });
    event.remove({ id: 'avaritia:mek_creative_chemical_tank' });
    event.remove({ id: 'avaritia:ae2_creative_energy_cell' });
    event.remove({ id: 'avaritia:eio_creative_power' });

    // 创造箱柜
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
            I: { item: 'avaritia:infinity' },
            J: { item: 'avaritia:infinity' }
        },
        result: { id: 'mekanism:creative_bin' },
        show_notification: true
    }).id('kubejs:infinity_crafting/creative_bin');

    // 创造流体储罐
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

    // 创造化学品储罐
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