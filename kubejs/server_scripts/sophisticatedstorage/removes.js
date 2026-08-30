// server_scripts/sophisticatedstorage/removes.js
ServerEvents.recipes(event => {
    // 移除配方 sophisticatedstorage:stack_upgrade_omega_tier
    event.remove({ id: 'sophisticatedstorage:stack_upgrade_omega_tier' });
});
