// server_scripts/mysticalagriculture/tier_removes.js
ServerEvents.recipes(event => {
    // 移除配方 mysticalagriculture:neutronium_seeds
    event.remove({ id: 'mysticalagriculture:neutronium_seeds' });
    // 移除配方 mysticalagriculture:neutronium_essence
    event.remove({ id: 'mysticalagriculture:neutronium_essence' });
    // 移除配方 mysticalagriculture:awakened_draconium_seeds
    event.remove({ id: 'mysticalagriculture:awakened_draconium_seeds' });
    // 移除配方 mysticalagriculture:awakened_draconium_essence
    event.remove({ id: 'mysticalagriculture:awakened_draconium_essence' });
    // 移除配方 mysticalagriculture:dragon_egg_seeds
    event.remove({ id: 'mysticalagriculture:dragon_egg_seeds' });
    // 移除配方 mysticalagriculture:dragon_egg_essence
    event.remove({ id: 'mysticalagriculture:dragon_egg_essence' });
});
