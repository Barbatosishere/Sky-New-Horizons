// server_scripts/mysticalagriculture/removes.js
ServerEvents.recipes(event => {
    event.remove({ id: 'mysticalagriculture:seed/crafting/copper_alloy' });
    event.remove({ id: 'mysticalagriculture:seed/infusion/copper_alloy' });
    event.remove({ id: 'mysticalagriculture:essence/enderio/copper_alloy_ingot' });
});
