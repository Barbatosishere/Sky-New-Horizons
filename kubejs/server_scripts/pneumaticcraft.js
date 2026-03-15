ServerEvents.recipes(event => {
    // 仅移除压缩铁锭的爆炸合成配方
    event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot' });
    // 仅移除压缩铁块的爆炸合成配方
    event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_block' });
});