// pneumaticcraft/plastic_swap.js
// ─────────────────────────────────────────────────────────
// 气动工艺 plastic <-> 工业先锋 plastic 互换（这一半）
// 配套：../industrialforegoing/plastic_swap.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('pneumaticcraft:plastic', [
        'A'
    ], {
        A: 'industrialforegoing:plastic'
    });
});
