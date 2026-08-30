// server_scripts/mekmm/removes.js
ServerEvents.recipes(event => {
    // 移除配方 mekmm:planting_station
    event.remove({ id: 'mekmm:planting_station' });
});
