ServerEvents.recipes(event => {
    event.custom({
        type: "industrialforegoing:dissolution_chamber",
        input: [
            { item: "ifmup:unknown_magic_gear", },
            { item: "industrialforegoing:simulated_hydroponic_bed"}, 
            { item: "ifmup:unknown_magic_gear", },
            { item: "mekanism:ultimate_control_circuit" },
            { item: "mekanism:alloy_atomic" },
            { item: "mekanism:steel_casing" },
            { item: "extendedae_plus:spatial_core" },
            { item: "industrialforegoing:machine_frame_supreme" }
        ],
        inputFluid: {
            fluid: "ifmup:darkshine",
            amount: 1000
        },
        output: {
            id: "mekmm:planting_station",
            count: 1
        },
        processingTime: 400,
        power: 40000   
    });
});