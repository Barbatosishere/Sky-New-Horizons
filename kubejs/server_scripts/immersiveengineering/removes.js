// immersiveengineering/removes.js
// ─────────────────────────────────────────────────────────
// 移除 Immersive Engineering 部分原版配方（玩家通过其他途径获得）
//   - 红石酸桶（来自其他途径）
//   - 铁棒
//   - 4 个工程块
//   - 热传导发电机
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'immersiveengineering:crafting/redstone_acid' });
    event.remove({ id: 'immersiveengineering:crafting/stick_iron' });
    event.remove({ id: 'immersiveengineering:crafting/rs_engineering' });
    event.remove({ id: 'immersiveengineering:crafting/light_engineering' });
    event.remove({ id: 'immersiveengineering:crafting/heavy_engineering' });
    event.remove({ id: 'immersiveengineering:crafting/resonanz_engineering' });
    event.remove({ id: 'immersiveengineering:thermoelectric_generator' });
});
