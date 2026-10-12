// server_scripts/immersiveengineering/removes.js
ServerEvents.recipes(event => {
    // 移除配方 immersiveengineering:crafting/redstone_acid
    event.remove({ id: 'immersiveengineering:crafting/redstone_acid' });
    // 移除配方 immersiveengineering:crafting/stick_iron
    event.remove({ id: 'immersiveengineering:crafting/stick_iron' });
    // 移除配方 immersiveengineering:crafting/rs_engineering
    event.remove({ id: 'immersiveengineering:crafting/rs_engineering' });
    // 移除配方 immersiveengineering:crafting/light_engineering
    event.remove({ id: 'immersiveengineering:crafting/light_engineering' });
    // 移除配方 immersiveengineering:crafting/heavy_engineering
    event.remove({ id: 'immersiveengineering:crafting/heavy_engineering' });
    // 移除配方 immersiveengineering:crafting/resonanz_engineering
    event.remove({ id: 'immersiveengineering:crafting/resonanz_engineering' });
    event.remove({ id: 'immersiveengineering:crafting/thermoelectric_generator' });
    // 移除配方 immersiveengineering:crafting/resonanz_engineering
    event.remove({ id: 'alltheores:alloysmelter/invar/ingot' });
    event.remove({ id: 'alltheores:arcfurnace/invar/ingot' });
    event.remove({ id: 'alltheores:crafting/invar/alloy_blending_from_dust' });
});
