// server_scripts/mekanismgenerators/generators_removes.js
ServerEvents.recipes(event => {
    event.remove({ id: 'mekanismgenerators:generator/wind' });
    event.remove({ id: 'mekanismgenerators:generator/bio' });
    event.remove({ id: 'mekanismgenerators:generator/gas_burning' });
    event.remove({ id: 'mekanismgenerators:generator/heat' });
    event.remove({ id: 'mekanismgenerators:module_geothermal_generator_unit' });
});
