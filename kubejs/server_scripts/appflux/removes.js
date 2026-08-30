// server_scripts/appflux/removes.js
ServerEvents.recipes(event => {
    // 移除配方 appflux:inscriber/energy_print
    event.remove({ id: 'appflux:inscriber/energy_print' });
    // 移除配方 appflux:inscriber/energy
    event.remove({ id: 'appflux:inscriber/energy' });
    // 移除配方 appflux:charger/charge_redstone
    event.remove({ id: 'appflux:charger/charge_redstone' });
});
