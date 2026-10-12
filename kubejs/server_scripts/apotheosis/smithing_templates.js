// server_scripts/apotheosis/smithing_templates.js
ServerEvents.recipes(event => {
    event.shaped('apotheosis:iron_upgrade_smithing_template', [
        ' A ',
        'BCB',
        'BCB'
    ], {
        A: 'apotheosis:mysterious_scrap_metal',
        B: 'minecraft:iron_ingot',
        C: 'apotheosis:gem_fused_slate'
    });

    event.shaped('apotheosis:gold_upgrade_smithing_template', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'apotheosis:timeworn_fabric',
        B: 'minecraft:gold_ingot',
        C: 'apotheosis:iron_upgrade_smithing_template',
        D: 'apotheosis:gem_fused_slate'
    });

    event.shaped('apotheosis:diamond_upgrade_smithing_template', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'apotheosis:luminous_crystal_shard',
        B: 'minecraft:diamond',
        C: 'apotheosis:gold_upgrade_smithing_template',
        D: 'apotheosis:gem_fused_slate'
    });

    event.shaped('minecraft:netherite_upgrade_smithing_template', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'apotheosis:arcane_sands',
        B: 'minecraft:netherite_ingot',
        C: 'apotheosis:diamond_upgrade_smithing_template',
        D: 'apotheosis:gem_fused_slate'
    });
});
