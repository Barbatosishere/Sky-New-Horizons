// server_scripts/botanypots/sculk_seeds.js
ServerEvents.recipes(event => {

    // mysticalagriculture:sculk_seeds → mysticalagriculture:inferium_farmland  [botanypots.crop]
    event.recipes.botanypots.crop(
        'mysticalagriculture:sculk_seeds',                     // 种子
        [                                                        // 可种植的土壤类型（使用正确的物品ID）
            'mysticalagriculture:inferium_farmland',
            'mysticalagriculture:prudentium_farmland',
            'mysticalagriculture:tertium_farmland',
            'mysticalagriculture:imperium_farmland',
            'mysticalagriculture:supremium_farmland',
            'mysticalagradditions:insanium_farmland'           
        ],
        DisplayState.basic('minecraft:sculk'),                  // 生长时显示的方块
        [
            DropItem.item('mysticalagriculture:sculk_seeds', 1.0),
            DropItem.item('mysticalagriculture:sculk_seeds', 1.0),
            DropItem.item('mysticalagriculture:sculk_essence', 1.0),
            DropItem.item('mysticalagriculture:sculk_essence', 1.0) ,
            DropItem.item('mysticalagriculture:fertilized_essence', 0.1)
        ],
        2400                                                      // 生长时间（tick）
    );
});
