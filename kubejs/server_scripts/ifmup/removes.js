// ifmup/removes.js
// ─────────────────────────────────────────────────────────
// 移除 ifmup 自带的 28 个高阶升级/齿轮/板配方
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // processing addon
    event.remove({ id: 'ifmup:processing_addon_tier_7' });
    event.remove({ id: 'ifmup:processing_addon_tier_8' });
    event.remove({ id: 'ifmup:efficiency_addon_tier_7' });
    event.remove({ id: 'ifmup:efficiency_addon_tier_8' });
    event.remove({ id: 'ifmup:speed_addon_tier_7' });
    event.remove({ id: 'ifmup:speed_addon_tier_8' });
    // range addon (12-31, 47, 63, 71, 79)
    for (let i = 12; i <= 31; i++) event.remove({ id: `ifmup:range_addon_tier_${i}` });
    event.remove({ id: 'ifmup:range_addon_tier_47' });
    event.remove({ id: 'ifmup:range_addon_tier_63' });
    event.remove({ id: 'ifmup:range_addon_tier_71' });
    event.remove({ id: 'ifmup:range_addon_tier_79' });
    // 齿轮/板
    event.remove({ id: 'ifmup:nether_star_gear' });
    event.remove({ id: 'ifmup:star_ether_alloy_gear' });
    event.remove({ id: 'ifmup:shadow_plate' });
    event.remove({ id: 'ifmup:unknown_magic_plate' });
    event.remove({ id: 'ifmup:shadow_rose_plate' });
    event.remove({ id: 'ifmup:star_ether_alloy_plate' });
});
