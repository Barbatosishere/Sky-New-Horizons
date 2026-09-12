ServerEvents.recipes(event => {
    event.custom({
        type: 'extendedae:crystal_assembler',
        input_items: [
            { ingredient: { item: 'ae2lt:overload_processor' }, amount: 32 },
            { ingredient: { item: 'ae2lt:overload_alloy' }, amount: 32 },
            { ingredient: { item: 'ae2lt:overload_crystal_block' }, amount: 16 }
        ],
        output: { id: 'ae2lt:lightning_simulation_room' },
        time: 200,
        energy: 1000
    });
});