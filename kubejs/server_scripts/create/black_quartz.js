// server_scripts/create/black_quartz.js
ServerEvents.recipes(event => {
    const { create } = event.recipes;
    const blackDye = 'minecraft:black_dye';

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
