// pneumaticcraft/removes.js
// ─────────────────────────────────────────────────────────
// 来自原 pneumaticcraft.js
// 移除 pneumaticcraft 爆炸合成（压缩铁锭/块）+ neoecoae 水晶转换
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    // 仅移除压缩铁锭的爆炸合成配方
    event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot' });
    // 仅移除压缩铁块的爆炸合成配方
    event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_block' });
    // 仅移除水晶锭的转换配方
    event.remove({ id: 'neoecoae:transform/crystal_ingot' });
    // 仅移除水晶块的转换配方
    event.remove({ id: 'neoecoae:transform/energized_superconductive_ingot' });
});
