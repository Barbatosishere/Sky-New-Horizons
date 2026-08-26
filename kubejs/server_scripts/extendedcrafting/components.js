// extendedcrafting/components.js
// ─────────────────────────────────────────────────────────
// Extended Crafting 4 个合成组件（basic/advanced/elite/ultimate）
// 同一文件保持 remove + add 共址。
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'extendedcrafting:basic_component' });
    event.remove({ id: 'extendedcrafting:advanced_component' });
    event.remove({ id: 'extendedcrafting:elite_component' });
    event.remove({ id: 'extendedcrafting:ultimate_component' });

    // 基础合成组件
    event.shaped('extendedcrafting:basic_component', [
        'DED',
        'BCB',
        'DAD'
    ], {
        E: 'create:whisk',
        B: 'pneumaticcraft:compressed_iron_block',
        A: 'create:propeller',
        C: 'extendedcrafting:black_iron_slate',
        D: 'ae2:cell_component_4k'
    });

    // 高级合成组件
    event.shaped('extendedcrafting:advanced_component', [
        'DBD',
        'ACA',
        'DBD'
    ], {
        A: 'pneumaticcraft:compressed_iron_block',
        B: 'immersiveengineering:storage_electrum',
        C: 'extendedcrafting:basic_component',
        D: 'ae2:cell_component_16k'
    });

    // 精英合成组件
    event.shaped('extendedcrafting:elite_component', [
        'DBD',
        'ACA',
        'DBD'
    ], {
        A: 'pneumaticcraft:compressed_iron_block',
        B: 'avaritia:diamond_lattice',
        C: 'extendedcrafting:advanced_component',
        D: 'ae2:cell_component_64k'
    });

    // 终极合成组件
    event.shaped('extendedcrafting:ultimate_component', [
        'DBD',
        'ACA',
        'DBD'
    ], {
        A: 'pneumaticcraft:compressed_iron_block',
        B: 'extendedae:entro_ingot',
        C: 'extendedcrafting:elite_component',
        D: 'ae2:cell_component_256k'
    });
});
