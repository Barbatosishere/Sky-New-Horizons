// apotheosis/removes.js
// ─────────────────────────────────────────────────────────
// 移除 Apotheosis 自带的铁/金/钻石锻造模板（玩家通过其他途径获得）
// 替代方案见 ../apotheosis/smithing_templates.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'apotheosis:iron_upgrade_smithing_template' });
    event.remove({ id: 'apotheosis:gold_upgrade_smithing_template' });
    event.remove({ id: 'apotheosis:diamond_upgrade_smithing_template' });
});
