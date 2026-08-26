// justdirethings/removes.js
// ─────────────────────────────────────────────────────────
// 移除 justdirethings 自带的 3 个低阶发电
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'justdirethings:generatort1' });
    event.remove({ id: 'justdirethings:generatorfluidt1' });
    event.remove({ id: 'justdirethings:pocket_generator' });
});
