// server_scripts/skynh/antimatter_pellets.js
ServerEvents.recipes(event => {

    // mek:mekanism_fragment_antimatter → mekanism:pellet_antimatter
    event.shaped('mekanism:pellet_antimatter', [
        '###',
        '###',
        '###'
    ], {
        '#': 'mek:mekanism_fragment_antimatter'
    });

    // mek:mekanism_small_antimatter → mek:mekanism_fragment_antimatter
    event.shaped('mek:mekanism_fragment_antimatter', [
        '###',
        '###',
        '###'
    ], {
        '#': 'mek:mekanism_small_antimatter'
    });

    // mek:mekanism_tiny_antimatter → mek:mekanism_small_antimatter
    event.shaped('mek:mekanism_small_antimatter', [
        '###',
        '###',
        '###'
    ], {
        '#': 'mek:mekanism_tiny_antimatter'
    });
});
