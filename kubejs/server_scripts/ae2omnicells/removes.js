// server_scripts/ae2omnicells/removes.js
ServerEvents.recipes(event => {
    // 移除配方 ae2omnicells:omni_link_circuit_print
    event.remove({ id: 'ae2omnicells:omni_link_circuit_print' });
    // 移除配方 ae2omnicells:complex_link_circuit_print
    event.remove({ id: 'ae2omnicells:complex_link_circuit_print' });
    // 移除配方 ae2omnicells:multidimensional_expansion_circuit_print
    event.remove({ id: 'ae2omnicells:multidimensional_expansion_circuit_print' });
    // 移除配方 ae2omnicells:omni_link_processor
    event.remove({ id: 'ae2omnicells:omni_link_processor' });
    // 移除配方 ae2omnicells:complex_link_processor
    event.remove({ id: 'ae2omnicells:complex_link_processor' });
    // 移除配方 ae2omnicells:multidimensional_expansion_processor
    event.remove({ id: 'ae2omnicells:multidimensional_expansion_processor' });
});
