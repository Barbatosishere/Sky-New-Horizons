// server_scripts/megacells/removes.js
ServerEvents.recipes(event => {
    // 移除配方 megacells:inscriber/accumulation_processor_print
    event.remove({ id: 'megacells:inscriber/accumulation_processor_print' });
    // 移除配方 megacells:inscriber/accumulation_processor
    event.remove({ id: 'megacells:inscriber/accumulation_processor' });
});
