// server_scripts/mekmm/planting_station.js
ServerEvents.recipes(event => {
    event.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            { tag: 'mekanism:alloys/reinforced' },
            { item: 'mekanism:steel_casing' },
            { tag: 'mekanism:alloys/reinforced' },
            { item: 'mekanism:bio_fuel' },
            { item: 'mekanism:bio_fuel' },
            { tag: 'c:circuits/elite' },
            { item: 'mekanism:bio_fuel' },
            { tag: 'c:circuits/elite' }
        ],
        inputFluid: { amount: 500, fluid: 'ifmup:darkshine' },
        output: { count: 1, id: 'mekmm:planting_station' },
        processingTime: 300
    }).id('kubejs:dissolution_chamber/planting_station');
});
