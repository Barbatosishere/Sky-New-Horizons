// server_scripts/createnuclear/removes.js
ServerEvents.recipes(event => {
    // 移除配方 createnuclear:mixing/steel
    event.remove({ id: 'createnuclear:mixing/steel' });
});
