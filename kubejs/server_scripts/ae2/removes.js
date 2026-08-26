// ae2/removes.js
// ─────────────────────────────────────────────────────────
// 移除原版 AE2 印刷件 / 处理器 / 压印模板配方
// 替代方案见 skynh/processors_sequenced_assembly.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // 印刷件
    event.remove({ id: 'ae2:inscriber/calculation_processor_print' });
    event.remove({ id: 'ae2:inscriber/engineering_processor_print' });
    event.remove({ id: 'ae2:inscriber/logic_processor_print' });
    event.remove({ id: 'ae2:inscriber/silicon_print' });

    // 处理器
    event.remove({ id: 'ae2:inscriber/logic_processor' });
    event.remove({ id: 'ae2:inscriber/calculation_processor' });
    event.remove({ id: 'ae2:inscriber/engineering_processor' });

    // 压印模板
    event.remove({ id: 'ae2:inscriber/calculation_processor_press' });
    event.remove({ id: 'ae2:inscriber/engineering_processor_press' });
    event.remove({ id: 'ae2:inscriber/logic_processor_press' });
    event.remove({ id: 'ae2:inscriber/silicon_press' });
});
