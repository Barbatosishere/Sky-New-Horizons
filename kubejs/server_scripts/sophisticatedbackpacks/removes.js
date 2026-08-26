// sophisticatedbackpacks/removes.js
// ─────────────────────────────────────────────────────────
// 移除 omega 升级
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_omega_tier' });
});
