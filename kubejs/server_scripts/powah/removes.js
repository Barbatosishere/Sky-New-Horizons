// server_scripts/powah/removes.js
ServerEvents.recipes(event => {
    const TYPES = ['furnator', 'magmator', 'thermo_generator', 'solar_panel'];
    const TIERS = ['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro'];
    for (const type of TYPES) {
        for (const tier of TIERS) {
            event.remove({ id: `powah:${type}_${tier}` });
        }
    }
});
