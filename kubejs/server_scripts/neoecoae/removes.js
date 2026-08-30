// server_scripts/neoecoae/removes.js
ServerEvents.recipes(event => {
    // 移除配方 neoecoae:inscriber/superconducting_processor_print
    event.remove({ id: 'neoecoae:inscriber/superconducting_processor_print' });
    // 移除配方 neoecoae:inscriber/superconducting_processor
    event.remove({ id: 'neoecoae:inscriber/superconducting_processor' });
});
