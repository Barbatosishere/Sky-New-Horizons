ServerEvents.recipes(event => {
  // 定义输入→输出列表，支持以 # 开头的标签
  const pairs = [
    ['minecraft:gold_ingot', 'create:golden_sheet'],
    ['minecraft:iron_ingot', 'create:iron_sheet'],
    ['create:brass_ingot', 'create:brass_sheet'],
    ['minecraft:copper_ingot', 'create:copper_sheet'],
    ['create_better_motors:reggarfonite_gem', 'create_better_motors:reggarfonite_sheet'],
  ];

  // 定义模具列表（每个模具用一个数组包裹，解构时取第一个元素）
  const molds = [
    ['immersiveengineering:mold_plate'],
    ['casting:plate_mold']
  ];

  // 外层循环：遍历每一对输入/输出
  for (const [ing, out] of pairs) {
    // 构建 input 对象（支持物品ID或标签）
    const input = ing.startsWith('#')
      ? { tag: ing.slice(1), count: 1 }
      : { item: ing, count: 1 };

    // 内层循环：遍历每一种模具
    for (const [moldItem] of molds) {
      // 生成一个 stamper 配方
      event.custom({
        type: 'mekmm:stamper',
        input: input,
        mold: { item: moldItem },   
        output: { count: 1, id: out }
      }).id(`kubejs:mekmm/${out.replace(':', '_')}_from_stamper_${moldItem.replace(':', '_')}`);
    }
  }
});