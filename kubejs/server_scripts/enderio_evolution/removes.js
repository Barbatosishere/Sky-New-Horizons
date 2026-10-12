// server_scripts/enderio_evolution/removes.js
ServerEvents.recipes(event => {
    event.remove({ id: 'enderio_evolution:machine/simple_stirling_generator' });
    event.remove({ id: 'enderio_evolution:machine/basic_infinity_generator' });
    event.remove({ id: 'enderio_evolution:machine/crystalline_infinity_generator' });
    event.remove({ id: 'enderio_evolution:machine/stellar_infinity_generator' });
});
