ServerEvents.recipes((allthemods) => {
  function extractor({ output, target, adjacent, catalyst, directions, ticks, waterlogged }) {
    let recipe = {
      type: "xycraft_machines:extractor",
      adjacent: [],
      target: rule(target.type, target.block),
      output: {
        count: output.count || 1,
        id: output.item
      },
      ticks: ticks
    }

    if (catalyst) {
      recipe.catalyst = rule(catalyst.type, catalyst.block)
    }

    if (waterlogged) {
      recipe.waterlogged_fluid = waterlogged
    }

    if (directions) {
      recipe.valid_directions = directions
    }

    if (output.components) {
      recipe.output.components = output.components
    }

    if (adjacent) {
      adjacent.forEach((adj) => {
        recipe.adjacent.push(rule(adj.type, adj.block))
      })
    }

    allthemods
      .custom(recipe)
      .id(`allthemods:xycraft/extractor/${target.block.split(":").pop()}_to_${output.item.split(":").pop()}`)
  }

  function rule(type, block, property) {
    switch (type) {
      case "xycraft_core:block_tag_rule":
        return {
          predicate_type: type,
          tag: block
        }
      case "xycraft_core:block_rule":
        return {
          predicate_type: type,
          block: block
        }
      case "xycraft_core:fluid_type_rule":
        return {
          predicate_type: type,
          fluid_type: block
        }
      case "xycraft_core:fluid_tag_rule":
        return {
          predicate_type: type,
          tag: block
        }
      case "xycraft_core:block_state_rule":
        return {
          predicate_type: type,
          block_state: block
        }
      case "xycraft_core:property_rule":
        return {
          predicate_type: type,
          propery: property.propery,
          value: property.value
        }
      case "xycraft_core:fuzzy_block_state_rule":
        return {
          predicate_type: type,
          block: block.block,
          properties: block.properties
        }
    }
  }

   extractor({
    output: { item: "fluxnetworks:flux_dust", count: 1 },
    target: {
      type: "xycraft_core:block_rule",
      block: "actuallyadditions:empowered_restonia_crystal_block"
    },
    adjacent: [
      { type: "xycraft_core:block_rule", block: "minecraft:obsidian" },
      { type: "xycraft_core:block_rule", block: "minecraft:obsidian" },
      { type: "xycraft_core:block_rule", block: "minecraft:obsidian" },
      { type: "xycraft_core:block_rule", block: "minecraft:obsidian" }
    ],
    ticks: 20
  })
})