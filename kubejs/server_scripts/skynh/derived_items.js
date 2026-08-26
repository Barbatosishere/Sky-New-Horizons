// skynh/derived_items.js
// ─────────────────────────────────────────────────────────
// 自定义中间物品配方：
//   - skynh:honeycomb_mold        (经验模坯 → 蜂窝模具)
//   - skynh:nitro_crystal_block_1 (蓝冰×9 → 硝基水晶块)
//   - ae2lt:moakiee_fumo          (ae2lt 系列装饰物)
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {

    // 经验模坯 → 蜂窝模具（用线钳切）
    event.shaped('skynh:honeycomb_mold', [
        'AB'
    ], {
        A: 'mob_grinding_utils:solid_xp_mould_blank',
        B: 'immersiveengineering:wirecutter'
    });

    // 硝基水晶块
    event.shaped('skynh:nitro_crystal_block_1', [
        '###',
        '###',
        '###'
    ], {
        '#': 'powah:nitro_crystal_block'
    });

    // MOAKIEE 装饰物
    event.shaped('ae2lt:moakiee_fumo', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'ae2lt:thunderstorm_condensate',
        B: 'ae2lt:clear_condensate',
        C: 'ae2lt:rain_condensate',
        D: 'ae2lt:lightning_collapse_matrix',
        E: 'ae2lt:pigmee_fumo',
        F: 'ae2lt:tesla_coil',
        G: 'ae2lt:lightning_assembly_chamber',
        H: 'ae2:creative_energy_cell',
        I: 'ae2lt:atmospheric_ionizer'
    });
});
