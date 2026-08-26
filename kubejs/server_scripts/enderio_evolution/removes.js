// enderio_evolution/removes.js
// ─────────────────────────────────────────────────────────
// 移除 enderio_evolution 自带的 4 个无限发电机
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'enderio_evolution:simple_stirling_generator' });
    event.remove({ id: 'enderio_evolution:basic_infinity_generator' });
    event.remove({ id: 'enderio_evolution:crystalline_infinity_generator' });
    event.remove({ id: 'enderio_evolution:stellar_infinity_generator' });
});
