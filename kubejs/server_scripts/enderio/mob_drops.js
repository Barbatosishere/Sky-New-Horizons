// server_scripts/enderio/mob_drops.js
LootJS.modifiers((event) => {

    event.addTableModifier("minecraft:entities/enderman")
        .killedByPlayer()
        .randomTableBonus("minecraft:looting", [0.025, 0.035, 0.045, 0.055])
        .addLoot("enderio:enderman_head")

    event.addTableModifier("minecraft:entities/zombie")
        .killedByPlayer()
        .randomTableBonus("minecraft:looting", [0.025, 0.035, 0.045, 0.055])
        .addLoot("minecraft:zombie_head")
})
