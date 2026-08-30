// server_scripts/quark/removes.js
ServerEvents.recipes(event => {
    // 移除配方 quark:tweaks/crafting/utility/misc/easy_hopper
    event.remove({ id: 'quark:tweaks/crafting/utility/misc/easy_hopper' });
});
