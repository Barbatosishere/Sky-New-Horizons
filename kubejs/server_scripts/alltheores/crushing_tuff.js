// alltheores/crushing_tuff.js
// ─────────────────────────────────────────────────────────
// 移除 Create 的 tuff 粉碎配方（玩家通过其他途径获得）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'create:crushing/tuff_recycling' });
    event.remove({ id: 'create:crushing/tuff' });
});
