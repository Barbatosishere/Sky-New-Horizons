// advanced_ae/removes.js
// ─────────────────────────────────────────────────────────
// 移除 advanced_ae 量子处理器
// 替代方案见 skynh/processors_sequenced_assembly.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'advanced_ae:quantum_processor_print' });
    event.remove({ id: 'advanced_ae:quantum_processor' });
});
