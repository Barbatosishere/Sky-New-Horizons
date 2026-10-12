// server_scripts/ifmup/removes.js
ServerEvents.recipes(event => {
    const addons = [
        'processing_addon_tier_7',
        'processing_addon_tier_8',
        'efficiency_addon_tier_7',
        'efficiency_addon_tier_8',
        'speed_addon_tier_7',
        'speed_addon_tier_8'
    ];
    addons.forEach(id => {
        event.remove({ id: `industrialforegoing:dissolution_chamber/${id}` });
    });

    for (let i = 12; i <= 31; i++) {
        event.remove({ id: `industrialforegoing:dissolution_chamber/range_addon_tier_${i}` });
    }
    for (const tier of [47, 63, 71, 79]) {
        event.remove({ id: `industrialforegoing:dissolution_chamber/range_addon_tier_${tier}` });
    }

    event.remove({ id: 'ifmup:nether_star_gear' });
    event.remove({ id: 'ifmup:star_ether_alloy_gear' });
});
