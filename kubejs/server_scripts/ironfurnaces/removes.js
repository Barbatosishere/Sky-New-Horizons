// server_scripts/ironfurnaces/removes.js
ServerEvents.recipes(event => {
    event.remove({ id: 'ironfurnaces:augments/augment_generator' });
    event.remove({ id: 'ironfurnaces:upgrades/upgrade_allthemodium' });
});
