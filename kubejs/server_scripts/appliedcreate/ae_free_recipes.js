// server_scripts/appliedcreate/ae_free_recipes.js
ServerEvents.recipes(event => {
    const GLASS   = 'create:tiled_glass';           // 替代 ae2:quartz_glass
    const GEM     = 'create:rose_quartz';           // 替代 tag ae2:all_certus_quartz
    const SILICON = 'create:polished_rose_quartz';  // 替代 ae2:printed_silicon

    // create:cinder_flour → appliedcreate:andesite_stress_cell_housing
    event.shaped('appliedcreate:andesite_stress_cell_housing', [
        'ABA',
        'B B',
        'CDC'
    ], {
        A: GLASS,
        B: 'create:cinder_flour',
        C: 'create:andesite_alloy',
        D: '#c:ingots/copper'
    }).id('kubejs:appliedcreate/andesite_stress_cell_housing_ae_free');

    // create:cinder_flour → appliedcreate:brass_stress_cell_housing
    event.shaped('appliedcreate:brass_stress_cell_housing', [
        'ABA',
        'B B',
        'CDC'
    ], {
        A: GLASS,
        B: 'create:cinder_flour',
        C: '#c:ingots/brass',
        D: '#c:ingots/copper'
    }).id('kubejs:appliedcreate/brass_stress_cell_housing_ae_free');

    // appliedcreate:stress_circuit_board → appliedcreate:stress_processor
    event.shaped('appliedcreate:stress_processor', [
        'C',
        'F',
        'S'
    ], {
        C: 'appliedcreate:stress_circuit_board',
        F: 'create:cinder_flour',
        S: SILICON
    }).id('kubejs:appliedcreate/stress_processor_ae_free');

    // appliedcreate:advanced_stress_circuit_board → appliedcreate:advanced_stress_processor
    event.shaped('appliedcreate:advanced_stress_processor', [
        'C',
        'F',
        'S'
    ], {
        C: 'appliedcreate:advanced_stress_circuit_board',
        F: 'create:cinder_flour',
        S: SILICON
    }).id('kubejs:appliedcreate/advanced_stress_processor_ae_free');

    const COMP = t => `appliedcreate:stress_storage_component_${t}`;
    const CGEM = '#c:dusts/glowstone';

    const tiers = [
        { out: '1k',   rows: ['aba', 'bcb', 'aba'], k: { a: 'create:cinder_flour', b: GEM,  c: 'appliedcreate:stress_processor' } },
        { out: '4k',   rows: ['aba', 'cdc', 'aca'], k: { a: 'create:cinder_flour', b: 'appliedcreate:stress_processor',       c: COMP('1k'),   d: GLASS } },
        { out: '16k',  rows: ['aba', 'cdc', 'aca'], k: { a: CGEM,                  b: 'appliedcreate:stress_processor',       c: COMP('4k'),   d: GLASS } },
        { out: '64k',  rows: ['aba', 'cdc', 'aca'], k: { a: CGEM,                  b: 'appliedcreate:stress_processor',       c: COMP('16k'),  d: GLASS } },
        { out: '256k', rows: ['aba', 'cdc', 'aca'], k: { a: CGEM,                  b: 'appliedcreate:stress_processor',       c: COMP('64k'),  d: GLASS } },
        { out: '1m',   rows: ['aba', 'cdc', 'aba'], k: { a: 'create:cinder_flour', b: 'appliedcreate:advanced_stress_processor', c: COMP('256k'), d: GLASS } },
        { out: '4m',   rows: ['aba', 'cdc', 'aba'], k: { a: 'create:cinder_flour', b: 'appliedcreate:advanced_stress_processor', c: COMP('1m'),   d: GLASS } },
        { out: '16m',  rows: ['aba', 'cdc', 'aba'], k: { a: 'create:cinder_flour', b: 'appliedcreate:advanced_stress_processor', c: COMP('4m'),   d: GLASS } },
        { out: '64m',  rows: ['aba', 'cdc', 'aba'], k: { a: 'create:cinder_flour', b: 'appliedcreate:advanced_stress_processor', c: COMP('16m'),  d: GLASS } },
        { out: '256m', rows: ['aba', 'cdc', 'aba'], k: { a: 'create:cinder_flour', b: 'appliedcreate:advanced_stress_processor', c: COMP('64m'),  d: GLASS } }
    ];

    for (const t of tiers) {
        event.shaped(COMP(t.out), t.rows, t.k)
            .id(`kubejs:appliedcreate/stress_storage_component_${t.out}_ae_free`);
    }
});
