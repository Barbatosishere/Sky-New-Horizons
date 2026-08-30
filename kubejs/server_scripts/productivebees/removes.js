// server_scripts/productivebees/removes.js
ServerEvents.recipes(event => {
    // 移除输出 productivebees:advanced_quark_blossom_beehive 的配方
    event.remove({ output: 'productivebees:advanced_quark_blossom_beehive' });
    // 移除输出 productivebees:expansion_box_quark_blossom 的配方
    event.remove({ output: 'productivebees:expansion_box_quark_blossom' });
    // 移除输出 productivebees:advanced_quark_azalea_beehive 的配方
    event.remove({ output: 'productivebees:advanced_quark_azalea_beehive' });
    // 移除输出 productivebees:expansion_box_quark_azalea 的配方
    event.remove({ output: 'productivebees:expansion_box_quark_azalea' });
});
