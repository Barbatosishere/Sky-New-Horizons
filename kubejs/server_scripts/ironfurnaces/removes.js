// server_scripts/ironfurnaces/removes.js
ServerEvents.recipes(event => {
    // 移除配方 ironfurnaces:augment_generator
    event.remove({ id: 'ironfurnaces:augment_generator' });
    // 移除配方 ironfurnaces:upgrade_allthemodium
    event.remove({ id: 'ironfurnaces:upgrade_allthemodium' });
});
