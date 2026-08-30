// server_scripts/pneumaticcraft/removes.js
ServerEvents.recipes(event => {

    // 移除配方 pneumaticcraft:explosion_crafting/compressed_iron_ingot
    event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot' });

    // 移除配方 pneumaticcraft:explosion_crafting/compressed_iron_block
    event.remove({ id: 'pneumaticcraft:explosion_crafting/compressed_iron_block' });

    // 移除配方 neoecoae:transform/crystal_ingot
    event.remove({ id: 'neoecoae:transform/crystal_ingot' });

    // 移除配方 neoecoae:transform/energized_superconductive_ingot
    event.remove({ id: 'neoecoae:transform/energized_superconductive_ingot' });
});
