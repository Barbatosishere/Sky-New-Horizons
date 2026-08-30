// server_scripts/cookingforblockheads/sink.js
ServerEvents.recipes(event => {
    // ae2:spatial_io_port → cookingforblockheads:sink
    event.shaped('cookingforblockheads:sink', [
        'DAD',
        'BCB',
        'BBB'
    ], {
        A: 'ae2:spatial_io_port',
        B: 'minecraft:terracotta',
        C: 'extendedae:infinity_water_cell',
        D: 'ae2:speed_card'
    });
});
