// ae2lt/removes.js
// ─────────────────────────────────────────────────────────
// 移除 ae2lt 过载处理器 / 过载电路板
// 替代方案见 skynh/processors_sequenced_assembly.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'ae2lt:inscriber/overload_processor' });
    event.remove({ id: 'ae2lt:inscriber/overload_circuit_board' });
});
