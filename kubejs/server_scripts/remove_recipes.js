// 监听服务器配方加载事件
ServerEvents.recipes(event => {

   // 移除 Powah 熔炉发电机配方
    event.remove({ id: 'powah:crafting/furnator_starter' });
    event.remove({ id: 'powah:crafting/furnator_basic' });
    event.remove({ id: 'powah:crafting/furnator_hardened' });
    event.remove({ id: 'powah:crafting/furnator_blazing' });
    event.remove({ id: 'powah:crafting/furnator_niotic' }); 
    event.remove({ id: 'powah:crafting/furnator_spirited' });
    event.remove({ id: 'powah:crafting/furnator_nitro' });
    // 移除 Powah 热力  发电机 配方
    event.remove({ id: 'powah:crafting/magmator_starter' });
    event.remove({ id: 'powah:crafting/magmator_basic' });
    event.remove({ id: 'powah:crafting/magmator_hardened' });
    event.remove({ id: 'powah:crafting/magmator_blazing' });
    event.remove({ id: 'powah:crafting/magmator_niotic' });
    event.remove({ id: 'powah:crafting/magmator_spirited' });
    event.remove({ id: 'powah:crafting/magmator_nitro' });
    // 移除 Powah 岩浆发电机 配方
    event.remove({ id: 'powah:crafting/thermo_generator_starter' });
    event.remove({ id: 'powah:crafting/thermo_generator_basic' });
    event.remove({ id: 'powah:crafting/thermo_generator_hardened' });
    event.remove({ id: 'powah:crafting/thermo_generator_blazing' });
    event.remove({ id: 'powah:crafting/thermo_generator_niotic' });
    event.remove({ id: 'powah:crafting/thermo_generator_spirited' });
    event.remove({ id: 'powah:crafting/thermo_generator_nitro' });
    // 移除 Powah 太阳能发电机 配方
    event.remove({ id: 'powah:crafting/solar_panel_starter' });
    event.remove({ id: 'powah:crafting/solar_panel_basic' });
    event.remove({ id: 'powah:crafting/solar_panel_hardened' });
    event.remove({ id: 'powah:crafting/solar_panel_blazing' });
    event.remove({ id: 'powah:crafting/solar_panel_niotic' });
    event.remove({ id: 'powah:crafting/solar_panel_spirited' });
    event.remove({ id: 'powah:crafting/solar_panel_nitro' });
    // 移除 低端火力发电机 配方
    event.remove({ id: 'industrialforegoing:pitiful_generator' });  
    // 移除 重复筛网 配方
    event.remove({ id: 'exdeorum:flint_mesh' }); 
    event.remove({ id: 'exdeorum:iron_mesh' }); 
    event.remove({ id: 'exdeorum:golden_mesh' }); 
    event.remove({ id: 'exdeorum:diamond_mesh' }); 
    // 移除 吞噬万籁的寂静 配方
    event.remove({ id: 'extendedae_plus:infinity_biginteger_cell' }); 
    // 移除 燃气发电机 配方
    event.remove({ id: 'mekanismgenerators:generator/gas_burning' }); 
     // 移除 生物能发电机 配方
    event.remove({ id: 'mekanismgenerators:generator/bio' }); 
     // 移除 热力发电机 配方
    event.remove({ id: 'mekanismgenerators:generator/heat' }); 
    // 移除 MEK太阳能发电机 配方
    event.remove({ id: 'mekanismgenerators:generator/solar' }); 
    // 移除 斯特林发电机 配方
    event.remove({ id: 'enderio:stirling_generator' }); 
    // 移除 菌丝体熔炉发电机 配方
    event.remove({ id: 'industrialforegoing:mycelial_furnace' }); 
    // 移除 菌丝体粉红发电机 配方
    event.remove({ id: 'industrialforegoing:mycelial_pink' }); 
    // 移除 菌丝体冰霜发电机 配方
    event.remove({ id: 'industrialforegoing:mycelial_frosty' });
    // 移除 生物燃油发电机 配方
    event.remove({ id: 'industrialforegoing:biofuel_generator' });
    // 移除 横向流体储罐 配方
    event.remove({ id: 'create_connected:crafting/kinetics/fluid_vessel' });
    event.remove({ id: 'create_connected:crafting/kinetics/fluid_vessel_from_conversion' });
    // 移除 强化组件：发电机 配方
    event.remove({ id: 'ironfurnaces:augments/augment_generator' });
    // 移除 运算电路板 配方
    event.remove({ id: 'ae2:inscriber/calculation_processor_print' });
    // 移除 工程电路板 配方
    event.remove({ id: 'ae2:inscriber/engineering_processor_print' });
    // 移除 逻辑电路板 配方
    event.remove({ id: 'ae2:inscriber/logic_processor_print' });
    // 移除 全能链路电路板 配方
    event.remove({ id: 'ae2omnicells:omni_link_circuit_print' });
    // 移除 复杂链路电路板 配方
    event.remove({ id: 'ae2omnicells:complex_link_circuit_print' });
    // 移除 多维展开电路板 配方
    event.remove({ id: 'ae2omnicells:multidimensional_expansion_circuit_print' });
    // 移除 量子链路电路板 配方
    event.remove({ id: 'advanced_ae:quantum_processor_print' });
    // 移除 硅板 配方
    event.remove({ id: 'ae2:inscriber/silicon_print' });
    // 移除 能量电路板 配方
    event.remove({ id: 'appflux:inscriber/energy_print' });
    // 移除 并发电路板 配方
    event.remove({ id: 'extendedae:inscriber/concurrent_print' });  
    // 移除 累积电路板 配方
    event.remove({ id: 'megacells:inscriber/accumulation_processor_print' });
    // 移除 运算处理器 配方
    event.remove({ id: 'ae2:inscriber/logic_processor' });
    // 移除 工程处理器 配方
    event.remove({ id: 'ae2:inscriber/calculation_processor' });
    // 移除 逻辑处理器 配方
    event.remove({ id: 'ae2:inscriber/engineering_processor' });
     // 移除 恩特罗种子 配方
    event.remove({ id: 'extendedae:entro_seed' });
    // 移除 运算压印模板 配方
    event.remove({ id: 'ae2:inscriber/calculation_processor_press' });
    // 移除 工程压印模板 配方
    event.remove({ id: 'ae2:inscriber/engineering_processor_press' });
    // 移除 逻辑压印模板 配方
    event.remove({ id: 'ae2:inscriber/logic_processor_press' });
    // 移除 硅压印模板 配方
    event.remove({ id: 'ae2:inscriber/silicon_press' });
    // 移除 全能链路处理器 配方
    event.remove({ id: 'ae2omnicells:omni_link_processor' });
    // 移除 复杂链路处理器 配方
    event.remove({ id: 'ae2omnicells:complex_link_processor' });
    // 移除 多维展开处理器 配方
    event.remove({ id: 'ae2omnicells:multidimensional_expansion_processor' });
    // 移除 量子处理器 配方
    event.remove({ id: 'advanced_ae:quantum_processor' }); 
    // 移除 能量处理器 配方
    event.remove({ id: 'appflux:inscriber/energy' });  
    // 移除 并发处理器 配方
    event.remove({ id: 'extendedae:inscriber/concurrent_process' }); 
    // 移除 累积处理器 配方
    event.remove({ id: 'megacells:inscriber/accumulation_processor' }); 
     // 移除 无限水 配方
    event.remove({ id: 'extendedae:water_cell' });
    // 移除 无限圆石 配方
    event.remove({ id: 'extendedae:cobblestone_cell' });
    // 移除 中子素种子 配方
     event.remove({ output: 'mysticalagriculture:neutronium_seeds' });
    // 移除 中子素颗粒 配方
    event.remove({ id: 'mysticalagradditions:essence/neutron_nugget' });
    // 移除 红石酸桶 配方
    event.remove({ id: 'immersiveengineering:crafting/redstone_acid' });
    // 移除 充能红石水晶 配方
   event.remove({ id: 'appflux:charger/charge_redstone' });  
    // 移除 灌注合金 配方
   event.remove({ id: 'mekanism:metallurgic_infusing/alloy/infused' });  
    // 移除 强化合金 配方
   event.remove({ id: 'mekanism:metallurgic_infusing/alloy/reinforced' });  
    // 移除 基础控制电路 配方
   event.remove({ id: 'mekanism:control_circuit/basic' });  
    // 移除 高级控制电路 配方
   event.remove({ id: 'mekanism:control_circuit/infused_advanced' });  
   event.remove({ id: 'mekanism:control_circuit/advanced' });  
    // 移除 精英控制电路 配方
   event.remove({ id: 'mekanism:control_circuit/infused_elite' });  
   event.remove({ id: 'mekanism:control_circuit/elite' });  
    // 移除 终极控制电路 配方
   event.remove({ id: 'mekanism:control_circuit/infused_ultimate' });  
   event.remove({ id: 'mekanism:control_circuit/ultimate' });  
    // 移除 绝对控制电路 配方
    event.remove({ id: 'mekanism_extras:control_circuit/infused_absolute' });
    event.remove({ id: 'mekanism_extras:control_circuit/absolute' });
    // 移除 至尊控制电路 配方
     event.remove({ id: 'mekanism_extras:control_circuit/infused_supreme' });
    event.remove({ id: 'mekanism_extras:control_circuit/supreme' });
    // 移除 寰宇支配电路 配方
    event.remove({ id: 'mekanism_extras:control_circuit/infused_cosmic' });
    event.remove({ id: 'mekanism_extras:control_circuit/cosmic' });
    // 移除 悖论无限电路 配方
    event.remove({ id: 'mekanism_extras:control_circuit/infused_infinite' });
    event.remove({ id: 'mekanism_extras:control_circuit/infinite' });
   // 移除 强化黑曜石粉 配方
   event.remove({ id: 'mekanism:processing/refined_obsidian/dust/from_obsidian_dust' });
    // 移除 富集辐光 配方
        event.remove({ id: 'mekanism_extras:chemical_conversion/radiance/from_dust' });
   // 移除 简陋机器框架 配方
   event.remove({ id: 'industrialforegoing:machine_frame_pity' });  
   // 移除 水晶矩阵锭 配方
   event.remove({ id: 'avaritia:crystal_matrix_ingot_normal' });  
   // 移除 钻石晶格 配方
   event.remove({ id: 'avaritia:diamond_lattice_normal' });  
   // 移除 幽匿工作台 配方
   event.remove({ id: 'avaritia:sculk_crafting_table' });  
   // 移除 基础合成组件 配方
   event.remove({ id: 'extendedcrafting:basic_component' });  
   // 移除 高级合成组件 配方
   event.remove({ id: 'extendedcrafting:advanced_component' });  
   // 移除 精英合成组件 配方
   event.remove({ id: 'extendedcrafting:elite_component' });  
   // 移除 终极合成组件 配方
   event.remove({ id: 'extendedcrafting:ultimate_component' });
   // 移除 基础工作台 配方
   event.remove({ id: 'extendedcrafting:basic_table' });
   // 移除 高级工作台 配方
   event.remove({ id: 'extendedcrafting:advanced_table' });
   // 移除 精英工作台 配方
   event.remove({ id: 'extendedcrafting:elite_table' });
   // 移除 终极工作台 配方
   event.remove({ id: 'extendedcrafting:ultimate_table' });
   // 移除 黑铁锭 配方
   event.remove({ id: 'extendedcrafting:black_iron_ingot' });
   // 移除 io制作黑曜石粉末 配方
   event.remove({ id: 'enderio:sag_milling/obsidian' });
   // 移除 合金窑 制作黄铜锭 配方
   event.remove({ id: 'alltheores:alloysmelter/brass/ingot' });
   event.remove({ id: 'alltheores:arcfurnace/brass/ingot' });
   // 移除 铁漏斗 配方
   event.remove({ id: 'quark:tweaks/crafting/utility/misc/easy_hopper' });
   event.remove({ id: 'minecraft:hopper' });
   // 移除 黄铜粉 配方
   event.remove({ id: 'alltheores:crafting/brass/alloy_blending_from_dust' });
   // 移除 实体加速卡 配方
   event.remove({ id: 'extendedae_plus:entity_speed_card_x16' });
   event.remove({ id: 'extendedae_plus:entity_speed_card_x8' });
   event.remove({ id: 'extendedae_plus:entity_speed_card_x4' });
    event.remove({ id: 'extendedae_plus:entity_speed_card_x2' });
   // 移除 锻造模板 配方
    event.remove({ id: 'apotheosis:iron_upgrade_smithing_template' });
    event.remove({ id: 'apotheosis:gold_upgrade_smithing_template' });
    event.remove({ id: 'apotheosis:diamond_upgrade_smithing_template' });
    // 移除 红石工程块 配方
    event.remove({ id: 'immersiveengineering:crafting/rs_engineering' });
    // 移除 轻型工程块 配方
    event.remove({ id: 'immersiveengineering:crafting/light_engineering' });
    // 移除 重型工程块 配方
    event.remove({ id: 'immersiveengineering:crafting/heavy_engineering' });
    // 移除 共震工程块 配方
    event.remove({ id: 'immersiveengineering:crafting/thermoelectric_generator' });
    // 移除 玫瑰石英 配方
    event.remove({ id: 'create:crafting/materials/rose_quartz' });
    // 移除 鱼大 配方
    event.remove({ id: 'extendedae:fishbig' });
    // 移除 动能接受器 配方
    event.remove({ id: 'appliedcreate:kinetic_energy_acceptor' });
    // 移除 黄铜样板 配方
    event.remove({ id: 'appliedcreate:brass_pattern_provider' });
    // 移除 热传导发电机 配方
    event.remove({ id: 'immersiveengineering:thermoelectric_generator' });
    // 移除 琥珀金锭 配方
        event.remove({ id: 'alltheores:arcfurnace/electrum/ingot' });
        event.remove({ id: 'alltheores:alloysmelter/electrum/ingot' });
    // 移除 导电合金 配方
        event.remove({ id: 'casting:mixer/conductive_alloy' });
    // 移除 黄铜 配方
        event.remove({ id: 'casting:mixer/brass' });
    // 移除 震动合金 配方
        event.remove({ id: 'casting:mixer/vibrant_alloy' });
    // 移除 脉冲合金 配方
        event.remove({ id: 'casting:mixer/pulsating_alloy' });
    // 移除 充能合金 配方
        event.remove({ id: 'casting:mixer/energetic_alloy' });
    // 移除 末影锭 配方
        event.remove({ id: 'alltheores:arcfurnace/enderium/ingot' });
        event.remove({ id: 'casting:mixer/enderium' });
    // 移除 信素锭 配方
        event.remove({ id: 'alltheores:arcfurnace/signalum/ingot' });
        event.remove({ id: 'casting:mixer/signalum' });
    // 移除 青铜锭 配方
        event.remove({ id: 'alltheores:arcfurnace/bronze/ingot' });
        event.remove({ id: 'alltheores:arcfurnace/bronze/ingot' });
    // 移除 铜合金 配方
        event.remove({ id: 'mysticalagriculture:copper_alloy' });
        event.remove({ id: 'mysticalagriculture:essence/enderio/copper_alloy_ingot' });
    // 移除 导电合金 配方
        event.remove({ id: 'casting:mixer/conductive_alloy' });
    // 移除 风力发电机 配方
        event.remove({ id: 'makanismgenerators:generator/wind' });
    // 移除 发电机 配方
        event.remove({ id: 'integrateddynamics:crafting/coal_generator' });
    // 移除 蜜蜂发电机 配方
        event.remove({ id: 'productivebees:honey_generator' });
    // 移除 原油发电机 配方
        event.remove({ id: 'actuallyadditions:oil_generator' });
    // 移除 热能发电机 配方
        event.remove({ id: 'actuallyadditions:heat_collector' });
    // 移除 煤炭发电机 配方
        event.remove({ id: 'actuallyadditions:coal_generator' });
    // 移除 砠叶发电机 配方
        event.remove({ id: 'actuallyadditions:leaf_generator' });
    // 移除 风力发电机 配方
        event.remove({ id: 'mekanismgenerators:generator/wind' });
    // 移除 创造板条箱 配方
        event.remove({ id: 'avaritia:mek_creative_bin' });
    // 移除 创造流体储罐 配方
        event.remove({ id: 'avaritia:mek_creative_fluid_tank' });
    // 移除 创造化学品储罐 配方
        event.remove({ id: 'avaritia:mek_creative_chemical_tank' });
    // 移除 创造能源原件 配方
        event.remove({ id: 'avaritia:ae2_creative_energy_cell' });
    // 移除 创造能源 配方
        event.remove({ id: 'avaritia:eio_creative_power' });
    // 移除 大型燃气发电机 配方
        event.remove({ id: 'mekmm:large_gas_burning_generator' });
    // 移除 大型热力发电机 配方
        event.remove({ id: 'mekmm:large_heat_generator' });
    // 移除 地热能发电单元 配方
        event.remove({ id: 'mekanismgenerators:module_geothermal_generator_unit' });
    // 移除 锇压缩机 配方
        event.remove({ id: 'mekanism:combiner' });
    // 移除 水槽 配方
        event.remove({ id: 'cookingforblockheads:sink' });
    // 移除 无用 配方
    event.remove({ output: 'ironfurnaces:upgrade_allthemodium' });
  

    // --- 移除所有原有生成器配方（按输出物品）---
    event.remove({ output: 'cobblegengalore:block_gen_stone' });
    event.remove({ output: 'cobblegengalore:block_gen_copper' });
    event.remove({ output: 'cobblegengalore:block_gen_iron' });
    event.remove({ output: 'cobblegengalore:block_gen_gold' });
    event.remove({ output: 'cobblegengalore:block_gen_emerald' });
    event.remove({ output: 'cobblegengalore:block_gen_diamond' });
    event.remove({ output: 'cobblegengalore:block_gen_netherite' });


    // --- 添加新的生成器配方（升级链：石头→铜→铁→金→绿宝石→钻石→下界合金）---

   // 石头生成器（需要 8 个压缩原石，中间留空）
event.shaped('cobblegengalore:block_gen_stone', [
    '###',
    '# #',
    '###'
], {
    '#': 'exdeorum:compressed_cobblestone'
});

    // 铜生成器（需要石头生成器）
    event.shaped('cobblegengalore:block_gen_copper', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:copper_block',
        A: 'cobblegengalore:block_gen_stone',
        B: 'minecraft:copper_ingot'
    });

    // 铁生成器（需要铜生成器）
    event.shaped('cobblegengalore:block_gen_iron', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:iron_block',
        A: 'cobblegengalore:block_gen_copper',
        B: 'minecraft:iron_ingot'
    });

    // 金生成器（需要铁生成器）
    event.shaped('cobblegengalore:block_gen_gold', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:gold_block',
        A: 'cobblegengalore:block_gen_iron',
        B: 'minecraft:gold_ingot'
    });

    // 绿宝石生成器（需要金生成器）
    event.shaped('cobblegengalore:block_gen_emerald', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:emerald_block',
        A: 'cobblegengalore:block_gen_gold',
        B: 'minecraft:emerald'
    });

    // 钻石生成器（需要绿宝石生成器）
    event.shaped('cobblegengalore:block_gen_diamond', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:diamond_block',
        A: 'cobblegengalore:block_gen_emerald',
        B: 'minecraft:diamond'
    });

    // 下界合金生成器（需要钻石生成器）
    event.shaped('cobblegengalore:block_gen_netherite', [
        'DDD',
        'BAB',
        'DDD'
    ], {
        D: 'minecraft:netherite_block',
        A: 'cobblegengalore:block_gen_diamond',
        B: 'minecraft:netherite_ingot'
    });

   // 反物质
