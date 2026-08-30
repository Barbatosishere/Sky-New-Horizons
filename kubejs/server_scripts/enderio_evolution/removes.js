// server_scripts/enderio_evolution/removes.js
ServerEvents.recipes(event => {
    // 移除配方 enderio_evolution:simple_stirling_generator
    event.remove({ id: 'enderio_evolution:simple_stirling_generator' });
    // 移除配方 enderio_evolution:basic_infinity_generator
    event.remove({ id: 'enderio_evolution:basic_infinity_generator' });
    // 移除配方 enderio_evolution:crystalline_infinity_generator
    event.remove({ id: 'enderio_evolution:crystalline_infinity_generator' });
    // 移除配方 enderio_evolution:stellar_infinity_generator
    event.remove({ id: 'enderio_evolution:stellar_infinity_generator' });
});
