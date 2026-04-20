// ========== 物品注册 ==========
StartupEvents.registry("item", event => {
    // 工程处理器打印件
    event.create("skynh:printed_engineering_processor", "create:sequenced_assembly"); // pep
    // 逻辑处理器打印件
    event.create("skynh:printed_logic_processor", "create:sequenced_assembly");       // plp
    // 复杂链路电路板打印件
    event.create("skynh:complex_link_circuit_print", "create:sequenced_assembly");    // clcp
    // 并发处理器打印件
    event.create("skynh:concurrent_processor_print", "create:sequenced_assembly");    // cpp
    // 多维展开电路板打印件
    event.create("skynh:multidimensional_expansion_circuit_print", "create:sequenced_assembly"); // mecp
    // 全能链路电路板打印件
    event.create("skynh:omni_link_circuit_print", "create:sequenced_assembly");        // olcp
    // 累积处理器打印件
    event.create("skynh:printed_accumulation_processor", "create:sequenced_assembly"); // pap
    // 硅板打印件
    event.create("skynh:printed_silicon", "create:sequenced_assembly");                // ps
    // 量子处理器打印件
    event.create("skynh:printed_quantum_processor", "create:sequenced_assembly");      // pqp
    // 能量处理器打印件
    event.create("skynh:printed_energy_processor", "create:sequenced_assembly");       // penp
    // 计算处理器打印件
    event.create("skynh:printed_calculation_processor", "create:sequenced_assembly");  // pcp
    // 压缩铁半成品
    event.create("skynh:incomplete_compressed_iron", "create:sequenced_assembly");
    // 黑铁锭半成品
    event.create("skynh:incomplete_black_iron_ingot", "create:sequenced_assembly");
    // 焦黑石英半成品
    event.create("skynh:incomplete_black_quartz", "create:sequenced_assembly");
     // 红石工程块半成品
    event.create("skynh:incomplete_rs_engineering", "create:sequenced_assembly");
     // 轻型工程块半成品
    event.create("skynh:incomplete_light_engineering", "create:sequenced_assembly");
     // 重型工程块半成品
    event.create("skynh:incomplete_heavy_engineering", "create:sequenced_assembly");
     // 共振工程块半成品
    event.create("skynh:incomplete_resonanz_engineering", "create:sequenced_assembly");
     // 玫瑰石英半成品
    event.create("skynh:incomplete_rose_quartz", "create:sequenced_assembly");
     // 反物质球碎片
    event.create("mek:mekanism_fragment_antimatter");
     // 小的反物质球碎片
    event.create("mek:mekanism_small_antimatter");
     // 微小反物质球碎片
    event.create("mek:mekanism_tiny_antimatter");
    // 龙之心左侧
   event.create("draconicevolution:dragon_heart_left");
   // 龙之心右侧
   event.create("draconicevolution:dragon_heart_right");

});