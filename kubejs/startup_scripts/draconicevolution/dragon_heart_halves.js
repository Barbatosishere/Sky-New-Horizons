// draconicevolution/dragon_heart_halves.js
// ─────────────────────────────────────────────────────────
// 来自原 startup_scripts/src/item.js（仅 draconicevolution: 部分）
// 注册龙心左/右两半（用于合成完整的龙心）
// ─────────────────────────────────────────────────────────

StartupEvents.registry('item', event => {
    event.create('draconicevolution:dragon_heart_left')
    event.create('draconicevolution:dragon_heart_right')
})