event.shaped('mekanism:pellet_antimatter', [
    '###',
    '###',
    '###'
], {
    '#': 'mek:mekanism_fragment_antimatter'
});
event.shaped('mek:mekanism_fragment_antimatter', [
    '###',
    '###',
    '###'
], {
    '#': 'mek:mekanism_small_antimatter'
});
event.shaped('mek:mekanism_small_antimatter', [
    '###',
    '###',
    '###'
], {
    '#': 'mek:mekanism_tiny_antimatter'
});
event.shaped('mekanismgenerators:solar_generator', [
    'DDD',
    'B B',
    'CEC'
], {
    D: 'mekanismgenerators:solar_panel',
    B: 'mekanism:ingot_osmium',  
    C: 'mekanism:pellet_polonium',
    E: 'mekanism:energy_tablet'
});
//水槽
event.shaped('cookingforblockheads:sink', [
    'AAA',
    'BCB',
    'BBB'
], {
    A: 'avaritia:neutron_ingot',
    B: 'minecraft:terracotta',  
    C: 'extendedae:infinity_water_cell'
});
// 恩特罗种子
event.shaped('extendedae:entro_seed', [
    'ABC',
    'DEF',
    'HIG'
], {
    A: 'ars_nouveau:wilden_tribute',
    B: 'industrialforegoing:machine_frame_advanced',
    C: 'mysticalagradditions:insanium_gemstone', 
    D: 'pneumaticcraft:printed_circuit_board',
    E: 'occultism:soul_gem',
    F: 'apotheosis:mythic_material',
    H: 'mekanism:block_refined_obsidian',
    I: 'mekanism:pellet_antimatter',
    G: 'draconicevolution:small_chaos_frag' 
});
// 无限圆石
event.shaped('extendedae:infinity_cobblestone_cell', [
    'DAD',
    'BCB',
    'DAD'
], {
    D: 'ae2omnicells:multidimensional_expansion_processor',  
    B: 'minecraft:water_bucket',                               
    C: 'minecraft:lava_bucket',
    A: 'ae2:cell_component_256k'     
}); 
   // 无限水
