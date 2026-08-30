// server_scripts/sophisticatedbackpacks/removes.js
ServerEvents.recipes(event => {
    // 移除配方 sophisticatedbackpacks:stack_upgrade_omega_tier
    event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_omega_tier' });
});
