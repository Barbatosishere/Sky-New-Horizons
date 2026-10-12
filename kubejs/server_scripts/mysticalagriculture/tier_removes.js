// server_scripts/mysticalagriculture/tier_removes.js
ServerEvents.recipes(event => {
    const crops = ['neutronium', 'awakened_draconium', 'dragon_egg'];
    crops.forEach(crop => {
        event.remove({ id: `mysticalagriculture:seed/crafting/${crop}` });
        event.remove({ id: `mysticalagriculture:seed/infusion/${crop}` });
    });
});
