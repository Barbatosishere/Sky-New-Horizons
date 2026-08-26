// enderio/stirling_generator.js
// ─────────────────────────────────────────────────────────
// 移除 enderio 自带的 stirling_generator
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'enderio:stirling_generator' });
});
