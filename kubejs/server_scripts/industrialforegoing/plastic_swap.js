// industrialforegoing/plastic_swap.js
// ─────────────────────────────────────────────────────────
// 工业先锋 plastic <-> 气动工艺 plastic 互换（这一半）
// 配套：../pneumaticcraft/plastic_swap.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('industrialforegoing:plastic', [
        'A'
    ], {
        A: 'pneumaticcraft:plastic'
    });
});
