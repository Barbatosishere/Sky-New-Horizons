// server_scripts/mekanism/machines.js
ServerEvents.recipes(event => {

    // 移除配方 mekanism:metallurgic_infuser
    event.remove({ id: 'mekanism:metallurgic_infuser' });

    // 移除配方 mekanism:combiner
    event.remove({ id: 'mekanism:combiner' });

    // minecraft:iron_ingot → mekanism:metallurgic_infuser
    event.shaped('mekanism:metallurgic_infuser', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:furnace',
        C: 'minecraft:redstone',
        D: 'mekanism:steel_casing'
    });

    // mekanism:alloy_atomic → mekanism:combiner
    event.shaped('mekanism:combiner', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:alloy_atomic',
        B: 'mekanism:ultimate_control_circuit',
        C: 'minecraft:piston',
        D: 'mekanism:steel_casing'
    });

    // minecraft:paper → mekanism:cardboard_box
    event.shaped('mekanism:cardboard_box', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'minecraft:paper'
    });
});
