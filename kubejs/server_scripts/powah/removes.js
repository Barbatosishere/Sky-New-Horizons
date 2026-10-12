// server_scripts/powah/removes.js
ServerEvents.recipes(event => {
    const OUTPUTS = [
        "powah:furnator_starter",
        "powah:furnator_basic",
        "powah:furnator_hardened",
        "powah:furnator_blazing",
        "powah:furnator_niotic",
        "powah:furnator_spirited",
        "powah:furnator_nitro",
        "powah:magmator_starter",
        "powah:magmator_basic",
        "powah:magmator_hardened",
        "powah:magmator_blazing",
        "powah:magmator_niotic",
        "powah:magmator_spirited",
        "powah:magmator_nitro",
        "powah:thermo_generator_starter",
        "powah:thermo_generator_basic",
        "powah:thermo_generator_hardened",
        "powah:thermo_generator_blazing",
        "powah:thermo_generator_niotic",
        "powah:thermo_generator_spirited",
        "powah:thermo_generator_nitro",
        "powah:solar_panel_starter",
        "powah:solar_panel_basic",
        "powah:solar_panel_hardened",
        "powah:solar_panel_blazing",
        "powah:solar_panel_niotic",
        "powah:solar_panel_spirited",
        "powah:solar_panel_nitro",
    ];
    for (const out of OUTPUTS) {
        event.remove({ output: out });
    }
});