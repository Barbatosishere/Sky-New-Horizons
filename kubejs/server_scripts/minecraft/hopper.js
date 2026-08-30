// server_scripts/minecraft/hopper.js
ServerEvents.recipes(event => {
    // 移除配方 minecraft:hopper
    event.remove({ id: 'minecraft:hopper' });

    // minecraft:iron_ingot → minecraft:hopper
    event.shaped('minecraft:hopper', [
        'A A',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:iron_ingot',
        B: 'woodenhopper:wooden_hopper'
    });
});
