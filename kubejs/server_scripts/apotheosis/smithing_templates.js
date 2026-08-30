// server_scripts/apotheosis/smithing_templates.js
ServerEvents.recipes(event => {

    // apotheosis:common_material → apotheosis:iron_upgrade_smithing_template
    event.shaped('apotheosis:iron_upgrade_smithing_template', [
        ' A ',
        'BCB',
        'BCB'
    ], {
        A: 'apotheosis:common_material',
        B: 'minecraft:iron_ingot',
        C: 'apotheosis:gem_fused_slate'
    });

    // apotheosis:uncommon_material → apotheosis:gold_upgrade_smithing_template
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

    // apotheosis:rare_material → apotheosis:diamond_upgrade_smithing_template
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

    // apotheosis:epic_material → minecraft:netherite_upgrade_smithing_template
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
