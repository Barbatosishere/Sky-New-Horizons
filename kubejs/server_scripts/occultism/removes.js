// occultism/removes.js
// ─────────────────────────────────────────────────────────
// 移除魔灵同调宝石（灵火）原配方（玩家通过其他途径获得）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'occultism:spirit_fire/spirit_attuned_gem' });
});
