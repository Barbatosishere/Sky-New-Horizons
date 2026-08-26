// mysticalagriculture/copper_alloy.js
// ─────────────────────────────────────────────────────────
// 离魂原石（mysticalagriculture:soulstone_cobble）合成配方
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('mysticalagriculture:soulstone_cobble', [
        'AB ',
        '   ',
        '   '
    ], {
        B: 'mysticalagriculture:soulium_dust',
        A: 'minecraft:cobblestone'
    });
});
