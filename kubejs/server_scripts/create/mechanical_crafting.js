// server_scripts/create/mechanical_crafting.js
ServerEvents.recipes(event => {

    // extendedcrafting:basic_table → extendedcrafting:black_iron_block  [create.mechanical_crafting]
    event.recipes.create.mechanical_crafting('extendedcrafting:basic_table', [
        'AAAAA',
        'ABCBA',
        'AEFEA',
        'ABDBA',
        'AAAAA'
    ], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:basic_component',
        C: 'extendedcrafting:basic_catalyst',
        D: 'extendedcrafting:black_iron_slate',
        E: 'minecraft:crafting_table',
        F: 'minecraft:iron_block'
    });

    // extendedcrafting:advanced_table → extendedcrafting:black_iron_block  [create.mechanical_crafting]
    event.recipes.create.mechanical_crafting('extendedcrafting:advanced_table', [
        'AAAAA',
        'ABCBA',
        'AEFEA',
        'ABDBA',
        'AAAAA'
    ], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:advanced_component',
        C: 'extendedcrafting:advanced_catalyst',
        D: 'extendedcrafting:black_iron_slate',
        E: 'extendedcrafting:basic_table',
        F: 'minecraft:gold_block'
    });

    // extendedcrafting:elite_table → extendedcrafting:black_iron_block  [create.mechanical_crafting]
    event.recipes.create.mechanical_crafting('extendedcrafting:elite_table', [
        'AAAAA',
        'ABCBA',
        'AEFEA',
        'ABDBA',
        'AAAAA'
    ], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:elite_component',
        C: 'extendedcrafting:elite_catalyst',
        D: 'extendedcrafting:black_iron_slate',
        E: 'extendedcrafting:advanced_table',
        F: 'minecraft:diamond_block'
    });

    // extendedcrafting:ultimate_table → extendedcrafting:black_iron_block  [create.mechanical_crafting]
    event.recipes.create.mechanical_crafting('extendedcrafting:ultimate_table', [
        'AAAAA',
        'ABCBA',
        'AEFEA',
        'ABDBA',
        'AAAAA'
    ], {
        A: 'extendedcrafting:black_iron_block',
        B: 'extendedcrafting:ultimate_component',
        C: 'extendedcrafting:ultimate_catalyst',
        D: 'extendedcrafting:black_iron_slate',
        E: 'extendedcrafting:elite_table',
        F: 'minecraft:emerald_block'
    });

    // appliedcreate:brass_pattern_provider → create:brass_ingot  [create.mechanical_crafting]
    event.recipes.create.mechanical_crafting('appliedcreate:brass_pattern_provider', [
        'AAA',
        'ACA',
        'ABA'
    ], {
        A: 'create:brass_ingot',
        B: 'create:brass_casing',
        C: 'extendedcrafting:basic_component'
    });
});
