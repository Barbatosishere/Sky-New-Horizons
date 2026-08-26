// fix_stella_arcanum_tags.js
// ---------------------------------------------------------------------------
// forbidden_arcanus 2.6.1 在 data/c/tags/{item,block}/ores_in_ground/ 下同时把
// forbidden_arcanus:stella_arcanum 列入 stone 与 deepslate 两个标签，
// 导致 Almost Unified 报：
//   "forbidden_arcanus:stella_arcanum is bound to multiple stone variant tags"
// 并放弃对这条配方链的统一化。
//
// stella_arcanum 实际是普通石头矿石（非深板岩），正确分类应只属于
// c:ores_in_ground/stone。该脚本在 KubeJS 的 ServerEvents.tags 阶段把
// stella_arcanum 从 deepslate 标签里移除，让 Almost Unified 可以正常处理。
//
// 上游 bug 暂未修复时由本脚本兜底。
// ---------------------------------------------------------------------------

ServerEvents.tags(['item', 'block'], event => {
    // 移除 deepslate 标签里的 stella_arcanum，保留 stone 标签里的条目不变。
    event.remove('c:ores_in_ground/deepslate', 'forbidden_arcanus:stella_arcanum')

    console.info('[fix_stella_arcanum_tags] removed stella_arcanum from c:ores_in_ground/deepslate (item + block)')
})
