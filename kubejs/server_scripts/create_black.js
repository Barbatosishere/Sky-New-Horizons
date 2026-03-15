// 黑铁锭与焦黑石英的自动化配方（无需自定义物品）
ServerEvents.recipes(event => {
    const { create } = event.recipes;
    const blackDye = 'minecraft:black_dye';

    // ---------- 黑铁锭：三次部署黑色染料 + 冲压铁块 ----------
    create.sequenced_assembly(
        'extendedcrafting:black_iron_ingot',   // 最终产物
        'minecraft:iron_block',                 // 原料
        [
            create.deploying('minecraft:iron_block', ['minecraft:iron_block', blackDye]),
            create.pressing('minecraft:iron_block', 'minecraft:iron_block')
        ]
    )
    .transitionalItem('minecraft:iron_block')   // 中间物品直接用铁块
    .loops(3);

    // ---------- 焦黑石英：三次部署黑色染料 + 冲压石英 ----------
    create.sequenced_assembly(
        'actuallyadditions:black_quartz',
        'minecraft:quartz',
        [
            create.deploying('minecraft:quartz', ['minecraft:quartz', blackDye]),
            create.pressing('minecraft:quartz', 'minecraft:quartz')
        ]
    )
    .transitionalItem('minecraft:quartz')
    .loops(3);
});