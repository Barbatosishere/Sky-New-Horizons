// server_scripts/extendedae/removes.js
ServerEvents.recipes(event => {
    // 移除配方 extendedae:inscriber/concurrent_print
    event.remove({ id: 'extendedae:inscriber/concurrent_print' });
    // 移除配方 extendedae:inscriber/concurrent_process
    event.remove({ id: 'extendedae:inscriber/concurrent_process' });
    // 移除配方 extendedae:entro_seed
    event.remove({ id: 'extendedae:entro_seed' });
    // 移除配方 extendedae:water_cell
    event.remove({ id: 'extendedae:water_cell' });
    // 移除配方 extendedae:cobblestone_cell
    event.remove({ id: 'extendedae:cobblestone_cell' });
    // 移除配方 extendedae:fishbig
    event.remove({ id: 'extendedae:fishbig' });
});
