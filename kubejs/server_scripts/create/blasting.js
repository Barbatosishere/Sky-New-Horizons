// server_scripts/create/blasting.js
ServerEvents.recipes(event => {
    event.blasting('alltheores:platinum_ingot', 'create:crushed_raw_platinum')
        .xp(0.7)
        .cookingTime(100);
});
