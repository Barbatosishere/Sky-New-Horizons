// server_scripts/extendedcrafting/tables.js
ServerEvents.recipes(event => {
    // 移除配方 useless_mod:teleport_block
    event.remove({ output: 'useless_mod:teleport_block' });
    // 移除配方 useless_mod:teleport_block_2
    event.remove({ output: 'useless_mod:teleport_block_2' });
    // 移除配方 useless_mod:teleport_block_3
    event.remove({ output: 'useless_mod:teleport_block_3' });
});
