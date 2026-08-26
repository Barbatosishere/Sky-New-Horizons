// cookingforblockheads/sink.js
// ─────────────────────────────────────────────────────────
// 水槽（cookingforblockheads:sink）合成
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('cookingforblockheads:sink', [
        'DAD',
        'BCB',
        'BBB'
    ], {
        A: 'ae2:spatial_io_port',
        B: 'minecraft:terracotta',
        C: 'extendedae:infinity_water_cell',
        D: 'ae2:speed_card'
    });
});
