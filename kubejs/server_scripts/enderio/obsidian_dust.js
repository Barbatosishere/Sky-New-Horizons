// enderio/obsidian_dust.js
// ─────────────────────────────────────────────────────────
// 移除 Ender IO 制作黑曜石粉末原配方（玩家通过其他途径获得）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'enderio:sag_milling/obsidian' });
});
