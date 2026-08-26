// 移除所有 bblcompat 的颜料提取配方
ServerEvents.recipes(event => {
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/magenta' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/pink' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/green' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/lime' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/orange' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/blue' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/purple' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/gray' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/red' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/yellow' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/black' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/light_gray' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/light_blue' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/brown' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/white' });
    event.remove({ id: 'bblcompat:mekanism/pigment_extracting/color_tags/cyan' });
});