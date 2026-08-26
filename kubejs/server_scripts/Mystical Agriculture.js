// server_scripts/remove_copper_alloy.js
ServerEvents.recipes(event => {
    event.remove({ output: 'mysticalagriculture:copper_alloy_seeds' });
    event.remove({ output: 'mysticalagriculture:copper_alloy_essence' });
});