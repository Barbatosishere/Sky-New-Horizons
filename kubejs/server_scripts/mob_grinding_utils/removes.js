// server_scripts/mob_grinding_utils/removes.js
ServerEvents.recipes(event => {
    // 移除配方 mob_grinding_utils:recipe_mould_blank
    event.remove({ id: 'mob_grinding_utils:recipe_mould_blank' });
});
