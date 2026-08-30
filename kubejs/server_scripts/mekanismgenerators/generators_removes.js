// server_scripts/mekanismgenerators/generators_removes.js
ServerEvents.recipes(event => {
    // 移除配方 mekanismgenerators:wind_generator
    event.remove({ id: 'mekanismgenerators:wind_generator' });
    // 移除配方 mekanismgenerators:bio_generator
    event.remove({ id: 'mekanismgenerators:bio_generator' });
    // 移除配方 mekanismgenerators:gas_burning_generator
    event.remove({ id: 'mekanismgenerators:gas_burning_generator' });
    // 移除配方 mekanismgenerators:heat_generator
    event.remove({ id: 'mekanismgenerators:heat_generator' });
    // 移除配方 mekanismgenerators:module_geothermal_generator_unit
    event.remove({ id: 'mekanismgenerators:module_geothermal_generator_unit' });
});
