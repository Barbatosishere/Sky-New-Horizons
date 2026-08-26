// industrialforegoing/generators_removes.js
// ─────────────────────────────────────────────────────────
// 移除 industrialforegoing 自带的低阶发电机 + mycelial 反应堆（17 个）
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'industrialforegoing:pitiful_generator' });
    event.remove({ id: 'industrialforegoing:biofuel_generator' });
    event.remove({ id: 'industrialforegoing:mycelial_furnace' });
    event.remove({ id: 'industrialforegoing:mycelial_pink' });
    event.remove({ id: 'industrialforegoing:mycelial_frosty' });
    event.remove({ id: 'industrialforegoing:mycelial_reactor' });
    event.remove({ id: 'industrialforegoing:mycelial_slimey' });
    event.remove({ id: 'industrialforegoing:mycelial_culinary' });
    event.remove({ id: 'industrialforegoing:mycelial_potion' });
    event.remove({ id: 'industrialforegoing:mycelial_disenchantment' });
    event.remove({ id: 'industrialforegoing:mycelial_ender' });
    event.remove({ id: 'industrialforegoing:mycelial_explosive' });
    event.remove({ id: 'industrialforegoing:mycelial_halitosis' });
    event.remove({ id: 'industrialforegoing:mycelial_magma' });
    event.remove({ id: 'industrialforegoing:mycelial_netherstar' });
    event.remove({ id: 'industrialforegoing:mycelial_death' });
    event.remove({ id: 'industrialforegoing:mycelial_rocket' });
    event.remove({ id: 'industrialforegoing:mycelial_crimed' });
    event.remove({ id: 'industrialforegoing:mycelial_meatallurgic' });
});
