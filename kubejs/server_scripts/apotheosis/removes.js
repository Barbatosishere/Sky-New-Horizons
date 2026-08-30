// server_scripts/apotheosis/removes.js
ServerEvents.recipes(event => {
    // 移除配方 apotheosis:iron_upgrade_smithing_template
    event.remove({ id: 'apotheosis:iron_upgrade_smithing_template' });
    // 移除配方 apotheosis:gold_upgrade_smithing_template
    event.remove({ id: 'apotheosis:gold_upgrade_smithing_template' });
    // 移除配方 apotheosis:diamond_upgrade_smithing_template
    event.remove({ id: 'apotheosis:diamond_upgrade_smithing_template' });
});
