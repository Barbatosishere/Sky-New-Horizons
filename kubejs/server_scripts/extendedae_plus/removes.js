// server_scripts/extendedae_plus/removes.js
ServerEvents.recipes(event => {
    // 移除配方 extendedae_plus:infinity_biginteger_cell
    event.remove({ id: 'extendedae_plus:infinity_biginteger_cell' });
    // 移除实体加速卡各倍率配方（物品 ID 是 entity_speed_card，配方 ID 带倍率后缀）
    event.remove({ id: 'extendedae_plus:entity_speed_card_x2' });
    event.remove({ id: 'extendedae_plus:entity_speed_card_x4' });
    event.remove({ id: 'extendedae_plus:entity_speed_card_x8' });
    event.remove({ id: 'extendedae_plus:entity_speed_card_x16' });

});
