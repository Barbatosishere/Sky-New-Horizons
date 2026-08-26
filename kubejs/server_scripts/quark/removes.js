// quark/removes.js
// ─────────────────────────────────────────────────────────
// 移除铁漏斗配方（玩家通过自定义配方获得）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'quark:tweaks/crafting/utility/misc/easy_hopper' });
});
