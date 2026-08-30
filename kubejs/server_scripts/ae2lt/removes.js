// server_scripts/ae2lt/removes.js
ServerEvents.recipes(event => {
    // 移除配方 ae2lt:inscriber/overload_processor
    event.remove({ id: 'ae2lt:inscriber/overload_processor' });
    // 移除配方 ae2lt:inscriber/overload_circuit_board
    event.remove({ id: 'ae2lt:inscriber/overload_circuit_board' });
});
