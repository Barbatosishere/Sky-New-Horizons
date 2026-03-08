// 服务器配方事件监听器 - 用于添加自定义的 Create 序列装配配方
ServerEvents.recipes(event => {
    // 解构出 Create 的配方构建器，方便后续使用
    const {create} = event.recipes

    // ---------- 定义所有中间产物（电路板打印品）的常量 ----------
    const pep = 'skynh:printed_engineering_processor';   // 工程处理器打印件
    const plp = 'skynh:printed_logic_processor';         // 逻辑处理器打印件
    const clcp = 'skynh:complex_link_circuit_print';     // 复杂链路电路板打印件
    const cpp = 'skynh:concurrent_processor_print';      // 并发处理器打印件
    const mecp = 'skynh:multidimensional_expansion_circuit_print'; // 多维展开电路板打印件
    const olcp = 'skynh:omni_link_circuit_print';         // 全能链路电路板打印件
    const pap = 'skynh:printed_accumulation_processor';   // 累积处理器打印件
    const ps = 'skynh:printed_silicon';                    // 硅板打印件
    const pqp = 'skynh:printed_quantum_processor';         // 量子处理器打印件
    const penp = 'skynh:printed_energy_processor';         // 能量处理器打印件
    const pcp = 'skynh:printed_calculation_processor';     // 计算处理器打印件
    const aeps = 'ae2:printed_silicon';                     // AE2 的硅板（用于后续组合）

    // -------------------- 第一组：从基础材料制作电路板打印件 --------------------
    // 每个配方使用 3 次循环：先压印，再压制，得到最终的打印件

    // 工程处理器打印件：钻石 + 工程压印模板 → 3 次压印+压制
    create.sequenced_assembly(
        [
            "ae2:printed_engineering_processor"   // 最终输出物品
        ],
        "minecraft:diamond",                        // 基础输入物品（每次循环消耗一个）
        [
            create.deploying(pep,[pep,'ae2:engineering_processor_press']).keepHeldItem(), // 用压印模板加工
            create.pressing(pep,pep)                                                       // 压制
        ]
    )
    .transitionalItem(pep)    // 指定中间过渡物品（在 JEI 中显示）
    .loops(3)                 // 循环次数

    // 逻辑处理器打印件：金锭 + 逻辑压印模板 → 3 次
    create.sequenced_assembly(
        [
            "ae2:printed_logic_processor"
        ],
        "minecraft:gold_ingot",
        [
            create.deploying(plp,[plp,'ae2:logic_processor_press']).keepHeldItem(),
            create.pressing(plp,plp)
        ]
    )
    .transitionalItem(plp)
    .loops(3)

    // 计算处理器打印件：赛特斯石英水晶 + 计算压印模板 → 3 次
    create.sequenced_assembly(
        [
            "ae2:printed_calculation_processor"
        ],
        "ae2:certus_quartz_crystal",
        [
            create.deploying(pcp,[pcp,'ae2:calculation_processor_press']).keepHeldItem(),
            create.pressing(pcp,pcp)
        ]
    )
    .transitionalItem(pcp)
    .loops(3)

    // 硅板打印件：硅 + 硅压印模板 → 3 次
    create.sequenced_assembly(
        [
            "ae2:printed_silicon"
        ],
        "ae2:silicon",
        [
            create.deploying(ps,[ps,'ae2:silicon_press']).keepHeldItem(),
            create.pressing(ps,ps)
        ]
    )
    .transitionalItem(ps)
    .loops(3)

    // 能量处理器打印件：充能红石 + 能量压印模板 → 3 次
    create.sequenced_assembly(
        [
            "appflux:printed_energy_processor"
        ],
        "appflux:charged_redstone",
        [
            create.deploying(penp,[penp,'appflux:energy_processor_press']).keepHeldItem(),
            create.pressing(penp,penp)
        ]
    )
    .transitionalItem(penp)
    .loops(3)

    // 并发处理器打印件：恩特罗水晶 + 并发压印模板 → 3 次
    create.sequenced_assembly(
        [
            "extendedae:concurrent_processor_print"
        ],
        "extendedae:entro_crystal",
        [
            create.deploying(cpp,[cpp,'extendedae:concurrent_processor_press']).keepHeldItem(),
            create.pressing(cpp,cpp)
        ]
    )
    .transitionalItem(cpp)
    .loops(3)

    // 量子处理器打印件：量子合金 + 量子压印模板 → 3 次
    create.sequenced_assembly(
        [
            "advanced_ae:printed_quantum_processor"
        ],
        "advanced_ae:quantum_alloy",
        [
            create.deploying(pqp,[pqp,'advanced_ae:quantum_processor_press']).keepHeldItem(),
            create.pressing(pqp,pqp)
        ]
    )
    .transitionalItem(pqp)
    .loops(3)

    // 累积处理器打印件：天空钢锭 + 累积压印模板 → 3 次
    create.sequenced_assembly(
        [
            "megacells:printed_accumulation_processor"
        ],
        "megacells:sky_steel_ingot",
        [
            create.deploying(pap,[pap,'megacells:accumulation_processor_press']).keepHeldItem(),
            create.pressing(pap,pap)
        ]
    )
    .transitionalItem(pap)
    .loops(3)

    // 全能链路电路板打印件：末影锭 + 全能链路压印模板 → 3 次
    create.sequenced_assembly(
        [
            "ae2omnicells:omni_link_circuit_print"
        ],
        "ae2omnicells:ender_ingot",
        [
            create.deploying(olcp,[olcp,'ae2omnicells:omni_link_print_press']).keepHeldItem(),
            create.pressing(olcp,olcp)
        ]
    )
    .transitionalItem(olcp)
    .loops(3)

    // 多维展开电路板打印件：奇点 + 多维展开压印模板 → 3 次
    create.sequenced_assembly(
        [
            "ae2omnicells:multidimensional_expansion_circuit_print"
        ],
        "ae2:singularity",
        [
            create.deploying(mecp,[mecp,'ae2omnicells:multidimensional_expansion_print_press']).keepHeldItem(),
            create.pressing(mecp,mecp)
        ]
    )
    .transitionalItem(mecp)
    .loops(3)

    // 复杂链路电路板打印件：下界合金碎片 + 复杂链路压印模板 → 3 次
    create.sequenced_assembly(
        [
            "ae2omnicells:complex_link_circuit_print"
        ],
        "minecraft:netherite_scrap",
        [
            create.deploying(clcp,[clcp,'ae2omnicells:complex_link_print_press']).keepHeldItem(),
            create.pressing(clcp,clcp)
        ]
    )
    .transitionalItem(clcp)
    .loops(3)

    // -------------------- 第二组：将打印件与硅板组合，并注入红石酸，制成最终处理器 --------------------
    // 每个配方循环 1 次，但包含多次操作：部署硅板、三次注液+压制

    // 工程处理器：工程处理器打印件 + 硅板 → 红石酸注液三次后压制
    create.sequenced_assembly(
        [
            "ae2:engineering_processor"
        ],
        "ae2:printed_engineering_processor",
        [
            create.deploying(pep,[pep,aeps]),                                   // 先装上硅板
            create.filling(pep,[pep,Fluid.of('immersiveengineering:redstone_acid',100)]), // 注入红石酸
            create.pressing(pep,pep),                                          // 压制
            create.filling(pep,[pep,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(pep,pep),
            create.filling(pep,[pep,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(pep,pep)
        ]
    )
    .transitionalItem(pep)
    .loops(1)

    // 逻辑处理器：类似工程处理器
    create.sequenced_assembly(
        [
            "ae2:logic_processor"
        ],
        "ae2:printed_logic_processor",
        [
            create.deploying(plp,[plp,aeps]),
            create.filling(plp,[plp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(plp,plp),
            create.filling(plp,[plp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(plp,plp),
            create.filling(plp,[plp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(plp,plp)
        ]
    )
    .transitionalItem(plp)
    .loops(1)

    // 计算处理器
    create.sequenced_assembly(
        [
            "ae2:calculation_processor"
        ],
        "ae2:printed_calculation_processor",
        [
            create.deploying(pcp,[pcp,aeps]),
            create.filling(pcp,[pcp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(pcp,pcp),
            create.filling(pcp,[pcp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(pcp,pcp),
            create.filling(pcp,[pcp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(pcp,pcp)
        ]
    )
    .transitionalItem(pcp)
    .loops(1)

    // 能量处理器
    create.sequenced_assembly(
        [
            "appflux:energy_processor"
        ],
        "appflux:printed_energy_processor",
        [
            create.deploying(penp,[penp,aeps]),
            create.filling(penp,[penp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(penp,penp),
            create.filling(penp,[penp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(penp,penp),
            create.filling(penp,[penp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(penp,penp)
        ]
    )
    .transitionalItem(penp)
    .loops(1)

    // 复杂链路处理器
    create.sequenced_assembly(
        [
            "ae2omnicells:complex_link_processor"
        ],
        "ae2omnicells:complex_link_circuit_print",
        [
            create.deploying(clcp,[clcp,aeps]),
            create.filling(clcp,[clcp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(clcp,clcp),
            create.filling(clcp,[clcp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(clcp,clcp),
            create.filling(clcp,[clcp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(clcp,clcp)
        ]
    )
    .transitionalItem(clcp)
    .loops(1)

    // 并发处理器
    create.sequenced_assembly(
        [
            "extendedae:concurrent_processor"
        ],
        "extendedae:concurrent_processor_print",
        [
            create.deploying(cpp,[cpp,aeps]),
            create.filling(cpp,[cpp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(cpp,cpp),
            create.filling(cpp,[cpp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(cpp,cpp),
            create.filling(cpp,[cpp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(cpp,cpp)
        ]
    )
    .transitionalItem(cpp)
    .loops(1)

    // 多维展开处理器
    create.sequenced_assembly(
        [
            "ae2omnicells:multidimensional_expansion_processor"
        ],
        "ae2omnicells:multidimensional_expansion_circuit_print",
        [
            create.deploying(mecp,[mecp,aeps]),
            create.filling(mecp,[mecp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(mecp,mecp),
            create.filling(mecp,[mecp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(mecp,mecp),
            create.filling(mecp,[mecp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(mecp,mecp)
        ]
    )
    .transitionalItem(mecp)
    .loops(1)

    // 全能链路处理器
    create.sequenced_assembly(
        [
            "ae2omnicells:omni_link_processor"
        ],
        "ae2omnicells:omni_link_circuit_print",
        [
            create.deploying(olcp,[olcp,aeps]),
            create.filling(olcp,[olcp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(olcp,olcp),
            create.filling(olcp,[olcp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(olcp,olcp),
            create.filling(olcp,[olcp,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(olcp,olcp)
        ]
    )
    .transitionalItem(olcp)
    .loops(1)

    // 累积处理器
    create.sequenced_assembly(
        [
            "megacells:accumulation_processor"
        ],
        "megacells:printed_accumulation_processor",
        [
            create.deploying(pap,[pap,aeps]),
            create.filling(pap,[pap,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(pap,pap),
            create.filling(pap,[pap,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(pap,pap),
            create.filling(pap,[pap,Fluid.of('immersiveengineering:redstone_acid',100)]),
            create.pressing(pap,pap)
        ]
    )
    .transitionalItem(pap)
    .loops(1)

    // 量子处理器
    create.sequenced_assembly(
        [
        "advanced_ae:quantum_processor"
        ],
    "advanced_ae:printed_quantum_processor",
    [
        create.deploying(pqp,[pqp,aeps]),
        create.filling(pqp,[pqp,Fluid.of('immersiveengineering:redstone_acid',100)]), 
        create.pressing(pqp,pqp)
        ]
    )
.transitionalItem(pqp)
.loops(3)

// 压缩铁锭：通过五次冲压铁块获得压缩铁锭
const incompleteIron = 'skynh:incomplete_compressed_iron'; 

create.sequenced_assembly(
    ["pneumaticcraft:ingot_iron_compressed"],
    "minecraft:iron_block",
    [
        create.pressing(incompleteIron, 'minecraft:iron_block'),
        create.pressing(incompleteIron, incompleteIron)
    ]
)
.transitionalItem(incompleteIron)
.loops(5);
// 轻型工程块：铜锭 + 机械零件 + 铁板金属（循环4次）
const incomplete_light = 'skynh:incomplete_light_engineering';
create.sequenced_assembly(
    ['immersiveengineering:light_engineering'],
    'minecraft:copper_ingot',
    [
        create.deploying(incomplete_light, [incomplete_light, 'immersiveengineering:component_iron']),
        create.deploying(incomplete_light, [incomplete_light, 'immersiveengineering:sheetmetal_iron'])
    ]
)
.transitionalItem(incomplete_light)
.loops(4);

// 红石工程块：铜锭 + 红石 + 铁板金属（循环4次）
const incomplete_rs = 'skynh:incomplete_rs_engineering';
create.sequenced_assembly(
    ['immersiveengineering:rs_engineering'],
    'minecraft:copper_ingot',
    [
        create.deploying(incomplete_rs, [incomplete_rs, 'minecraft:redstone']),
        create.deploying(incomplete_rs, [incomplete_rs, 'immersiveengineering:sheetmetal_iron'])
    ]
)
.transitionalItem(incomplete_rs)
.loops(4);
// 重型工程块：琥珀金锭 + 钢机械零件 + 钢板金属（循环4次）
const incomplete_heavy = 'skynh:incomplete_heavy_engineering';
create.sequenced_assembly(
    ['immersiveengineering:heavy_engineering'],
    'immersiveengineering:ingot_electrum',
    [
        create.deploying(incomplete_heavy, [incomplete_heavy, 'immersiveengineering:component_steel']),
        create.deploying(incomplete_heavy, [incomplete_heavy, 'immersiveengineering:sheetmetal_steel'])
    ]
)
.transitionalItem(incomplete_heavy)
.loops(4);

// 共振工程块：回响碎片 + 高级电子元件 + 铅板金属（循环4次）
const incomplete_resonanz = 'skynh:incomplete_resonanz_engineering';
create.sequenced_assembly(
    ['immersiveengineering:resonanz_engineering'],
    'minecraft:echo_shard',
    [
        create.deploying(incomplete_resonanz, [incomplete_resonanz, 'immersiveengineering:component_electronic_adv']),
        create.deploying(incomplete_resonanz, [incomplete_resonanz, 'immersiveengineering:sheetmetal_lead'])
    ]
)
.transitionalItem(incomplete_resonanz)
.loops(4);
}); 