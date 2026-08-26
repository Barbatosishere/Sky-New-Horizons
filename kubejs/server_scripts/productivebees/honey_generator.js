// productivebees/honey_generator.js
// ─────────────────────────────────────────────────────────
// 移除 productivebees 自带的 honey_generator
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'productivebees:honey_generator' });
});
