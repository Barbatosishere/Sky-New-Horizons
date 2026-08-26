// 生物头颅掉落 - 使用 LootJS addTableModifier
// 基础 2.5%，抢夺每级 +1%
// 无抢夺 2.50%, 抢夺I 3.50%, 抢夺II 4.50%, 抢夺III 5.50%
// 注意: randomTableBonus 的数组是累积概率，索引对应魔咒等级(0=无, 1=I, 2=II, 3=III)

LootJS.modifiers((event) => {
    // 末影人 → 末影人头颅
    event.addTableModifier("minecraft:entities/enderman")
        .killedByPlayer()
        .randomTableBonus("minecraft:looting", [0.025, 0.035, 0.045, 0.055])
        .addLoot("enderio:enderman_head")

    // 僵尸 → 僵尸头颅
    event.addTableModifier("minecraft:entities/zombie")
        .killedByPlayer()
        .randomTableBonus("minecraft:looting", [0.025, 0.035, 0.045, 0.055])
        .addLoot("minecraft:zombie_head")
})
