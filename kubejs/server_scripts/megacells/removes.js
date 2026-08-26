// megacells/removes.js
// ─────────────────────────────────────────────────────────
// 移除 megacells 累积处理器
// 替代方案见 skynh/processors_sequenced_assembly.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'megacells:inscriber/accumulation_processor_print' });
    event.remove({ id: 'megacells:inscriber/accumulation_processor' });
});
