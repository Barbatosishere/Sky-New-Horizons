// server_scripts/mekmm/large_generators.js
ServerEvents.recipes(event => {
    // 移除配方 mekmm:large_gas_burning_generator
    event.remove({ id: 'mekmm:large_gas_burning_generator' });
    // 移除配方 mekmm:large_heat_generator
    event.remove({ id: 'mekmm:large_heat_generator' });
});
