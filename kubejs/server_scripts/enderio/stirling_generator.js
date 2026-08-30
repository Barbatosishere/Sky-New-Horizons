// server_scripts/enderio/stirling_generator.js
ServerEvents.recipes(event => {
    // 移除配方 enderio:stirling_generator
    event.remove({ id: 'enderio:stirling_generator' });
});
