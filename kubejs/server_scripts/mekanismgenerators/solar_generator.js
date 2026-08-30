// server_scripts/mekanismgenerators/solar_generator.js
ServerEvents.recipes(event => {
    // mekanismgenerators:solar_panel → mekanismgenerators:solar_generator
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
