// appflux/removes.js
// ─────────────────────────────────────────────────────────
// 移除 appflux 能量电路板 / 处理器
// 替代方案见 skynh/processors_sequenced_assembly.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'appflux:inscriber/energy_print' });
    event.remove({ id: 'appflux:inscriber/energy' });
    event.remove({ id: 'appflux:charger/charge_redstone' });
});
