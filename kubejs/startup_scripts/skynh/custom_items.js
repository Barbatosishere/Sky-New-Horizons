// startup_scripts/skynh/custom_items.js
StartupEvents.registry("item", event => {

    event.create("skynh:printed_engineering_processor", "create:sequenced_assembly"); // pep

    event.create("skynh:printed_logic_processor", "create:sequenced_assembly");       // plp

    event.create("skynh:complex_link_circuit_print", "create:sequenced_assembly");    // clcp

    event.create("skynh:concurrent_processor_print", "create:sequenced_assembly");    // cpp

    event.create("skynh:multidimensional_expansion_circuit_print", "create:sequenced_assembly"); // mecp

    event.create("skynh:omni_link_circuit_print", "create:sequenced_assembly");        // olcp

    event.create("skynh:printed_accumulation_processor", "create:sequenced_assembly"); // pap

    event.create("skynh:printed_silicon", "create:sequenced_assembly");                // ps

    event.create("skynh:printed_quantum_processor", "create:sequenced_assembly");      // pqp

    event.create("skynh:printed_energy_processor", "create:sequenced_assembly");       // penp

    event.create("skynh:printed_calculation_processor", "create:sequenced_assembly");  // pcp

    event.create("skynh:superconducting_processor", "create:sequenced_assembly");

   event.create("skynh:overload_circuit_board", "create:sequenced_assembly");

    event.create("skynh:accumulation_processor", "create:sequenced_assembly");

    event.create("skynh:engineering_processor", "create:sequenced_assembly");

    event.create("skynh:logic_processor", "create:sequenced_assembly");

    event.create("skynh:complex_link_processor", "create:sequenced_assembly");

    event.create("skynh:concurrent_processor", "create:sequenced_assembly");

    event.create("skynh:multidimensional_expansion_processor", "create:sequenced_assembly");

    event.create("skynh:omni_link_processor", "create:sequenced_assembly");

    event.create("skynh:quantum_processor", "create:sequenced_assembly");

    event.create("skynh:energy_processor", "create:sequenced_assembly");

    event.create("skynh:calculation_processor", "create:sequenced_assembly");

    event.create("skynh:superconducting_processor_print", "create:sequenced_assembly");

    event.create("skynh:overload_processor", "create:sequenced_assembly");

    event.create("skynh:incomplete_compressed_iron", "create:sequenced_assembly");

    event.create("skynh:incomplete_black_iron_ingot", "create:sequenced_assembly");

    event.create("skynh:incomplete_black_quartz", "create:sequenced_assembly");

    event.create("skynh:incomplete_rs_engineering", "create:sequenced_assembly");

    event.create("skynh:incomplete_light_engineering", "create:sequenced_assembly");

    event.create("skynh:incomplete_heavy_engineering", "create:sequenced_assembly");

    event.create("skynh:incomplete_resonanz_engineering", "create:sequenced_assembly");

    event.create("skynh:incomplete_rose_quartz", "create:sequenced_assembly");

   event.create("skynh:honeycomb_mold");
   event.create("skynh:nitro_crystal_block_1");
});
