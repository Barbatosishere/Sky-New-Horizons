// mekanismgenerators/solar_generator.js
// ─────────────────────────────────────────────────────────
// 太阳能发电机（mekanismgenerators:solar_generator）合成配方
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('mekanismgenerators:solar_generator', [
        'DDD',
        'B B',
        'CEC'
    ], {
        D: 'mekanismgenerators:solar_panel',
        B: 'mekanism:ingot_osmium',
        C: 'mekanism:pellet_polonium',
        E: 'mekanism:energy_tablet'
    });
});
