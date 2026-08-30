// server_scripts/enderio/enderman_head.js
ServerEvents.recipes(event => {
    // mysticalagriculture:enderman_essence → enderio:enderman_head
    event.shaped('enderio:enderman_head', [
        '###',
        '#A#',
        '###'
    ], {
        '#': 'mysticalagriculture:enderman_essence',
        A: 'mysticalagriculture:blank_skull'
    });
});
