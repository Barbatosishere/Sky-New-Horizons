// server_scripts/extendedae/infinity_cells.js
ServerEvents.recipes(event => {

    // minecraft:water_bucket → extendedae:infinity_cobblestone_cell
    event.shaped('extendedae:infinity_cobblestone_cell', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        B: 'minecraft:water_bucket',
        C: 'minecraft:lava_bucket',
        A: 'ae2:cell_component_256k',
        D: 'ae2omnicells:multidimensional_expansion_processor'
    });

    // functionalstorage:water_generator_upgrade → extendedae:infinity_water_cell
    event.shaped('extendedae:infinity_water_cell', [
        'DAD',
        'BCB',
        'DAD'
    ], {
        B: 'functionalstorage:water_generator_upgrade',
        A: 'ae2:cell_component_256k',
        C: 'functionalstorage:fluid_1',
        D: 'ae2omnicells:multidimensional_expansion_processor'
    });
});
