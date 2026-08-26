// enderio/enderman_head.js
// ─────────────────────────────────────────────────────────
// 末影人头（enderio:enderman_head）合成配方
// 配合 ../enderio/mob_drops.js 中的掉落规则
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('enderio:enderman_head', [
        '###',
        '#A#',
        '###'
    ], {
        '#': 'mysticalagriculture:enderman_essence',
        A: 'mysticalagriculture:blank_skull'
    });
});
