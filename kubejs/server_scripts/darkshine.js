ServerEvents.recipes(event => {
    event.recipes.industrialforegoing.laser_drill_fluid({
        catalyst: { item: 'industrialforegoing:blue_laser_lens' },
        entity_data: {
            data: {},
            display: "",
            entity: { type: "occultism:possessed_warden" }
        },
        output: { amount: 10, fluid: "ifmup:darkshine" },
        rarity: [
            {
                biome_filter: { blacklist: [], whitelist: [] },
                depth_max: -16,
                depth_min: -64,
                dimension_filter: { blacklist: [], whitelist: ["minecraft:overworld"] },
                weight: 8
            }
        ]
    })
})