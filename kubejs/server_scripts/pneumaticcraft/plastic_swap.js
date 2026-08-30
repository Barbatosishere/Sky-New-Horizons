// server_scripts/pneumaticcraft/plastic_swap.js
ServerEvents.recipes(event => {
    // industrialforegoing:plastic → pneumaticcraft:plastic
    event.shaped('pneumaticcraft:plastic', [
        'A'
    ], {
        A: 'industrialforegoing:plastic'
    });
});