event.shaped('extendedae:infinity_water_cell', [
    'DAD',
    'BCB',
    'DAD'
], {
    D: 'ae2omnicells:multidimensional_expansion_processor',
    B: 'minecraft:water_bucket',
    A: 'ae2:cell_component_256k',
    C: 'avaritia:neutron_compressor'
});
   
   //离魂原石
event.shaped('mysticalagriculture:soulstone_cobble', [
    'AB ',
    '   ',
    '   '
], {
    B: 'mysticalagriculture:soulium_dust',
    A: 'minecraft:cobblestone'
});
   
   //地热能发电单元
event.shaped('mysticalagriculture:soulstone_cobble', [
    'ABA',
    'ACA',
    'DDD'
], {
    A: 'mekanism:alloy_reinforced',
    B: 'minecraft:lava_bucket',
    C: 'mekanism:module_base',
    D: 'mekanism:pellet_polonium'
});
   
   //融合机
event.shaped('mekanism:combiner', [
    'ABA',
    'CDC',
    'ABA'
], {
    A: 'mekanism:alloy_atomic',
    B: 'mekanism:ultimate_control_circuit',
    C: 'minecraft:piston',
    D: 'mekanism:steel_casing'
});

// 创造模式压缩机
event.shaped('pneumaticcraft:creative_compressor', [
    'DAD',
    'BCB',
    'DAD'
], {
    D: 'ae2omnicells:multidimensional_expansion_processor',
    B: 'pneumaticcraft:compressed_iron_block',  
    A: 'ae2:cell_component_256k',
    C: 'avaritia:denser_neutron_compressor'            
});
// 创造模式压缩铁块
event.shaped('pneumaticcraft:creative_compressed_iron_block', [
    'DAD',
    'BCB',
    'DAD'
], {
    D: 'ae2omnicells:multidimensional_expansion_processor',
    A: 'pneumaticcraft:compressed_iron_block',   
    B: 'ae2:cell_component_256k',
    C: 'avaritia:denser_neutron_compressor'           
});
// 基础合成组件
event.shaped('extendedcrafting:basic_component', [
    'DED',
    'BCB',
    'DAD'
], {
    D: 'ae2:cell_component_4k',
    E: 'create:whisk',   
    B: 'pneumaticcraft:compressed_iron_block',
    A: 'create:propeller',
    C: 'extendedcrafting:black_iron_slate'           
});
// 高级合成组件
event.shaped('extendedcrafting:advanced_component', [
    'DBD',
    'ACA',
    'DBD'
], {
    D: 'ae2:cell_component_16k',
    A: 'pneumaticcraft:compressed_iron_block',   
    B: 'immersiveengineering:storage_electrum',
    C: 'extendedcrafting:basic_component'           
});
// 精英合成组件
event.shaped('extendedcrafting:elite_component', [
    'DBD',
    'ACA',
    'DBD'
], {
    D: 'ae2:cell_component_64k',
    A: 'pneumaticcraft:compressed_iron_block',   
    B: 'avaritia:diamond_lattice',
    C: 'extendedcrafting:advanced_component'           
});
// 终极合成组件
event.shaped('extendedcrafting:ultimate_component', [
    'DBD',
    'ACA',
    'DBD'
], {
    D: 'ae2:cell_component_256k',
    A: 'pneumaticcraft:compressed_iron_block',   
    B: 'extendedae:entro_ingot',
    C: 'extendedcrafting:elite_component'           
});    
// 铁漏斗
event.shaped('minecraft:hopper', [
    'A A',
    'ABA',
    ' A '
], {
    A: 'minecraft:iron_ingot',   
    B: 'woodenhopper:wooden_hopper'         
});    
// 锻造模板 铁升级
event.shaped('apotheosis:iron_upgrade_smithing_template', [
    ' A ',
    'BDB',
    'BDB'
], {
    A: 'apotheosis:common_material',   
    B: 'minecraft:iron_ingot' ,
    D:'apotheosis:gem_fused_slate' 
});   
// 锻造模板 金升级
event.shaped('apotheosis:gold_upgrade_smithing_template', [
    ' A ',
    'BCB',
    'BDB'
], {
    A: 'apotheosis:uncommon_material',   
    B: 'minecraft:gold_ingot' ,
    C:'apotheosis:iron_upgrade_smithing_template',
    D:'apotheosis:gem_fused_slate' 
});   
 // 锻造模板 钻石升级
 event.shaped('apotheosis:diamond_upgrade_smithing_template', [
    ' A ',
    'BCB',
    'BDB'
], {
    A: 'apotheosis:rare_material',   
    B: 'minecraft:diamond' ,
    C:'apotheosis:gold_upgrade_smithing_template',
    D:'apotheosis:gem_fused_slate'        
    });  
