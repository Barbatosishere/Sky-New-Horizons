// server_scripts/industrialforegoing/plastic_swap.js
ServerEvents.recipes(event => {
    // pneumaticcraft:plastic → industrialforegoing:plastic
    event.shaped('industrialforegoing:plastic', [
        'A'
    ], {
        A: 'pneumaticcraft:plastic'
    });
});
