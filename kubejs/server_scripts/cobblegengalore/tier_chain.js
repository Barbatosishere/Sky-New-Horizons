// server_scripts/cobblegengalore/tier_chain.js
ServerEvents.recipes(event => {

    // 移除输出 cobblegengalore:block_gen_stone 的配方
    event.remove({ output: 'cobblegengalore:block_gen_stone' });
    // 移除输出 cobblegengalore:block_gen_copper 的配方
    event.remove({ output: 'cobblegengalore:block_gen_copper' });
    // 移除输出 cobblegengalore:block_gen_iron 的配方
    event.remove({ output: 'cobblegengalore:block_gen_iron' });
    // 移除输出 cobblegengalore:block_gen_gold 的配方
    event.remove({ output: 'cobblegengalore:block_gen_gold' });
    // 移除输出 cobblegengalore:block_gen_emerald 的配方
    event.remove({ output: 'cobblegengalore:block_gen_emerald' });
    // 移除输出 cobblegengalore:block_gen_diamond 的配方
    event.remove({ output: 'cobblegengalore:block_gen_diamond' });
    // 移除输出 cobblegengalore:block_gen_netherite 的配方
    event.remove({ output: 'cobblegengalore:block_gen_netherite' });

    // exdeorum:compressed_cobblestone → cobblegengalore:block_gen_stone
    event.shaped('cobblegengalore:block_gen_stone', [
        '###',
        '# #',
        '###'
    ], {
        '#': 'exdeorum:compressed_cobblestone'
    });

    // minecraft:copper_block → cobblegengalore:block_gen_copper
    event.shaped('cobblegengalore:block_gen_copper', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:copper_block',
        A: 'cobblegengalore:block_gen_stone',
        B: 'minecraft:copper_ingot'
    });

    // minecraft:iron_block → cobblegengalore:block_gen_iron
    event.shaped('cobblegengalore:block_gen_iron', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:iron_block',
        A: 'cobblegengalore:block_gen_copper',
        B: 'minecraft:iron_ingot'
    });

    // minecraft:gold_block → cobblegengalore:block_gen_gold
    event.shaped('cobblegengalore:block_gen_gold', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:gold_block',
        A: 'cobblegengalore:block_gen_iron',
        B: 'minecraft:gold_ingot'
    });

    // minecraft:emerald_block → cobblegengalore:block_gen_emerald
    event.shaped('cobblegengalore:block_gen_emerald', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:emerald_block',
        A: 'cobblegengalore:block_gen_gold',
        B: 'minecraft:emerald'
    });

    // minecraft:diamond_block → cobblegengalore:block_gen_diamond
    event.shaped('cobblegengalore:block_gen_diamond', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:diamond_block',
        A: 'cobblegengalore:block_gen_emerald',
        B: 'minecraft:diamond'
    });

    // minecraft:netherite_block → cobblegengalore:block_gen_netherite
    event.shaped('cobblegengalore:block_gen_netherite', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:netherite_block',
        A: 'cobblegengalore:block_gen_diamond',
        B: 'minecraft:netherite_ingot'
    });
});
