// mekanismgenerators/generators_removes.js
// ─────────────────────────────────────────────────────────
// 移除 mekanismgenerators 自带的低阶发电机
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'mekanismgenerators:wind_generator' });
    event.remove({ id: 'mekanismgenerators:bio_generator' });
    event.remove({ id: 'mekanismgenerators:gas_burning_generator' });
    event.remove({ id: 'mekanismgenerators:heat_generator' });
    event.remove({ id: 'mekanismgenerators:module_geothermal_generator_unit' });
});
