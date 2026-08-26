// casting/fluids.js
// ─────────────────────────────────────────────────────────
// 来自原 startup_scripts/src/bblcompat.js
// 注册 casting:molten_budding_uraninite 流体（兼容 bbl/casting）
// ─────────────────────────────────────────────────────────

StartupEvents.registry('fluid', event => {
    event.create('casting:molten_budding_uraninite',"thin")
        .tint(0x8bc34a)
});
