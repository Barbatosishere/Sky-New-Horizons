// sophisticatedstorage/removes.js
// ─────────────────────────────────────────────────────────
// 移除 omega 升级
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'sophisticatedstorage:stack_upgrade_omega_tier' });
});
