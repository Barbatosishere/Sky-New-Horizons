// server_scripts/occultism/removes.js
ServerEvents.recipes(event => {
    // 移除配方 occultism:spirit_fire/spirit_attuned_gem
    event.remove({ id: 'occultism:spirit_fire/spirit_attuned_gem' });
});
