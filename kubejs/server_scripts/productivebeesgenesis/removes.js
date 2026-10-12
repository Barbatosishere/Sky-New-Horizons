ServerEvents.recipes(event => {
    event.remove({ id: 'productivebeesgenesis:mek_centrifuge' });
    event.remove({ id: 'productivebeesgenesis:mek_apiary' });

     event.shaped('productivebeesgenesis:mek_centrifuge', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'minecraft:redstone',
        B: 'mekanism:ultimate_control_circuit',
        C: '#c:ingots/steel',
        D: 'productivebees:powered_centrifuge'
    });

    event.shaped('productivebeesgenesis:mek_apiary', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        'A': 'minecraft:redstone',
        'B': 'mekanism:ultimate_control_circuit',
        'C': '#c:ingots/steel',
        'D': '#productivebees:advanced_beehives'
    });
});
