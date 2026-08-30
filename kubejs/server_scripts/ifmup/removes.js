// server_scripts/ifmup/removes.js
ServerEvents.recipes(event => {

    // 移除配方 ifmup:processing_addon_tier_7
    event.remove({ id: 'ifmup:processing_addon_tier_7' });
    // 移除配方 ifmup:processing_addon_tier_8
    event.remove({ id: 'ifmup:processing_addon_tier_8' });
    // 移除配方 ifmup:efficiency_addon_tier_7
    event.remove({ id: 'ifmup:efficiency_addon_tier_7' });
    // 移除配方 ifmup:efficiency_addon_tier_8
    event.remove({ id: 'ifmup:efficiency_addon_tier_8' });
    // 移除配方 ifmup:speed_addon_tier_7
    event.remove({ id: 'ifmup:speed_addon_tier_7' });
    // 移除配方 ifmup:speed_addon_tier_8
    event.remove({ id: 'ifmup:speed_addon_tier_8' });

    for (let i = 12; i <= 31; i++) event.remove({ id: `ifmup:range_addon_tier_${i}` });
    // 移除配方 ifmup:range_addon_tier_47
    event.remove({ id: 'ifmup:range_addon_tier_47' });
    // 移除配方 ifmup:range_addon_tier_63
    event.remove({ id: 'ifmup:range_addon_tier_63' });
    // 移除配方 ifmup:range_addon_tier_71
    event.remove({ id: 'ifmup:range_addon_tier_71' });
    // 移除配方 ifmup:range_addon_tier_79
    event.remove({ id: 'ifmup:range_addon_tier_79' });

    // 移除配方 ifmup:nether_star_gear
    event.remove({ id: 'ifmup:nether_star_gear' });
    // 移除配方 ifmup:star_ether_alloy_gear
    event.remove({ id: 'ifmup:star_ether_alloy_gear' });
    // 移除配方 ifmup:shadow_plate
    event.remove({ id: 'ifmup:shadow_plate' });
    // 移除配方 ifmup:unknown_magic_plate
    event.remove({ id: 'ifmup:unknown_magic_plate' });
    // 移除配方 ifmup:shadow_rose_plate
    event.remove({ id: 'ifmup:shadow_rose_plate' });
    // 移除配方 ifmup:star_ether_alloy_plate
    event.remove({ id: 'ifmup:star_ether_alloy_plate' });
});
