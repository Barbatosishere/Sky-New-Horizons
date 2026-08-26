// mekanism_extras/control_circuits_advanced.js
// ─────────────────────────────────────────────────────────
// 高阶级（mekanism_extras:absolute/supreme/cosmic/infinite）控制电路
//   - 移除原版冶金灌注
//   - 用 Extended Crafting shaped_table 重新实现
// 配合 ../mekanism/control_circuits.js 使用
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // -------- 移除原版冶金灌注/控制电路配方 --------
    event.remove({ id: 'mekanism_extras:control_circuit/infused_absolute' });
    event.remove({ id: 'mekanism_extras:control_circuit/absolute' });
    event.remove({ id: 'mekanism_extras:control_circuit/infused_supreme' });
    event.remove({ id: 'mekanism_extras:control_circuit/supreme' });
    event.remove({ id: 'mekanism_extras:control_circuit/infused_cosmic' });
    event.remove({ id: 'mekanism_extras:control_circuit/cosmic' });
    event.remove({ id: 'mekanism_extras:control_circuit/infused_infinite' });
    event.remove({ id: 'mekanism_extras:control_circuit/infinite' });
    event.remove({ id: 'mekanism_extras:chemical_conversion/radiance/from_dust' });

    // -------- 绝对控制电路 --------
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

    // -------- 至尊控制电路 --------
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

    // -------- 寰宇支配电路 --------
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

    // -------- 悖论无限电路 --------
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
