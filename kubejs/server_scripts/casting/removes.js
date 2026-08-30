// server_scripts/casting/removes.js
ServerEvents.recipes(event => {
    // 移除配方 casting:mixer/conductive_alloy
    event.remove({ id: 'casting:mixer/conductive_alloy' });
    // 移除配方 casting:mixer/brass
    event.remove({ id: 'casting:mixer/brass' });
    // 移除配方 casting:mixer/vibrant_alloy
    event.remove({ id: 'casting:mixer/vibrant_alloy' });
    // 移除配方 casting:mixer/pulsating_alloy
    event.remove({ id: 'casting:mixer/pulsating_alloy' });
    // 移除配方 casting:mixer/energetic_alloy
    event.remove({ id: 'casting:mixer/energetic_alloy' });
    // 移除配方 casting:mixer/enderium
    event.remove({ id: 'casting:mixer/enderium' });
    // 移除配方 casting:mixer/signalum
    event.remove({ id: 'casting:mixer/signalum' });
});
