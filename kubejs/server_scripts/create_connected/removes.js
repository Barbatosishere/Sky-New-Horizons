// server_scripts/create_connected/removes.js
ServerEvents.recipes(event => {
    event.remove({ id: 'create_connected:crafting/kinetics/fluid_vessel' });
    event.remove({ id: 'create_connected:crafting/kinetics/fluid_vessel_from_conversion' });
});
