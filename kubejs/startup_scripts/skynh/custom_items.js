// skynh/custom_items.js
// ─────────────────────────────────────────────────────────
// 来自原 startup_scripts/src/item.js（仅 skynh: 部分）
// 注册 skynh 整合包自定义物品：处理器打印件、处理器、压缩铁/工程块/石英/黑铁锭/玫瑰石英
// 中间物品、蜂窝模具、硝基水晶块等约 40 项。
// ─────────────────────────────────────────────────────────

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
    //ECO - SA 超导电路板
    event.create("skynh:superconducting_processor", "create:sequenced_assembly");
   //未过载的电路板
   event.create("skynh:overload_circuit_board", "create:sequenced_assembly");
    //累积处理器
    event.create("skynh:accumulation_processor", "create:sequenced_assembly");
    //工程处理器
    event.create("skynh:engineering_processor", "create:sequenced_assembly");
    //逻辑处理器
    event.create("skynh:logic_processor", "create:sequenced_assembly");
    //复杂链路处理器
    event.create("skynh:complex_link_processor", "create:sequenced_assembly");
    // 并发处理器
    event.create("skynh:concurrent_processor", "create:sequenced_assembly");
    // 多维展开处理器
    event.create("skynh:multidimensional_expansion_processor", "create:sequenced_assembly");
    // 全能链路处理器
    event.create("skynh:omni_link_processor", "create:sequenced_assembly");
    //量子处理器
    event.create("skynh:quantum_processor", "create:sequenced_assembly");
    // 能量处理器
    event.create("skynh:energy_processor", "create:sequenced_assembly");
    //运算处理器
    event.create("skynh:calculation_processor", "create:sequenced_assembly");
    // ECO - SA 超导处理器
    event.create("skynh:superconducting_processor_print", "create:sequenced_assembly");
    //过载处理器
    event.create("skynh:overload_processor", "create:sequenced_assembly");
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
   //蜜脾磨具
   event.create("skynh:honeycomb_mold");
   event.create("skynh:nitro_crystal_block_1");
});
