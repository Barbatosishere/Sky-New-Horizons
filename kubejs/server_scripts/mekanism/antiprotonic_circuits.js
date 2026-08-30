// server_scripts/mekanism/antiprotonic_circuits.js
ServerEvents.recipes(event => {

    // mekanism:basic_control_circuit → immersiveengineering:ingot_steel  [mekanism.nucleosynthesizing]
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:basic_control_circuit' },
        item_input: { item: 'immersiveengineering:ingot_steel'  },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 1 },
        duration: 200
    });

    // mekanism:advanced_control_circuit → mekanism:basic_control_circuit  [mekanism.nucleosynthesizing]
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:advanced_control_circuit' },
        item_input: { item: 'mekanism:basic_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 3 },
        duration: 400
    });

    // mekanism:elite_control_circuit → mekanism:advanced_control_circuit  [mekanism.nucleosynthesizing]
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:elite_control_circuit' },
        item_input: { item: 'mekanism:advanced_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 9 },
        duration: 600
    });

    // mekanism:ultimate_control_circuit → mekanism:elite_control_circuit  [mekanism.nucleosynthesizing]
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:ultimate_control_circuit' },
        item_input: { item: 'mekanism:elite_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 27 },
        duration: 800
    });

    // mekanism_extras:absolute_control_circuit → mekanism:ultimate_control_circuit  [mekanism.nucleosynthesizing]
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism_extras:absolute_control_circuit' },
        item_input: { item: 'mekanism:ultimate_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 81 },
        duration: 1000
    });

    // mekanism_extras:supreme_control_circuit → mekanism_extras:absolute_control_circuit  [mekanism.nucleosynthesizing]
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism_extras:supreme_control_circuit' },
        item_input: { item: 'mekanism_extras:absolute_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 243 },
        duration: 1200
    });

    // mekanism_extras:cosmic_control_circuit → mekanism_extras:supreme_control_circuit  [mekanism.nucleosynthesizing]
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism_extras:cosmic_control_circuit' },
        item_input: { item: 'mekanism_extras:supreme_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 729 },
        duration: 1600
    });

    // mekanism_extras:infinite_control_circuit → mekanism_extras:cosmic_control_circuit  [mekanism.nucleosynthesizing]
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism_extras:infinite_control_circuit' },
        item_input: { item: 'mekanism_extras:cosmic_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 2187 },
        duration: 1800
    });
});
