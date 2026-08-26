// extendedcrafting/tables.js
// ─────────────────────────────────────────────────────────
// 移除 Extended Crafting 4 个工作台原版配方
// 配方在 ../create/mechanical_crafting.js 中用 mechanical_crafting 重新实现
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'extendedcrafting:basic_table' });
    event.remove({ id: 'extendedcrafting:advanced_table' });
    event.remove({ id: 'extendedcrafting:elite_table' });
    event.remove({ id: 'extendedcrafting:ultimate_table' });
});
