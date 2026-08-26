// powah/removes.js
// ─────────────────────────────────────────────────────────
// 移除 powah 自带的发电机（furnator/magmator/thermo/solar × 7 阶 = 28 个）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    const TYPES = ['furnator', 'magmator', 'thermo_generator', 'solar_panel'];
    const TIERS = ['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro'];
    for (const type of TYPES) {
        for (const tier of TIERS) {
            event.remove({ id: `powah:${type}_${tier}` });
        }
    }
});
