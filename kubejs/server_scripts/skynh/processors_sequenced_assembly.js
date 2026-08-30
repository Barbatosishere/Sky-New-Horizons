// server_scripts/skynh/processors_sequenced_assembly.js
ServerEvents.recipes(event => {
    const {create} = event.recipes

    const pep = 'skynh:printed_engineering_processor';
    const plp = 'skynh:printed_logic_processor';
    const clcp = 'skynh:complex_link_circuit_print';
    const cpp = 'skynh:concurrent_processor_print';
    const mecp = 'skynh:multidimensional_expansion_circuit_print';
    const olcp = 'skynh:omni_link_circuit_print';
    const pap = 'skynh:printed_accumulation_processor';
    const ps = 'skynh:printed_silicon';
    const pqp = 'skynh:printed_quantum_processor';
    const penp = 'skynh:printed_energy_processor';
    const pcp = 'skynh:printed_calculation_processor';
    const aeps = 'ae2:printed_silicon';
    const ae2lt = 'skynh:overload_circuit_board';
    const spp = 'skynh:superconducting_processor_print';

    const pep_clq = 'skynh:engineering_processor';
    const plp_clq = 'skynh:logic_processor';
    const clcp_clq = 'skynh:complex_link_processor';
    const cpp_clq = 'skynh:concurrent_processor';
    const mecp_clq = 'skynh:multidimensional_expansion_processor';
    const olcp_clq = 'skynh:omni_link_processor';
    const pap_clq = 'skynh:accumulation_processor';
    const pqp_clq = 'skynh:quantum_processor';
    const penp_clq = 'skynh:energy_processor';
    const pcp_clq = 'skynh:calculation_processor';
    const ae2lt_clq = 'skynh:overload_processor';
    const spp_clq = 'skynh:superconducting_processor';

    create.sequenced_assembly(
        ["ae2:printed_engineering_processor"],
        "minecraft:diamond",
        [
            create.deploying(pep, [pep, 'ae2:engineering_processor_press']).keepHeldItem(),
            create.pressing(pep, pep)
        ]
    ).transitionalItem(pep).loops(3);

    create.sequenced_assembly(
        ["ae2:printed_logic_processor"],
        "minecraft:gold_ingot",
        [
            create.deploying(plp, [plp, 'ae2:logic_processor_press']).keepHeldItem(),
            create.pressing(plp, plp)
        ]
    ).transitionalItem(plp).loops(3);

    create.sequenced_assembly(
        ["ae2:printed_calculation_processor"],
        "ae2:certus_quartz_crystal",
        [
            create.deploying(pcp, [pcp, 'ae2:calculation_processor_press']).keepHeldItem(),
            create.pressing(pcp, pcp)
        ]
    ).transitionalItem(pcp).loops(3);

    create.sequenced_assembly(
        ["ae2:printed_silicon"],
        "ae2:silicon",
        [
            create.deploying(ps, [ps, 'ae2:silicon_press']).keepHeldItem(),
            create.pressing(ps, ps)
        ]
    ).transitionalItem(ps).loops(3);

    create.sequenced_assembly(
        ["appflux:printed_energy_processor"],
        "appflux:charged_redstone",
        [
            create.deploying(penp, [penp, 'appflux:energy_processor_press']).keepHeldItem(),
            create.pressing(penp, penp)
        ]
    ).transitionalItem(penp).loops(3);

    create.sequenced_assembly(
        ["extendedae:concurrent_processor_print"],
        "extendedae:entro_crystal",
        [
            create.deploying(cpp, [cpp, 'extendedae:concurrent_processor_press']).keepHeldItem(),
            create.pressing(cpp, cpp)
        ]
    ).transitionalItem(cpp).loops(3);

    create.sequenced_assembly(
        ["advanced_ae:printed_quantum_processor"],
        "advanced_ae:quantum_alloy",
        [
            create.deploying(pqp, [pqp, 'advanced_ae:quantum_processor_press']).keepHeldItem(),
            create.pressing(pqp, pqp)
        ]
    ).transitionalItem(pqp).loops(3);

    create.sequenced_assembly(
        ["megacells:printed_accumulation_processor"],
        "megacells:sky_steel_ingot",
        [
            create.deploying(pap, [pap, 'megacells:accumulation_processor_press']).keepHeldItem(),
            create.pressing(pap, pap)
        ]
    ).transitionalItem(pap).loops(3);

    create.sequenced_assembly(
        ["ae2omnicells:omni_link_circuit_print"],
        "ae2omnicells:ender_ingot",
        [
            create.deploying(olcp, [olcp, 'ae2omnicells:omni_link_print_press']).keepHeldItem(),
            create.pressing(olcp, olcp)
        ]
    ).transitionalItem(olcp).loops(3);

    create.sequenced_assembly(
        ["ae2omnicells:multidimensional_expansion_circuit_print"],
        "ae2:singularity",
        [
            create.deploying(mecp, [mecp, 'ae2omnicells:multidimensional_expansion_print_press']).keepHeldItem(),
            create.pressing(mecp, mecp)
        ]
    ).transitionalItem(mecp).loops(3);

    create.sequenced_assembly(
        ["ae2omnicells:complex_link_circuit_print"],
        "minecraft:netherite_scrap",
        [
            create.deploying(clcp, [clcp, 'ae2omnicells:complex_link_print_press']).keepHeldItem(),
            create.pressing(clcp, clcp)
        ]
    ).transitionalItem(clcp).loops(3);

    create.sequenced_assembly(
        ["ae2lt:unoverloaded_circuit_board"],
        "ae2lt:overload_crystal",
        [
            create.deploying(ae2lt, [ae2lt, 'ae2lt:overload_inscriber_press']).keepHeldItem(),
            create.pressing(ae2lt, ae2lt)
        ]
    ).transitionalItem(ae2lt).loops(3);

        create.sequenced_assembly(
        ["neoecoae:superconducting_processor_print"],
        "neoecoae:energized_superconductive_ingot",
        [
            create.deploying(ae2lt, [ae2lt, 'neoecoae:superconducting_processor_press']).keepHeldItem(),
            create.pressing(ae2lt, ae2lt)
        ]
    ).transitionalItem(ae2lt).loops(3);

    create.sequenced_assembly(
        ["ae2:engineering_processor"],
        "ae2:printed_engineering_processor",
        [
            create.deploying(pep, [pep, aeps]),
            create.filling(pep, [pep, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(pep, pep),
            create.filling(pep, [pep, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(pep, pep),
            create.filling(pep, [pep, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("ae2:printed_engineering_processor", pep)
        ]
    ).transitionalItem(pep).loops(1);

    create.sequenced_assembly(
        ["ae2:logic_processor"],
        "ae2:printed_logic_processor",
        [
            create.deploying(plp, [plp, aeps]),
            create.filling(plp, [plp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(plp, plp),
            create.filling(plp, [plp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(plp, plp),
            create.filling(plp, [plp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("ae2:printed_logic_processor", plp)
        ]
    ).transitionalItem(plp).loops(1);

    create.sequenced_assembly(
        ["ae2:calculation_processor"],
        "ae2:printed_calculation_processor",
        [
            create.deploying(pcp, [pcp, aeps]),
            create.filling(pcp, [pcp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(pcp, pcp),
            create.filling(pcp, [pcp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(pcp, pcp),
            create.filling(pcp, [pcp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("ae2:printed_calculation_processor", pcp)
        ]
    ).transitionalItem(pcp).loops(1);

    create.sequenced_assembly(
        ["appflux:energy_processor"],
        "appflux:printed_energy_processor",
        [
            create.deploying(penp, [penp, aeps]),
            create.filling(penp, [penp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(penp, penp),
            create.filling(penp, [penp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(penp, penp),
            create.filling(penp, [penp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("appflux:printed_energy_processor", penp)
        ]
    ).transitionalItem(penp).loops(1);

    create.sequenced_assembly(
        ["ae2omnicells:complex_link_processor"],
        "ae2omnicells:complex_link_circuit_print",
        [
            create.deploying(clcp, [clcp, aeps]),
            create.filling(clcp, [clcp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(clcp, clcp),
            create.filling(clcp, [clcp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(clcp, clcp),
            create.filling(clcp, [clcp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("ae2omnicells:complex_link_circuit_print", clcp)
        ]
    ).transitionalItem(clcp).loops(1);

    create.sequenced_assembly(
        ["extendedae:concurrent_processor"],
        "extendedae:concurrent_processor_print",
        [
            create.deploying(cpp, [cpp, aeps]),
            create.filling(cpp, [cpp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(cpp, cpp),
            create.filling(cpp, [cpp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(cpp, cpp),
            create.filling(cpp, [cpp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("extendedae:concurrent_processor_print", cpp)
        ]
    ).transitionalItem(cpp).loops(1);

    create.sequenced_assembly(
        ["ae2omnicells:multidimensional_expansion_processor"],
        "ae2omnicells:multidimensional_expansion_circuit_print",
        [
            create.deploying(mecp, [mecp, aeps]),
            create.filling(mecp, [mecp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(mecp, mecp),
            create.filling(mecp, [mecp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(mecp, mecp),
            create.filling(mecp, [mecp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("ae2omnicells:multidimensional_expansion_circuit_print", mecp)
        ]
    ).transitionalItem(mecp).loops(1);

    create.sequenced_assembly(
        ["ae2omnicells:omni_link_processor"],
        "ae2omnicells:omni_link_circuit_print",
        [
            create.deploying(olcp, [olcp, aeps]),
            create.filling(olcp, [olcp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(olcp, olcp),
            create.filling(olcp, [olcp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(olcp, olcp),
            create.filling(olcp, [olcp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("ae2omnicells:omni_link_circuit_print", olcp)
        ]
    ).transitionalItem(olcp).loops(1);

    create.sequenced_assembly(
        ["megacells:accumulation_processor"],
        "megacells:printed_accumulation_processor",
        [
            create.deploying(pap, [pap, aeps]),
            create.filling(pap, [pap, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(pap, pap),
            create.filling(pap, [pap, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(pap, pap),
            create.filling(pap, [pap, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("megacells:printed_accumulation_processor", pap)
        ]
    ).transitionalItem(pap).loops(1);

    create.sequenced_assembly(
        ["advanced_ae:quantum_processor"],
        "advanced_ae:printed_quantum_processor",
        [
            create.deploying(pqp, [pqp, aeps]),
            create.filling(pqp, [pqp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(pqp, pqp),
            create.filling(pqp, [pqp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(pqp, pqp),
            create.filling(pqp, [pqp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("advanced_ae:printed_quantum_processor", pqp)
        ]
    ).transitionalItem(pqp).loops(1);

    create.sequenced_assembly(
        ["ae2lt:overload_processor"],
        "ae2lt:overload_circuit_board",
        [
            create.deploying(ae2lt, [ae2lt, aeps]),
            create.filling(ae2lt, [ae2lt, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(ae2lt, ae2lt),
            create.filling(ae2lt, [ae2lt, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(ae2lt, ae2lt),
            create.filling(ae2lt, [ae2lt, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("ae2lt:overload_circuit_board", ae2lt)
        ]
    ).transitionalItem(ae2lt).loops(1);

    create.sequenced_assembly(
        ["neoecoae:superconducting_processor"],
        "neoecoae:superconducting_processor_print",
        [
            create.deploying(spp, [spp, aeps]),
            create.filling(spp, [spp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(spp, spp),
            create.filling(spp, [spp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing(spp, spp),
            create.filling(spp, [spp, Fluid.of('immersiveengineering:redstone_acid', 100)]),
            create.pressing("neoecoae:superconducting_processor_print", spp)
        ]
    ).transitionalItem(spp).loops(1);

    const incompleteIron = 'skynh:incomplete_compressed_iron'; 
    create.sequenced_assembly(
        ["pneumaticcraft:ingot_iron_compressed"],
        "minecraft:iron_block",
        [
            create.pressing(incompleteIron, 'minecraft:iron_block'),
            create.pressing(incompleteIron, incompleteIron)
        ]
    ).transitionalItem(incompleteIron).loops(5);

    const incomplete_light = 'skynh:incomplete_light_engineering';
    create.sequenced_assembly(
        ['immersiveengineering:light_engineering'],
        'minecraft:copper_ingot',
        [
            create.deploying(incomplete_light, [incomplete_light, 'immersiveengineering:component_iron']),
            create.deploying(incomplete_light, [incomplete_light, 'immersiveengineering:sheetmetal_iron'])
        ]
    ).transitionalItem(incomplete_light).loops(4);

    const incomplete_rs = 'skynh:incomplete_rs_engineering';
    create.sequenced_assembly(
        ['immersiveengineering:rs_engineering'],
        'minecraft:copper_ingot',
        [
            create.deploying(incomplete_rs, [incomplete_rs, 'minecraft:redstone']),
            create.deploying(incomplete_rs, [incomplete_rs, 'immersiveengineering:sheetmetal_iron'])
        ]
    ).transitionalItem(incomplete_rs).loops(4);

    const incomplete_heavy = 'skynh:incomplete_heavy_engineering';
    create.sequenced_assembly(
        ['immersiveengineering:heavy_engineering'],
        'immersiveengineering:ingot_electrum',
        [
            create.deploying(incomplete_heavy, [incomplete_heavy, 'immersiveengineering:component_steel']),
            create.deploying(incomplete_heavy, [incomplete_heavy, 'immersiveengineering:sheetmetal_steel'])
        ]
    ).transitionalItem(incomplete_heavy).loops(4);

    const incomplete_resonanz = 'skynh:incomplete_resonanz_engineering';
    create.sequenced_assembly(
        ['immersiveengineering:resonanz_engineering'],
        'minecraft:echo_shard',
        [
            create.deploying(incomplete_resonanz, [incomplete_resonanz, 'immersiveengineering:component_electronic_adv']),
            create.deploying(incomplete_resonanz, [incomplete_resonanz, 'immersiveengineering:sheetmetal_lead'])
        ]
    ).transitionalItem(incomplete_resonanz).loops(4);

create.sequenced_assembly(
        ["minecraft:honeycomb"],
        "minecraft:honey_block",
        [
            create.deploying("minecraft:honeycomb", ["minecraft:honeycomb", "skynh:honeycomb_mold"]).keepHeldItem(),
            create.pressing("minecraft:honeycomb", "minecraft:honeycomb")
        ]
    ).transitionalItem("minecraft:honeycomb").loops(1);

});
