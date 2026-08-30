// server_scripts/ae2/removes.js
ServerEvents.recipes(event => {

    // 移除配方 ae2:inscriber/calculation_processor_print
    event.remove({ id: 'ae2:inscriber/calculation_processor_print' });
    // 移除配方 ae2:inscriber/engineering_processor_print
    event.remove({ id: 'ae2:inscriber/engineering_processor_print' });
    // 移除配方 ae2:inscriber/logic_processor_print
    event.remove({ id: 'ae2:inscriber/logic_processor_print' });
    // 移除配方 ae2:inscriber/silicon_print
    event.remove({ id: 'ae2:inscriber/silicon_print' });

    // 移除配方 ae2:inscriber/logic_processor
    event.remove({ id: 'ae2:inscriber/logic_processor' });
    // 移除配方 ae2:inscriber/calculation_processor
    event.remove({ id: 'ae2:inscriber/calculation_processor' });
    // 移除配方 ae2:inscriber/engineering_processor
    event.remove({ id: 'ae2:inscriber/engineering_processor' });

    // 移除配方 ae2:inscriber/calculation_processor_press
    event.remove({ id: 'ae2:inscriber/calculation_processor_press' });
    // 移除配方 ae2:inscriber/engineering_processor_press
    event.remove({ id: 'ae2:inscriber/engineering_processor_press' });
    // 移除配方 ae2:inscriber/logic_processor_press
    event.remove({ id: 'ae2:inscriber/logic_processor_press' });
    // 移除配方 ae2:inscriber/silicon_press
    event.remove({ id: 'ae2:inscriber/silicon_press' });
});
