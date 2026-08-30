// server_scripts/justdirethings/removes.js
ServerEvents.recipes(event => {
    // 移除配方 justdirethings:generatort1
    event.remove({ id: 'justdirethings:generatort1' });
    // 移除配方 justdirethings:generatorfluidt1
    event.remove({ id: 'justdirethings:generatorfluidt1' });
    // 移除配方 justdirethings:pocket_generator
    event.remove({ id: 'justdirethings:pocket_generator' });
});
