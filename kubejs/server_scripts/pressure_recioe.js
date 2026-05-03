ServerEvents.recipes(event => {
  event.recipes.pneumaticcraft.pressure_chamber({
    inputs: [
      { item: 'draconicevolution:large_chaos_frag', count: 6 },
      { item: 'mysticalagradditions:insanium_essence', count: 1 },
      { item: 'ae2:singularity', count: 1 },
      { item: 'industrialforegoing:infinity_nuke', count: 1 }
    ],
    pressure: 10.0,
    results: [
      { id: 'draconicevolution:chaos_shard', count: 1 }
    ]
  })

   event.recipes.pneumaticcraft.pressure_chamber({
    inputs: [
      { item: 'draconicevolution:medium_chaos_frag', count: 6 },
      { item: 'mysticalagradditions:insanium_essence', count: 1 },
      { item: 'ae2:singularity', count: 1 },
      { item: 'industrialforegoing:infinity_nuke', count: 1 }
    ],
    pressure: 10.0,
    results: [
      { id: 'draconicevolution:large_chaos_frag', count: 1 }
    ]
  })

   event.recipes.pneumaticcraft.pressure_chamber({
    inputs: [
      { item: 'draconicevolution:small_chaos_frag', count: 6 },
      { item: 'mysticalagradditions:insanium_essence', count: 1 },
      { item: 'ae2:singularity', count: 1 },
      { item: 'industrialforegoing:infinity_nuke', count: 1 }
    ],
    pressure: 10.0,
    results: [
      { id: 'draconicevolution:medium_chaos_frag', count: 1 }
    ]
  })
  event.recipes.pneumaticcraft.pressure_chamber({
    inputs: [
      { item: 'mekanism:reprocessed_fissile_fragment', count: 1 },
      { item: 'mekanism:pellet_antimatter', count: 1 },
      { item: 'draconicevolution:draconic_energy_core', count: 1 },
      { item: 'ae2omnicells:spent_nuclear_waste_singularity', count: 1 }
    ],
    pressure: 10.0,
    results: [
      { id: 'draconicevolution:small_chaos_frag', count: 1 }
    ]
  })
  event.recipes.pneumaticcraft.pressure_chamber({
    inputs: [
      { item: 'draconicevolution:dragon_heart_left', count: 1 },
      { item: 'draconicevolution:dragon_heart_right', count: 1 }
    ],
    pressure: 15.0,
    results: [
      { id: 'draconicevolution:dragon_heart', count: 1 }
    ]
  })
  event.recipes.pneumaticcraft.pressure_chamber({
    inputs: [
      { item: 'mekanismgenerators:fusion_reactor_controller', count: 1 },
      { item: 'mekanismgenerators:fusion_reactor_frame', count: 36 },
      { item: 'mekanismgenerators:fusion_reactor_port', count: 4 },
      { item: 'mekanismgenerators:laser_focus_matrix', count: 1 },
      { item: 'mekanismgenerators:reactor_glass', count: 24 }
    ],
    pressure: 15.0,
    results: [
      { id: 'compactmekanismmachinesplus:compact_fusion_reactor', count: 1 }
    ]
  })
  event.recipes.pneumaticcraft.pressure_chamber({
    inputs: [
      { item: 'mekanism:sps_casing', count: 60 },
      { item: 'mekanism:sps_port', count: 3 },
      { item: 'mekanism:supercharged_coil', count: 2 },
      { item: 'mekanism:structural_glass', count: 123 }
    ],
    pressure: 15.0,
    results: [
      { id: 'compactmekanismmachinesplus:compact_sps', count: 1 }
    ]
  })
  event.recipes.pneumaticcraft.pressure_chamber({
    inputs: [
      { item: 'mekanism:structural_glass', count: 1598 },
      { item: 'mekanism:boiler_valve', count: 4 },
      { item: 'mekanism:pressure_disperser', count: 225 },
      { item: 'mekanism:superheating_element', count: 88 }
    ],
    pressure: 15.0,
    results: [
      { id: 'compactmekanismmachinesplus:compact_thermoelectric_boiler', count: 1 }
    ]
  })
})