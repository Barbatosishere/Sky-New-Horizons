// server_scripts/mekanism/control_circuits.js
ServerEvents.recipes(event => {

    // 移除配方 mekanism:metallurgic_infusing/alloy/infused
    event.remove({ id: 'mekanism:metallurgic_infusing/alloy/infused' });
    // 移除配方 mekanism:metallurgic_infusing/alloy/reinforced
    event.remove({ id: 'mekanism:metallurgic_infusing/alloy/reinforced' });
    // 移除配方 mekanism:control_circuit/basic
    event.remove({ id: 'mekanism:control_circuit/basic' });
    // 移除配方 mekanism:control_circuit/infused_advanced
    event.remove({ id: 'mekanism:control_circuit/infused_advanced' });
    // 移除配方 mekanism:control_circuit/advanced
    event.remove({ id: 'mekanism:control_circuit/advanced' });
    // 移除配方 mekanism:control_circuit/infused_elite
    event.remove({ id: 'mekanism:control_circuit/infused_elite' });
    // 移除配方 mekanism:control_circuit/elite
    event.remove({ id: 'mekanism:control_circuit/elite' });
    // 移除配方 mekanism:control_circuit/infused_ultimate
    event.remove({ id: 'mekanism:control_circuit/infused_ultimate' });
    // 移除配方 mekanism:control_circuit/ultimate
    event.remove({ id: 'mekanism:control_circuit/ultimate' });

    // mekanism:basic_control_circuit → create:electron_tube  [extendedcrafting.shaped_table]
    event.recipes.extendedcrafting.shaped_table('mekanism:basic_control_circuit', [
        'ABA',
        'DED',
        'QWQ',
    ], {
        A: 'create:electron_tube',
        B: 'create:whisk',
        D: 'create:brass_hand',
        E: 'create:precision_mechanism',
        Q: 'create:transmitter',
        W: 'create:propeller'
    });

    // mekanism:advanced_control_circuit → mekanism:alloy_infused  [extendedcrafting.shaped_table]
    event.recipes.extendedcrafting.shaped_table('mekanism:advanced_control_circuit', [
        'CCCCC',
        'CDDDC',
        'CDEDC',
        'CDDDC',
        'CCCCC'
    ], {
        C: 'mekanism:alloy_infused',
        D: 'mekanism:basic_control_circuit',
        E: 'minecraft:redstone_block'
    });

    // mekanism:elite_control_circuit → mekanism:alloy_reinforced  [extendedcrafting.shaped_table]
    event.recipes.extendedcrafting.shaped_table('mekanism:elite_control_circuit', [
        'CCCCC',
        'CDDDC',
        'CDEDC',
        'CDDDC',
        'CCCCC'
    ], {
        C: 'mekanism:alloy_reinforced',
        D: 'mekanism:advanced_control_circuit',
        E: 'minecraft:redstone_block'
    });

    // mekanism:ultimate_control_circuit → mekanism:alloy_atomic  [extendedcrafting.shaped_table]
    event.recipes.extendedcrafting.shaped_table('mekanism:ultimate_control_circuit', [
        'CCCCC',
        'CDDDC',
        'CDEDC',
        'CDDDC',
        'CCCCC'
    ], {
        C: 'mekanism:alloy_atomic',
        D: 'mekanism:elite_control_circuit',
        E: 'minecraft:redstone_block'
    });
});
