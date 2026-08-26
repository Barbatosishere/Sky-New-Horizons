// create/blasting.js
// ─────────────────────────────────────────────────────────
// alltheores:platinum_ingot 来自 create:crushed_raw_platinum（高炉）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.blasting('alltheores:platinum_ingot', 'create:crushed_raw_platinum')
        .xp(0.7)
        .cookingTime(100);
});
