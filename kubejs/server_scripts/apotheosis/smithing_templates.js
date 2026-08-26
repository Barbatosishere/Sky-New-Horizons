// apotheosis/smithing_templates.js
// ─────────────────────────────────────────────────────────
// Apotheosis 锻造模板：铁 → 金 → 钻石 → 下界升级
// 配合 ../apotheosis/removes.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // 锻造模板 铁升级
    event.shaped('apotheosis:iron_upgrade_smithing_template', [
        ' A ',
        'BCB',
        'BCB'
    ], {
        A: 'apotheosis:common_material',
        B: 'minecraft:iron_ingot',
        C: 'apotheosis:gem_fused_slate'
    });

    // 锻造模板 金升级
    event.shaped('apotheosis:gold_upgrade_smithing_template', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'apotheosis:uncommon_material',
        B: 'minecraft:gold_ingot',
        C: 'apotheosis:iron_upgrade_smithing_template',
        D: 'apotheosis:gem_fused_slate'
    });

    // 锻造模板 钻石升级
    event.shaped('apotheosis:diamond_upgrade_smithing_template', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'apotheosis:rare_material',
        B: 'minecraft:diamond',
        C: 'apotheosis:gold_upgrade_smithing_template',
        D: 'apotheosis:gem_fused_slate'
    });

    // 锻造模板 下界升级
    event.shaped('minecraft:netherite_upgrade_smithing_template', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'apotheosis:epic_material',
        B: 'minecraft:netherite_ingot',
        C: 'apotheosis:diamond_upgrade_smithing_template',
        D: 'apotheosis:gem_fused_slate'
    });
});
