// productivebees/removes.js
// ─────────────────────────────────────────────────────────
// 移除 Quark 木质蜂箱/扩容盒配方（无对应木材）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ output: 'productivebees:advanced_quark_blossom_beehive' });
    event.remove({ output: 'productivebees:expansion_box_quark_blossom' });
    event.remove({ output: 'productivebees:advanced_quark_azalea_beehive' });
    event.remove({ output: 'productivebees:expansion_box_quark_azalea' });
});
