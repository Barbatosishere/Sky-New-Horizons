// server_scripts/productivebees/honey_generator.js
ServerEvents.recipes(event => {
    // 移除配方 productivebees:honey_generator
    event.remove({ id: 'productivebees:honey_generator' });
});
