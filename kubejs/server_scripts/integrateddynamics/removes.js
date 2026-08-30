// server_scripts/integrateddynamics/removes.js
ServerEvents.recipes(event => {
    // 移除配方 integrateddynamics:coal_generator
    event.remove({ id: 'integrateddynamics:coal_generator' });
});
