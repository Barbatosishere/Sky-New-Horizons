// server_scripts/enderio/obsidian_dust.js
ServerEvents.recipes(event => {
    // 移除配方 enderio:sag_milling/obsidian
    event.remove({ id: 'enderio:sag_milling/obsidian' });
});
