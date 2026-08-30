// server_scripts/minecraft/utility.js
ServerEvents.recipes(event => {
    // 黏土块 → 4× 黏土球
    event.shaped(Item.of('minecraft:clay_ball', 4), [
        '#'
    ], {
        '#': 'minecraft:clay'
    });

    // 任意原木 → 4× 箱子
    event.shaped(Item.of('minecraft:chest', 4), [
        '###',
        '# #',
        '###'
    ], {
        '#': '#minecraft:logs'
    });

    // 任意木板 → 1× 箱子
    event.shaped('minecraft:chest', [
        '###',
        '# #',
        '###'
    ], {
        '#': '#minecraft:planks'
    });
});
