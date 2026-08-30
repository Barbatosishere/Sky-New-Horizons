// server_scripts/extendedae_plus/removes.js
ServerEvents.recipes(event => {
    // 移除配方 extendedae_plus:infinity_biginteger_cell
    event.remove({ id: 'extendedae_plus:infinity_biginteger_cell' });
    // 移除配方 extendedae_plus:entity_speed_card
    event.remove({ id: 'extendedae_plus:entity_speed_card' });
});
