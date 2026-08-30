// server_scripts/extendedcrafting/components.js
ServerEvents.recipes(event => {
    // 移除配方 extendedcrafting:basic_component
    event.remove({ id: 'extendedcrafting:basic_component' });
    // 移除配方 extendedcrafting:advanced_component
    event.remove({ id: 'extendedcrafting:advanced_component' });
    // 移除配方 extendedcrafting:elite_component
    event.remove({ id: 'extendedcrafting:elite_component' });
    // 移除配方 extendedcrafting:ultimate_component
    event.remove({ id: 'extendedcrafting:ultimate_component' });

    // create:whisk → extendedcrafting:basic_component
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

    // pneumaticcraft:compressed_iron_block → extendedcrafting:advanced_component
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

    // pneumaticcraft:compressed_iron_block → extendedcrafting:elite_component
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

    // pneumaticcraft:compressed_iron_block → extendedcrafting:ultimate_component
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
