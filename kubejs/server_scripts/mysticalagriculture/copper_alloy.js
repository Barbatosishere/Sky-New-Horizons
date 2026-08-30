// server_scripts/mysticalagriculture/copper_alloy.js
ServerEvents.recipes(event => {
    // mysticalagriculture:soulium_dust → mysticalagriculture:soulstone_cobble
    event.shaped('mysticalagriculture:soulstone_cobble', [
        'AB ',
        '   ',
        '   '
    ], {
        B: 'mysticalagriculture:soulium_dust',
        A: 'minecraft:cobblestone'
    });
});
