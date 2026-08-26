// draconicevolution/generator.js
// ─────────────────────────────────────────────────────────
// 移除 draconicevolution 自带的 generator
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'draconicevolution:generator' });
});
