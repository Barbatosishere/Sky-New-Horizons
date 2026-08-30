// server_scripts/advanced_ae/removes.js
ServerEvents.recipes(event => {
    // 移除配方 advanced_ae:quantum_processor_print
    event.remove({ id: 'advanced_ae:quantum_processor_print' });
    // 移除配方 advanced_ae:quantum_processor
    event.remove({ id: 'advanced_ae:quantum_processor' });
});
