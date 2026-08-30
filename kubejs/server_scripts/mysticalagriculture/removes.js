// server_scripts/mysticalagriculture/removes.js
ServerEvents.recipes(event => {
    // 移除配方 mysticalagriculture:copper_alloy
    event.remove({ id: 'mysticalagriculture:copper_alloy' });
    // 移除配方 mysticalagriculture:essence/enderio/copper_alloy_ingot
    event.remove({ id: 'mysticalagriculture:essence/enderio/copper_alloy_ingot' });
});
