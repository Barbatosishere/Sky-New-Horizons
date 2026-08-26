// minecraft/hopper.js
// ─────────────────────────────────────────────────────────
// 漏斗（minecraft:hopper）合成配方
// 移除原版 + 用 woodenhopper 替代
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:hopper' });

    event.shaped('minecraft:hopper', [
        'A A',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:iron_ingot',
        B: 'woodenhopper:wooden_hopper'
    });
});
