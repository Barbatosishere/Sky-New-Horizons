// mekanism/control_circuits.js
// ─────────────────────────────────────────────────────────
// 控制电路配方：移除原版冶金灌注配方 + 重新用 Extended Crafting
// shaped_table 配方实现（mekanism:*_control_circuit）。
// 同样的 control_circuit 还有 mekanism_extras:absolute/supreme/cosmic/infinite，
// 详见 ../mekanism_extras/control_circuits_advanced.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // -------- 移除原版冶金灌注/控制电路配方 --------
    event.remove({ id: 'mekanism:metallurgic_infusing/alloy/infused' });
    event.remove({ id: 'mekanism:metallurgic_infusing/alloy/reinforced' });
    event.remove({ id: 'mekanism:control_circuit/basic' });
    event.remove({ id: 'mekanism:control_circuit/infused_advanced' });
    event.remove({ id: 'mekanism:control_circuit/advanced' });
    event.remove({ id: 'mekanism:control_circuit/infused_elite' });
    event.remove({ id: 'mekanism:control_circuit/elite' });
    event.remove({ id: 'mekanism:control_circuit/infused_ultimate' });
    event.remove({ id: 'mekanism:control_circuit/ultimate' });

    // -------- 基础控制电路 --------
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

    // -------- 高级控制电路 --------
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

    // -------- 精英控制电路 --------
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

    // -------- 终极控制电路 --------
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
