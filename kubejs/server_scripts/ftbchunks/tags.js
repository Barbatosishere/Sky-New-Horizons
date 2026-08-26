// ftbchunks/tags.js
// ─────────────────────────────────────────────────────────
// 来自原 FTB.js
// 让 epitaphs:grave 方块可以被 FTB Chunks interact/edit
// ─────────────────────────────────────────────────────────

ServerEvents.tags("block", (event) => {
  event.add("ftbchunks:interact_whitelist", "epitaphs:grave")
  event.add("ftbchunks:edit_whitelist", "epitaphs:grave")
})