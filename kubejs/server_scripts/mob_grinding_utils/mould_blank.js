// server_scripts/mob_grinding_utils/mould_blank.js
ServerEvents.recipes(event => {
    // minecraft:gold_nugget → mob_grinding_utils:solid_xp_mould_blank
    event.shaped('mob_grinding_utils:solid_xp_mould_blank', [
        '###',
        '# #',
        '###'
    ], {
        '#': 'minecraft:gold_nugget'
    });
});
