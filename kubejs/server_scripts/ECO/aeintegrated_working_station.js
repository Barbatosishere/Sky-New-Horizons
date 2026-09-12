ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:integrated_working_station' });
    event.shaped('neoecoae:integrated_working_station', [
        'ABC',
        'DEF',
        'GBH'
    ], {
        A: 'extendedae:ex_molecular_assembler',
        B: 'neoecoae:superconducting_processor',
        C: 'ae2omnicells:quantum_crafting_storage_256m_block',
        D: 'ae2:cell_workbench',
        E: 'neoecoae:aluminum_alloy_casing',
        F: 'ae2:condenser',
        G: 'extendedae:ex_inscriber',
        H: 'extendedae:ex_charger'
    });
});