// server_scripts/actuallyadditions/removes.js
ServerEvents.recipes(event => {
    // 移除配方 actuallyadditions:oil_generator
    event.remove({ id: 'actuallyadditions:oil_generator' });
    // 移除配方 actuallyadditions:heat_collector
    event.remove({ id: 'actuallyadditions:heat_collector' });
    // 移除配方 actuallyadditions:coal_generator
    event.remove({ id: 'actuallyadditions:coal_generator' });
    // 移除配方 actuallyadditions:leaf_generator
    event.remove({ id: 'actuallyadditions:leaf_generator' });
});
