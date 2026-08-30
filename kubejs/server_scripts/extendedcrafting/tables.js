// server_scripts/extendedcrafting/tables.js
ServerEvents.recipes(event => {
    // 移除配方 extendedcrafting:basic_table
    event.remove({ id: 'extendedcrafting:basic_table' });
    // 移除配方 extendedcrafting:advanced_table
    event.remove({ id: 'extendedcrafting:advanced_table' });
    // 移除配方 extendedcrafting:elite_table
    event.remove({ id: 'extendedcrafting:elite_table' });
    // 移除配方 extendedcrafting:ultimate_table
    event.remove({ id: 'extendedcrafting:ultimate_table' });
});
