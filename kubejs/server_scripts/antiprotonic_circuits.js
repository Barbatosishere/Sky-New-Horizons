ServerEvents.recipes(event => {
    // 钢锭 + 反物质 → 基础控制电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:basic_control_circuit' },
        item_input: { item: 'mekanism:ingot_steel' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 1 },
        duration: 200
    });

    // 基础控制电路 + 反物质 → 高级控制电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:advanced_control_circuit' },
        item_input: { item: 'mekanism:basic_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 3 },
        duration: 400
    });

    // 高级控制电路 + 反物质 → 精英控制电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:elite_control_circuit' },
        item_input: { item: 'mekanism:advanced_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 9 },
        duration: 600
    });

    // 精英控制电路 + 反物质 → 终极控制电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism:ultimate_control_circuit' },
        item_input: { item: 'mekanism:elite_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 27 },
        duration: 800
    });

    // 终极控制电路 + 反物质 → 绝对控制电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism_extras:absolute_control_circuit' },
        item_input: { item: 'mekanism:ultimate_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 81 },
        duration: 1000
    });

    // 绝对控制电路 + 反物质 → 至尊控制电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism_extras:supreme_control_circuit' },
        item_input: { item: 'mekanism_extras:absolute_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 243 },
        duration: 1200
    });

    // 至尊控制电路 + 反物质 → 寰宇支配电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism_extras:cosmic_control_circuit' },
        item_input: { item: 'mekanism_extras:supreme_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 729 },
        duration: 1600
    });

    // 寰宇支配电路 + 反物质 → 悖论无限电路
    event.recipes.mekanism.nucleosynthesizing({
        output: { id: 'mekanism_extras:infinite_control_circuit' },
        item_input: { item: 'mekanism_extras:cosmic_control_circuit' },
        chemical_input: { chemical: 'mekanism:antimatter', amount: 2187 },
        duration: 1800
    });
});