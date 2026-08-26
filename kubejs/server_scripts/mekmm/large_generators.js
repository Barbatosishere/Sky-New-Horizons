// mekmm/large_generators.js
// ─────────────────────────────────────────────────────────
// 移除 mekmm 自带的 2 个大型发电机
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'mekmm:large_gas_burning_generator' });
    event.remove({ id: 'mekmm:large_heat_generator' });
});
