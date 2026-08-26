// mekanism/machines.js
// ─────────────────────────────────────────────────────────
// Mekanism 机器配方：
//   - 冶金灌注机（metallurgic_infuser） - 重新配方
//   - 融合机（combiner） - 重新配方
//   - 纸板箱（cardboard_box） - 简化配方
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // 移除原版冶金灌注机配方
    event.remove({ id: 'mekanism:metallurgic_infuser' });
    // 移除原版融合机配方
    event.remove({ id: 'mekanism:combiner' });

    // 冶金灌注机
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

    // 融合机
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

    // 纸板箱简化配方
    event.shaped('mekanism:cardboard_box', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'minecraft:paper'
    });
});
