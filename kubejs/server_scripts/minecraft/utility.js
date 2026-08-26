// minecraft/utility.js
// ─────────────────────────────────────────────────────────
// Minecraft 基础物品合成：
//   - 黏土块 → 4× 黏土球
//   - 任意原木 → 4× 箱子
//   - 任意木板 → 1× 箱子
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // 黏土块 → 4 黏土球
    event.shaped(Item.of('minecraft:clay_ball', 4), [
        '#'
    ], {
        '#': 'minecraft:clay'
    });

    // 任意原木 → 4 箱子
    event.shaped(Item.of('minecraft:chest', 4), [
        '###',
        '# #',
        '###'
    ], {
        '#': '#minecraft:logs'
    });

    // 任意木板 → 1 箱子
    event.shaped('minecraft:chest', [
        '###',
        '# #',
        '###'
    ], {
        '#': '#minecraft:planks'
    });
});
