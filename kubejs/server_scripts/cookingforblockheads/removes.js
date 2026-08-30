// server_scripts/cookingforblockheads/removes.js
ServerEvents.recipes(event => {
    // 移除配方 cookingforblockheads:sink
    event.remove({ id: 'cookingforblockheads:sink' });
});
