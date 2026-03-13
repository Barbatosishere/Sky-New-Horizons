// 监听服务器配方加载事件
ServerEvents.recipes(event => {
    // 移除富集红石的氧化和灌注转化配方
    event.remove({ id: 'mekanism:chemical_conversion/redstone/from_enriched' });
    event.remove({ id: 'mekanism:oxidizing/redstone/from_enriched' });
    // 移除富集钻石的氧化和灌注转化配方
    event.remove({ id: 'mekanism:chemical_conversion/diamond/from_enriched' });
    event.remove({ id: 'mekanism:oxidizing/diamond/from_enriched' });
    // 移除钻石的氧化和灌注转化配方
    event.remove({ id: 'mekanism:chemical_conversion/diamond/from_dust' });
    event.remove({ id: 'mekanism:oxidizing/diamond/from_dust' });
    // 移除富集强化黑曜石的氧化和灌注转化配方
    event.remove({ id: 'mekanism:chemical_conversion/refined_obsidian/from_enriched' });
    event.remove({ id: 'mekanism:oxidizing/refined_obsidian/from_enriched' });
    // 移除反物质球相关配方
    event.remove({ id: 'mekanism:processing/lategame/antimatter_pellet/from_gas' });
    event.remove({ id: 'mekanism:processing/lategame/antimatter/from_pellet' });
     // 移除原钚球配方
    event.remove({ output: 'mekanism:pellet_plutonium' });
     // 移除原钚球配方
    event.remove({ output: 'mekanism:pellet_polonium' });


    // 冶金灌注机配方：粉碎黑曜石 + 钻石 → 强化黑曜石粉
    event.recipes.mekanism.metallurgic_infusing({
        output: { id: 'mekanism:dust_refined_obsidian' },
        item_input: { item: 'create:powdered_obsidian' },
        chemical_input: { chemical: 'mekanism:diamond', amount: 30 }
    });

    // 冶金灌注机配方：雷顿水晶 + 红石 → 灌注合金
    event.recipes.mekanism.metallurgic_infusing({
        output: { id: 'mekanism:alloy_infused' },
        item_input: { item: 'actuallyadditions:restonia_crystal' },
        chemical_input: { chemical: 'mekanism:redstone', amount: 90 }
    });

    // 冶金灌注机配方：灌注合金 + 钻石 → 强化合金
    event.recipes.mekanism.metallurgic_infusing({
        output: { id: 'mekanism:alloy_reinforced' },
        item_input: { item: 'mekanism:alloy_infused' },
        chemical_input: { chemical: 'mekanism:diamond', amount: 30 }
    });

    // 化学氧化机配方：钻石水晶 → 钻石气体
    event.recipes.mekanism.oxidizing({
        input: { item: 'actuallyadditions:diamatine_crystal' },
        output: { id: 'mekanism:diamond', amount: 10 }
    });

    // 新配方：气体 → 球（化学结晶器）
    event.custom({
        type: 'mekanism:crystallizing',
        input: { chemical: 'mekanism:antimatter', amount: 100 },
        output: { id: 'mekanism:pellet_antimatter' }
    });
    // 添加新配方：1000 mB 水 + 100 mB 钚 + 氟石粉→ 1 钚球 + 1000 mB 核废料
    event.recipes.mekanism.reaction({
        fluid_input: { amount: 1000, fluid: 'minecraft:water' },
        chemical_input: { amount: 100, chemical: 'mekanism:plutonium' },
        item_input: { item: 'mekanism:dust_fluorite' },
        item_output: { id: 'mekanism:pellet_plutonium' },
        chemical_output: { id: 'mekanism:spent_nuclear_waste', amount: 1000 },
        duration: 200,
        energy_required: 100000
    });
    // 添加新配方：1000 mB 水 + 100 mB 钋 + 氟石粉 → 1 钋球 + 1000 mB 核废料
    event.recipes.mekanism.reaction({
        fluid_input: { amount: 1000, fluid: 'minecraft:water' },
        chemical_input: { amount: 100, chemical: 'mekanism:polonium' },
        item_input: { item: 'mekanism:dust_fluorite' },
        item_output: { id: 'mekanism:pellet_polonium' },
        chemical_output: { id: 'mekanism:spent_nuclear_waste', amount: 1000 },
        duration: 200,
        energy_required: 100000
    });
    // 添加新配方：100 mB 金 + 4 mB 反物质 → 1 基础控制电路 + 600 mB 水蒸汽
    event.recipes.mekanism.reaction({
        fluid_input: { amount: 640, fluid: 'kubejs:liquid_gold' },
        chemical_input: { amount: 4, chemical: 'mekanism:antimatter' },
        item_input: { item: 'immersiveengineering:ingot_steel' },
        item_output: { id: 'mekanism:basic_control_circuit' },
        chemical_output: { id: 'mekanism:water_vapor', amount: 600 },
        duration: 200,
        energy_required: 10000
    });
    // 添加新配方：640 mB 红石 + 8 mB 反物质 → 1 高级控制电路 + 600 mB 水蒸汽
    event.recipes.mekanism.reaction({
        fluid_input: { amount: 640, fluid: 'kubejs:liquid_redstone' },
        chemical_input: { amount: 8, chemical: 'mekanism:antimatter' },
        item_input: { item: 'mekanism:basic_control_circuit' },
        item_output: { id: 'mekanism:advanced_control_circuit' },
        chemical_output: { id: 'mekanism:water_vapor', amount: 600 },
        duration: 200,
        energy_required: 100000
    });
    // 添加新配方：640 mB 钻石 + 16 mB 反物质 → 精英控制电路 + 600 mB 水蒸汽
     event.recipes.mekanism.reaction({
        fluid_input: { amount: 640, fluid: 'kubejs:liquid_diamond' },
        chemical_input: { amount: 16, chemical: 'mekanism:antimatter' },
        item_input: { item: 'mekanism:advanced_control_circuit' },
        item_output: { id: 'mekanism:elite_control_circuit' },
        chemical_output: { id: 'mekanism:water_vapor', amount: 600 },
        duration: 200,
        energy_required: 1000000
    });
    // 添加新配方：640 mB 强化黑曜石 + 32 mB 反物质 → 1 终极控制电路 + 600 mB 水蒸汽
    event.recipes.mekanism.reaction({
        fluid_input: { amount: 640, fluid: 'kubejs:liquid_refined_obsidian' },
        chemical_input: { amount: 32, chemical: 'mekanism:antimatter' },
        item_input: { item: 'mekanism:elite_control_circuit' },
        item_output: { id: 'mekanism:ultimate_control_circuit' },
        chemical_output: { id: 'mekanism:water_vapor', amount: 600 },
        duration: 200,
        energy_required: 10000000
    });

    
   // 旋转式气液转换机 (Rotary Condensentrator) 配方 - 使用 event.custom 和驼峰字段名

// 冷凝模式: 气体 -> 液体 (condensentrating)
// 解冷凝模式: 液体 -> 气体 (decondensentrating)

// 液态金 (kubejs:liquid_gold) <-> 金气体 (mekanism:gold)
event.custom({
    type: 'mekanism:rotary',
    gasInput: { amount: 1, gas: 'mekanism:gold' },
    fluidOutput: { amount: 1, fluid: 'kubejs:liquid_gold' },
    mode: 'condensentrating'
});
event.custom({
    type: 'mekanism:rotary',
    fluidInput: { amount: 1, fluid: 'kubejs:liquid_gold' },
    gasOutput: { amount: 1, gas: 'mekanism:gold' },
    mode: 'decondensentrating'
});

// 液态红石 (kubejs:liquid_redstone) <-> 红石气体 (mekanism:redstone)
event.custom({
    type: 'mekanism:rotary',
    gasInput: { amount: 1, gas: 'mekanism:redstone' },
    fluidOutput: { amount: 1, fluid: 'kubejs:liquid_redstone' },
    mode: 'condensentrating'
});
event.custom({
    type: 'mekanism:rotary',
    fluidInput: { amount: 1, fluid: 'kubejs:liquid_redstone' },
    gasOutput: { amount: 1, gas: 'mekanism:redstone' },
    mode: 'decondensentrating'
});

// 液态钻石 (kubejs:liquid_diamond) <-> 钻石气体 (mekanism:diamond)
event.custom({
    type: 'mekanism:rotary',
    gasInput: { amount: 1, gas: 'mekanism:diamond' },
    fluidOutput: { amount: 1, fluid: 'kubejs:liquid_diamond' },
    mode: 'condensentrating'
});
event.custom({
    type: 'mekanism:rotary',
    fluidInput: { amount: 1, fluid: 'kubejs:liquid_diamond' },
    gasOutput: { amount: 1, gas: 'mekanism:diamond' },
    mode: 'decondensentrating'
});

// 液态强化黑曜石 (kubejs:liquid_refined_obsidian) <-> 强化黑曜石气体 (mekanism:refined_obsidian)
event.custom({
    type: 'mekanism:rotary',
    gasInput: { amount: 1, gas: 'mekanism:refined_obsidian' },
    fluidOutput: { amount: 1, fluid: 'kubejs:liquid_refined_obsidian' },
    mode: 'condensentrating'
});
event.custom({
    type: 'mekanism:rotary',
    fluidInput: { amount: 1, fluid: 'kubejs:liquid_refined_obsidian' },
    gasOutput: { amount: 1, gas: 'mekanism:refined_obsidian' },
    mode: 'decondensentrating'
});

// 反物质流体 (kubejs:antimatter) <-> 反物质气体 (mekanism:antimatter)
event.custom({
    type: 'mekanism:rotary',
    gasInput: { amount: 1, gas: 'mekanism:antimatter' },
    fluidOutput: { amount: 1, fluid: 'kubejs:antimatter' },
    mode: 'condensentrating'
});
event.custom({
    type: 'mekanism:rotary',
    fluidInput: { amount: 1, fluid: 'kubejs:antimatter' },
    gasOutput: { amount: 1, gas: 'mekanism:antimatter' },
    mode: 'decondensentrating'
});
});