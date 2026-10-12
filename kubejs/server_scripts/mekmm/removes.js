// server_scripts/mekmm/removes.js
ServerEvents.recipes(event => {
    // 移除配方 mekmm:planting_station
    event.remove({ id: 'mekmm:planting_station' });
    event.remove({ id: 'mekmm:large_wind_generator' });
    event.remove({ id: 'mekmm:large_gas_burning_generator' });
    event.remove({ id: 'mekmm:large_heat_generator' });
});