// 锻造模板 下界升级
event.shaped('minecraft:netherite_upgrade_smithing_template', [
    ' A ',
    'BCB',
    'BDB'
], {
    A: 'apotheosis:epic_material',   
    B: 'minecraft:netherite_ingot' ,
    C:'apotheosis:diamond_upgrade_smithing_template',
    D:'apotheosis:gem_fused_slate'        
    });  

    // box 升级
event.shaped('mekanism:cardboard_box', [
    'AAA',
    'A A',
    'AAA'
], {
    A: 'minecraft:paper'
    });  
    // 鱼大
event.shaped('extendedae:fishbig', [
    'ABC',
    'DEF',
    'GHI'
], {
    A: 'pneumaticcraft:creative_compressed_iron_block',
    B: 'draconicevolution:creative_capacitor',  
    C: 'pneumaticcraft:creative_compressor',
    D: 'mekanism:creative_chemical_tank',
    E: 'mekanism:creative_bin',
    F: 'mekanism:creative_fluid_tank',
    G: 'enderio:creative_power',
    H: 'ae2:creative_energy_cell',
    I: 'draconicevolution:creative_op_capacitor'            
});
// 添加幽匿工作台配方（Extended Crafting 高级工作台 5x5 合成）
event.recipes.extendedcrafting.shaped_table('avaritia:sculk_crafting_table', [
    'AAAAA',
    'ABBBA',
    'ABBBA',
    'CBBBC',
    'CCCCC'
], {
    A: 'minecraft:sculk_shrieker',
    B: 'avaritia:double_compressed_crafting_table',
    C: 'minecraft:sculk_sensor'
});// 添加简陋机器框架 配方
event.recipes.extendedcrafting.shaped_table('industrialforegoing:machine_frame_pity', [
    'AAAAA',
    'ABBBA',
    'ABCBA',
    'ABBBA',
    'AAAAA'
], {
    A: '#minecraft:logs',
    B: 'pneumaticcraft:compressed_iron_block',
    C: 'minecraft:redstone_block'
});
// 添加 基础控制电路 配方
event.recipes.extendedcrafting.shaped_table('mekanism:basic_control_circuit', [
    'ABA',
    'DED',
    'QWQ',
], {
    A: 'create:electron_tube',
    B: 'create:whisk',
    D: 'create:brass_hand',
    E: 'create:precision_mechanism',
    Q: 'create:transmitter',
    W: 'create:propeller'
    
});
// 添加 高级控制电路 配方
event.recipes.extendedcrafting.shaped_table('mekanism:advanced_control_circuit', [
    'CCCCC',
    'CDDDC',
    'CDEDC',
    'CDDDC',
    'CCCCC'
], {
    C: 'mekanism:alloy_infused',
    D: 'mekanism:basic_control_circuit',
    E: 'minecraft:redstone_block'
});

