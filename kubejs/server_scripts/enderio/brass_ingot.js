// server_scripts/enderio/brass_ingot.js
ServerEvents.recipes(event => {
    // 移除配方 alltheores:alloy_smelting/brass_ingot
    event.remove({ id: 'alltheores:alloy_smelting/brass_ingot' });
});
