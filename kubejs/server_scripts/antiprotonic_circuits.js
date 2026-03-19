ServerEvents.recipes(event => {
    // 钢锭 + 5mb 反物质 → 基础控制电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:basic_control_circuit' },
        item_input: { item: 'mekanism:ingot_steel' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 5 },
        duration: 200
    });

    // 基础控制电路 + 15mb 反物质 → 高级控制电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:advanced_control_circuit' },
        item_input: { item: 'mekanism:basic_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 15 },
        duration: 400
    });

    // 高级控制电路 + 45mb 反物质 → 精英控制电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:elite_control_circuit' },
        item_input: { item: 'mekanism:advanced_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 45 },
        duration: 800
    });

    // 精英控制电路 + 135mb 反物质 → 终极控制电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:ultimate_control_circuit' },
        item_input: { item: 'mekanism:elite_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 135 },
        duration: 1600
    });
});