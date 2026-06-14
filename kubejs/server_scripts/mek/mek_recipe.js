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
    event.recipes.mekanism.oxidizing({
        input: { item: 'actuallyadditions:diamatine_crystal_block' },
        output: { id: 'mekanism:diamond', amount: 90 }
    });

    // 新配方：气体 → 球 → 气体（化学结晶器）
    event.custom({
        type: 'mekanism:crystallizing',
        input: { chemical: 'mekanism:antimatter', amount: 100 },
        output: { id: 'mekanism:pellet_antimatter' }
    });
    event.recipes.mekanism.oxidizing({
        input: { item: 'mekanism:pellet_antimatter' },
        output: { id: 'mekanism:antimatter', amount: 100 }
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
     // 添加新配方：1 龙蛋 → 16龙尘
     event.custom({
        "type": "mekanism:crushing",
        "input": {
            "item": "minecraft:dragon_egg"
        },
        "output": {
            "id": "draconicevolution:draconium_dust",
            "count": 16
        }
    });
    });