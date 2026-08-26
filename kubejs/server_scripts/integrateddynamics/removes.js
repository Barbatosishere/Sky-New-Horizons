// integrateddynamics/removes.js
// ─────────────────────────────────────────────────────────
// 移除 integrateddynamics 自带的 coal_generator
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'integrateddynamics:coal_generator' });
});
