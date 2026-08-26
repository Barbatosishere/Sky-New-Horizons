// mob_grinding_utils/mould_blank.js
// ─────────────────────────────────────────────────────────
// 经验模坯（mob_grinding_utils:solid_xp_mould_blank）合成
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('mob_grinding_utils:solid_xp_mould_blank', [
        '###',
        '# #',
        '###'
    ], {
        '#': 'minecraft:gold_nugget'
    });
});
