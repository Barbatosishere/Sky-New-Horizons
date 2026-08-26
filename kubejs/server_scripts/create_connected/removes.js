// create_connected/removes.js
// ─────────────────────────────────────────────────────────
// 移除 create_connected fluid_vessel
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'create_connected:fluid_vessel' });
});
