// server_scripts/entangled/removes.js
ServerEvents.recipes(event => {
    // 移除配方 entangled:block
    event.remove({ id: 'entangled:block' });
});
