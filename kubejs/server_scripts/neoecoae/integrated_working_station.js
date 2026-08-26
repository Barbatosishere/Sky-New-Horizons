// neoecoae/integrated_working_station.js
// ─────────────────────────────────────────────────────────
// ECO - 集成工作站（neoecoae:integrated_working_station）合成配方
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.shaped('neoecoae:integrated_working_station', [
        'ABC',
        'DEF',
        'QBW'
    ], {
        A: 'ae2lt:lightning_assembly_chamber',
        B: 'neoecoae:superconducting_processor',
        C: 'advanced_ae:quantum_core',
        D: 'ae2:cell_workbench',
        E: 'neoecoae:aluminum_alloy_casing',
        F: 'ae2:condenser',
        Q: 'extendedae:ex_inscriber',
        W: 'extendedae:ex_inscriber'
    });
});
