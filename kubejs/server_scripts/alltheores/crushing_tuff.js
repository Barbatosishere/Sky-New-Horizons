// server_scripts/alltheores/crushing_tuff.js
ServerEvents.recipes(event => {
    // 移除配方 create:crushing/tuff_recycling
    event.remove({ id: 'create:crushing/tuff_recycling' });
    // 移除配方 create:crushing/tuff
    event.remove({ id: 'create:crushing/tuff' });
});
