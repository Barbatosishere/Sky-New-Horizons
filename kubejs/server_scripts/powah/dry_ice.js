// powah/dry_ice.js
// ─────────────────────────────────────────────────────────
// 干冰（powah:dry_ice）合成（蓝冰×9）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('powah:dry_ice', [
        '###',
        '###',
        '###'
    ], {
        '#': 'minecraft:blue_ice'
    });
});
