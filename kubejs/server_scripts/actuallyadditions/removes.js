// actuallyadditions/removes.js
// ─────────────────────────────────────────────────────────
// 移除 actuallyadditions 自带的 4 个发电/收集器
// ─────────────────────────────────────────────────────────

ServerEvents.recipes(event => {
    event.remove({ id: 'actuallyadditions:oil_generator' });
    event.remove({ id: 'actuallyadditions:heat_collector' });
    event.remove({ id: 'actuallyadditions:coal_generator' });
    event.remove({ id: 'actuallyadditions:leaf_generator' });
});
