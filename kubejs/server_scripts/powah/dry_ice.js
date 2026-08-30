// server_scripts/powah/dry_ice.js
ServerEvents.recipes(event => {
    // minecraft:blue_ice → powah:dry_ice
    event.shaped('powah:dry_ice', [
        '###',
        '###',
        '###'
    ], {
        '#': 'minecraft:blue_ice'
    });
});
