// mob_grinding_utils/removes.js
// ─────────────────────────────────────────────────────────
// 移除经验模坯（玩家通过其他途径获得）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'mob_grinding_utils:recipe_mould_blank' });
});
