// server_scripts/exdeorum/removes.js
ServerEvents.recipes(event => {
    // 移除配方 exdeorum:flint_mesh
    event.remove({ id: 'exdeorum:flint_mesh' });
    // 移除配方 exdeorum:iron_mesh
    event.remove({ id: 'exdeorum:iron_mesh' });
    // 移除配方 exdeorum:golden_mesh
    event.remove({ id: 'exdeorum:golden_mesh' });
    // 移除配方 exdeorum:diamond_mesh
    event.remove({ id: 'exdeorum:diamond_mesh' });
});
