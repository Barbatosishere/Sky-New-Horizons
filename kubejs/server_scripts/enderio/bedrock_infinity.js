// server_scripts/enderio/bedrock_infinity.js
ServerEvents.recipes(event => {
    // 移除类型 enderio:fire_crafting 的全部配方
    event.remove({ type: 'enderio:fire_crafting' });
    // ? → enderio:grains_of_infinity  [fire_crafting]
    event.custom({
        type: 'enderio:fire_crafting',
        base_blocks: ['minecraft:bedrock'],
        dimensions: [
            'minecraft:overworld',
            'minecraft:the_nether',
            'minecraft:the_end'
        ],
        results: [
            {
                chance: 0.8,
                min_count: 1,
                max_count: 3,
                result: {
                    id: 'enderio:grains_of_infinity',
                    count: 1
                }
            },
            {
                chance: 0.3,
                min_count: 1,
                max_count: 1,
                result: {
                    id: 'enderio:suspicious_seed',
                    count: 1
                }
            }
        ]
    });
});
