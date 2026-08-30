// server_scripts/mekanism/misc.js
ServerEvents.recipes(event => {

    // 移除配方 mekanism:chemical_conversion/redstone/from_enriched
    event.remove({ id: 'mekanism:chemical_conversion/redstone/from_enriched' });
    // 移除配方 mekanism:oxidizing/redstone/from_enriched
    event.remove({ id: 'mekanism:oxidizing/redstone/from_enriched' });

    // 移除配方 mekanism:chemical_conversion/diamond/from_enriched
    event.remove({ id: 'mekanism:chemical_conversion/diamond/from_enriched' });
    // 移除配方 mekanism:oxidizing/diamond/from_enriched
    event.remove({ id: 'mekanism:oxidizing/diamond/from_enriched' });

    // 移除配方 mekanism:chemical_conversion/diamond/from_dust
    event.remove({ id: 'mekanism:chemical_conversion/diamond/from_dust' });
    // 移除配方 mekanism:oxidizing/diamond/from_dust
    event.remove({ id: 'mekanism:oxidizing/diamond/from_dust' });

    // 移除配方 mekanism:chemical_conversion/refined_obsidian/from_enriched
    event.remove({ id: 'mekanism:chemical_conversion/refined_obsidian/from_enriched' });
    // 移除配方 mekanism:oxidizing/refined_obsidian/from_enriched
    event.remove({ id: 'mekanism:oxidizing/refined_obsidian/from_enriched' });

    // 移除配方 mekanism:processing/lategame/antimatter_pellet/from_gas
    event.remove({ id: 'mekanism:processing/lategame/antimatter_pellet/from_gas' });
    // 移除配方 mekanism:processing/lategame/antimatter/from_pellet
    event.remove({ id: 'mekanism:processing/lategame/antimatter/from_pellet' });

    // 移除输出 mekanism:pellet_plutonium 的配方
    event.remove({ output: 'mekanism:pellet_plutonium' });

    // 移除输出 mekanism:pellet_polonium 的配方
    event.remove({ output: 'mekanism:pellet_polonium' });

    // mekanism:dust_refined_obsidian → create:powdered_obsidian  [mekanism.metallurgic_infusing]
    event.recipes.mekanism.metallurgic_infusing({
        output: { id: 'mekanism:dust_refined_obsidian' },
        item_input: { item: 'create:powdered_obsidian' },
        chemical_input: { chemical: 'mekanism:diamond', amount: 30 }
    });

    // mekanism:alloy_infused → actuallyadditions:restonia_crystal  [mekanism.metallurgic_infusing]
    event.recipes.mekanism.metallurgic_infusing({
        output: { id: 'mekanism:alloy_infused' },
        item_input: { item: 'actuallyadditions:restonia_crystal' },
        chemical_input: { chemical: 'mekanism:redstone', amount: 90 }
    });

    // mekanism:alloy_reinforced → mekanism:alloy_infused  [mekanism.metallurgic_infusing]
    event.recipes.mekanism.metallurgic_infusing({
        output: { id: 'mekanism:alloy_reinforced' },
        item_input: { item: 'mekanism:alloy_infused' },
        chemical_input: { chemical: 'mekanism:diamond', amount: 30 }
    });

    // actuallyadditions:diamatine_crystal → mekanism:diamond  [mekanism.oxidizing]
    event.recipes.mekanism.oxidizing({
        input: { item: 'actuallyadditions:diamatine_crystal' },
        output: { id: 'mekanism:diamond', amount: 10 }
    });
    // actuallyadditions:diamatine_crystal_block → mekanism:diamond  [mekanism.oxidizing]
    event.recipes.mekanism.oxidizing({
        input: { item: 'actuallyadditions:diamatine_crystal_block' },
        output: { id: 'mekanism:diamond', amount: 90 }
    });

    // ? → mekanism:pellet_antimatter  [crystallizing]
    event.custom({
        type: 'mekanism:crystallizing',
        input: { chemical: 'mekanism:antimatter', amount: 100 },
        output: { id: 'mekanism:pellet_antimatter' }
    });
    // mekanism:pellet_antimatter → mekanism:antimatter  [mekanism.oxidizing]
    event.recipes.mekanism.oxidizing({
        input: { item: 'mekanism:pellet_antimatter' },
        output: { id: 'mekanism:antimatter', amount: 100 }
    });

    // minecraft:water → mekanism:plutonium  [mekanism.reaction]
    event.recipes.mekanism.reaction({
        fluid_input: { amount: 1000, fluid: 'minecraft:water' },
        chemical_input: { amount: 100, chemical: 'mekanism:plutonium' },
        item_input: { item: 'mekanism:dust_fluorite' },
        item_output: { id: 'mekanism:pellet_plutonium' },
        chemical_output: { id: 'mekanism:spent_nuclear_waste', amount: 1000 },
        duration: 200,
        energy_required: 100000
    });

    // minecraft:water → mekanism:polonium  [mekanism.reaction]
    event.recipes.mekanism.reaction({
        fluid_input: { amount: 1000, fluid: 'minecraft:water' },
        chemical_input: { amount: 100, chemical: 'mekanism:polonium' },
        item_input: { item: 'mekanism:dust_fluorite' },
        item_output: { id: 'mekanism:pellet_polonium' },
        chemical_output: { id: 'mekanism:spent_nuclear_waste', amount: 1000 },
        duration: 200,
        energy_required: 100000
    });

    // ? → ?  [custom]
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
