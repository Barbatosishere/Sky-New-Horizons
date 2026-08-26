// cobblegengalore/tier_chain.js
// ─────────────────────────────────────────────────────────
// 方块生成器（cobblegengalore:block_gen_*）升级链
//   stone → copper → iron → gold → emerald → diamond → netherite
// 同一文件保持 remove + add 共址，确保 add 在 remove 之后。
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // 移除所有原有生成器配方
    event.remove({ output: 'cobblegengalore:block_gen_stone' });
    event.remove({ output: 'cobblegengalore:block_gen_copper' });
    event.remove({ output: 'cobblegengalore:block_gen_iron' });
    event.remove({ output: 'cobblegengalore:block_gen_gold' });
    event.remove({ output: 'cobblegengalore:block_gen_emerald' });
    event.remove({ output: 'cobblegengalore:block_gen_diamond' });
    event.remove({ output: 'cobblegengalore:block_gen_netherite' });

    // 石头生成器
    event.shaped('cobblegengalore:block_gen_stone', [
        '###',
        '# #',
        '###'
    ], {
        '#': 'exdeorum:compressed_cobblestone'
    });

    // 铜生成器（需要石头生成器）
    event.shaped('cobblegengalore:block_gen_copper', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:copper_block',
        A: 'cobblegengalore:block_gen_stone',
        B: 'minecraft:copper_ingot'
    });

    // 铁生成器（需要铜生成器）
    event.shaped('cobblegengalore:block_gen_iron', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:iron_block',
        A: 'cobblegengalore:block_gen_copper',
        B: 'minecraft:iron_ingot'
    });

    // 金生成器（需要铁生成器）
    event.shaped('cobblegengalore:block_gen_gold', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:gold_block',
        A: 'cobblegengalore:block_gen_iron',
        B: 'minecraft:gold_ingot'
    });

    // 绿宝石生成器（需要金生成器）
    event.shaped('cobblegengalore:block_gen_emerald', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:emerald_block',
        A: 'cobblegengalore:block_gen_gold',
        B: 'minecraft:emerald'
    });

    // 钻石生成器（需要绿宝石生成器）
    event.shaped('cobblegengalore:block_gen_diamond', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:diamond_block',
        A: 'cobblegengalore:block_gen_emerald',
        B: 'minecraft:diamond'
    });

    // 下界合金生成器（需要钻石生成器）
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
