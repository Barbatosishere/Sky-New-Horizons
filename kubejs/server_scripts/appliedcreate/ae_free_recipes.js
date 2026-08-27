// appliedcreate/ae_free_recipes.js
// ─────────────────────────────────────────────────────────────
// 应力单元 AE-free 生产链（配合 removes.js 的 16 条移除）。
// 原数据包配方以 AE2 物品为材料，这里用 Create 原生物品等价替换：
//   ae2:quartz_glass          → create:tiled_glass
//   tag ae2:all_certus_quartz → create:rose_quartz
//   ae2:printed_silicon       → create:polished_rose_quartz（处理器镜像配方）
// 覆盖：应力外壳 ×2、应力存储组件 10 阶、应力/高级应力处理器 ×2；
// 存储组件与外壳合成出 stress_storage_cell_* 的原版 shapeless 配方保持不变。
// AE 印制路线（ae2:inscriber / extendedae:crystal_assembler）未删除，作为并行获取途径。
// ─────────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    const GLASS   = 'create:tiled_glass';           // 替代 ae2:quartz_glass
    const GEM     = 'create:rose_quartz';           // 替代 tag ae2:all_certus_quartz
    const SILICON = 'create:polished_rose_quartz';  // 替代 ae2:printed_silicon

    // ─── 应力外壳（原配方 ae2:quartz_glass → create:tiled_glass，其余不变）───
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

    // ─── 应力处理器（镜像 inscriber：电路板 + 余烬粉 + 硅替代基板）───
    // 原 inscriber 为三明治结构 bottom=printed_silicon / middle=cinder_flour / top=circuit_board
    event.shaped('appliedcreate:stress_processor', [
        'C',
        'F',
        'S'
    ], {
        C: 'appliedcreate:stress_circuit_board',
        F: 'create:cinder_flour',
        S: SILICON
    }).id('kubejs:appliedcreate/stress_processor_ae_free');

    event.shaped('appliedcreate:advanced_stress_processor', [
        'C',
        'F',
        'S'
    ], {
        C: 'appliedcreate:advanced_stress_circuit_board',
        F: 'create:cinder_flour',
        S: SILICON
    }).id('kubejs:appliedcreate/advanced_stress_processor_ae_free');

    // ─── 应力存储组件 ×10 阶（逐阶照抄原 pattern/key，仅替换 AE 物品）───
    const COMP = t => `appliedcreate:stress_storage_component_${t}`;
    const CGEM = '#c:dusts/glowstone';

    // 注意：pattern 中的字母与 key 键名必须完全一致（区分大小写）。
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