// 添加 精英控制电路 配方
event.recipes.extendedcrafting.shaped_table('mekanism:elite_control_circuit', [
     'CCCCC',
    'CDDDC',
    'CDEDC',
    'CDDDC',
    'CCCCC'
], {
    C: 'mekanism:alloy_reinforced',
    D: 'mekanism:advanced_control_circuit',
    E: 'minecraft:redstone_block'
});

// 添加 终极控制电路 配方
event.recipes.extendedcrafting.shaped_table('mekanism:ultimate_control_circuit', [
    'CCCCC',
    'CDDDC',
    'CDEDC',
    'CDDDC',
    'CCCCC'
    ], {
    C: 'mekanism:alloy_atomic',
    D: 'mekanism:elite_control_circuit',    
    E: 'minecraft:redstone_block'
});

// 添加 绝对控制电路 配方
event.recipes.extendedcrafting.shaped_table('mekanism_extras:absolute_control_circuit', [
    'CCCCC',
    'CDDDC',
    'CDEDC',
    'CDDDC',
    'CCCCC'
    ], {
    C: 'mekanism_extras:alloy_radiance',
    D: 'mekanism:ultimate_control_circuit',    
    E: 'minecraft:redstone_block'
});

// 添加 至尊控制电路 配方
event.recipes.extendedcrafting.shaped_table('mekanism_extras:supreme_control_circuit', [
    'CCCCC',
    'CDDDC',
    'CDEDC',
    'CDDDC',
    'CCCCC'
    ], {
    C: 'mekanism_extras:alloy_thermonuclear',
    D: 'mekanism_extras:absolute_control_circuit',    
    E: 'minecraft:redstone_block'
});

// 添加 寰宇支配电路 配方
event.recipes.extendedcrafting.shaped_table('mekanism_extras:cosmic_control_circuit', [
    'CCCCC',
    'CDDDC',
    'CDEDC',
    'CDDDC',
    'CCCCC'
    ], {
    C: 'mekanism_extras:alloy_shining',
    D: 'mekanism_extras:supreme_control_circuit',    
    E: 'minecraft:redstone_block'
});

// 添加 悖论无限电路 配方
event.recipes.extendedcrafting.shaped_table('mekanism_extras:infinite_control_circuit', [
    'CCCCC',
    'CDDDC',
    'CDEDC',
    'CDDDC',
    'CCCCC'
    ], {
    C: 'mekanism_extras:alloy_spectrum',
    D: 'mekanism_extras:cosmic_control_circuit',    
    E: 'minecraft:redstone_block'
});

});