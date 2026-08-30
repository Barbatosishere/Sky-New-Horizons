// server_scripts/forbidden_arcanus/tag_fix.js
ServerEvents.tags(['item', 'block'], event => {

    event.remove('c:ores_in_ground/deepslate', 'forbidden_arcanus:stella_arcanum')

    console.info('[fix_stella_arcanum_tags] removed stella_arcanum from c:ores_in_ground/deepslate (item + block)')
})
