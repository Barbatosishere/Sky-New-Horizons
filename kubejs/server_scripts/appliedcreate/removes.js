// appliedcreate/removes.js
// ─────────────────────────────────────────────────────────
// 移除 appliedcreate:kinetic_energy_acceptor
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'appliedcreate:kinetic_energy_acceptor' });
});
