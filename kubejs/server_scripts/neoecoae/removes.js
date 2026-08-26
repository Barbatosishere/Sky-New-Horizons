// neoecoae/removes.js
// ─────────────────────────────────────────────────────────
// 移除 neoecoae 超导电路板/处理器、集成工作站
// 替代方案：超导 → skynh/processors_sequenced_assembly.js
//           工作站 → neoecoae/integrated_working_station.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:inscriber/superconducting_processor_print' });
    event.remove({ id: 'neoecoae:inscriber/superconducting_processor' });
    event.remove({ id: 'neoecoae:integrated_working_station' });
});
