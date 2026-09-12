
ServerEvents.recipes(event => {
    // 移除配方 extendedcrafting:black_iron_ingot
    event.remove({ id: 'extendedcrafting:black_iron_ingot' });
});