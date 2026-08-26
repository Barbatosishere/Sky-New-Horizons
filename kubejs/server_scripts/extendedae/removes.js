// extendedae/removes.js
// ─────────────────────────────────────────────────────────
// 移除 extendedae 上游配方
// 替代方案见 skynh/processors_sequenced_assembly.js
//                    extendedae/infinity_cells.js
//                    extendedae/entro_seed.js
//                    extendedae/fishbig.js
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'extendedae:inscriber/concurrent_print' });
    event.remove({ id: 'extendedae:inscriber/concurrent_process' });
    event.remove({ id: 'extendedae:entro_seed' });
    event.remove({ id: 'extendedae:water_cell' });
    event.remove({ id: 'extendedae:cobblestone_cell' });
    event.remove({ id: 'extendedae:fishbig' });
});
