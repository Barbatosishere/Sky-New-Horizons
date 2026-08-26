// ae2omnicells/removes.js
// ─────────────────────────────────────────────────────────
// 移除 ae2omnicells 印刷件 / 处理器
// 替代方案见 skynh/processors_sequenced_assembly.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'ae2omnicells:omni_link_circuit_print' });
    event.remove({ id: 'ae2omnicells:complex_link_circuit_print' });
    event.remove({ id: 'ae2omnicells:multidimensional_expansion_circuit_print' });
    event.remove({ id: 'ae2omnicells:omni_link_processor' });
    event.remove({ id: 'ae2omnicells:complex_link_processor' });
    event.remove({ id: 'ae2omnicells:multidimensional_expansion_processor' });
});
