// server_scripts/create_connected/removes.js
ServerEvents.recipes(event => {
    // 移除配方 create_connected:fluid_vessel
    event.remove({ id: 'create_connected:fluid_vessel' });
});
