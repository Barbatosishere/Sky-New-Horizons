ServerEvents.recipes(event => {
    event.remove({ id: 'useless_mod:endless_beaf_item' });
    event.shaped('useless_mod:endless_beaf_item', [
        'ABC',
        'DEF',
        'GHI'
    ], {
        A: 'avaritia:blaze_pickaxe',
        B: 'mekanism:atomic_disassembler',
        C: 'mysticalagriculture:awakened_supremium_shears',
        D: 'useless_mod:possible_useful_ingot',
        E: 'jdte:ultimate_time_wand',
        F: 'useless_mod:possible_useful_ingot',
        G: 'extendedae_plus:lattra_crystal_block',
        H: 'appliedcreate:whichball_skin_doll',
        I: 'forbidden_arcanus:deorum_block'
    });
});