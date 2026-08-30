// server_scripts/mekanism_extras/control_circuits_advanced.js
ServerEvents.recipes(event => {

    // 移除配方 mekanism_extras:control_circuit/infused_absolute
    event.remove({ id: 'mekanism_extras:control_circuit/infused_absolute' });
    // 移除配方 mekanism_extras:control_circuit/absolute
    event.remove({ id: 'mekanism_extras:control_circuit/absolute' });
    // 移除配方 mekanism_extras:control_circuit/infused_supreme
    event.remove({ id: 'mekanism_extras:control_circuit/infused_supreme' });
    // 移除配方 mekanism_extras:control_circuit/supreme
    event.remove({ id: 'mekanism_extras:control_circuit/supreme' });
    // 移除配方 mekanism_extras:control_circuit/infused_cosmic
    event.remove({ id: 'mekanism_extras:control_circuit/infused_cosmic' });
    // 移除配方 mekanism_extras:control_circuit/cosmic
    event.remove({ id: 'mekanism_extras:control_circuit/cosmic' });
    // 移除配方 mekanism_extras:control_circuit/infused_infinite
    event.remove({ id: 'mekanism_extras:control_circuit/infused_infinite' });
    // 移除配方 mekanism_extras:control_circuit/infinite
    event.remove({ id: 'mekanism_extras:control_circuit/infinite' });
    // 移除配方 mekanism_extras:chemical_conversion/radiance/from_dust
    event.remove({ id: 'mekanism_extras:chemical_conversion/radiance/from_dust' });

    // mekanism_extras:absolute_control_circuit → mekanism_extras:alloy_radiance  [extendedcrafting.shaped_table]
    event.recipes.extendedcrafting.shaped_table('mekanism_extras:absolute_control_circuit', [
        'CCCCC',
        'CDDDC',
        'CDEDC',
        'CDDDC',
        'CCCCC'
    ], {
        C: 'mekanism_extras:alloy_radiance',
        D: 'mekanism:ultimate_control_circuit',
        E: 'minecraft:redstone_block'
    });

    // mekanism_extras:supreme_control_circuit → mekanism_extras:alloy_thermonuclear  [extendedcrafting.shaped_table]
    event.recipes.extendedcrafting.shaped_table('mekanism_extras:supreme_control_circuit', [
        'CCCCC',
        'CDDDC',
        'CDEDC',
        'CDDDC',
        'CCCCC'
    ], {
        C: 'mekanism_extras:alloy_thermonuclear',
        D: 'mekanism_extras:absolute_control_circuit',
        E: 'minecraft:redstone_block'
    });

    // mekanism_extras:cosmic_control_circuit → mekanism_extras:alloy_shining  [extendedcrafting.shaped_table]
    event.recipes.extendedcrafting.shaped_table('mekanism_extras:cosmic_control_circuit', [
        'CCCCC',
        'CDDDC',
        'CDEDC',
        'CDDDC',
        'CCCCC'
    ], {
        C: 'mekanism_extras:alloy_shining',
        D: 'mekanism_extras:supreme_control_circuit',
        E: 'minecraft:redstone_block'
    });

    // mekanism_extras:infinite_control_circuit → mekanism_extras:alloy_spectrum  [extendedcrafting.shaped_table]
    event.recipes.extendedcrafting.shaped_table('mekanism_extras:infinite_control_circuit', [
        'CCCCC',
        'CDDDC',
        'CDEDC',
        'CDDDC',
        'CCCCC'
    ], {
        C: 'mekanism_extras:alloy_spectrum',
        D: 'mekanism_extras:cosmic_control_circuit',
        E: 'minecraft:redstone_block'
    });
});
