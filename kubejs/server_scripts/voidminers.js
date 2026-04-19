ServerEvents.recipes(event => {
    const JsonObject = Java.loadClass('com.google.gson.JsonObject');
    const JFloat = Java.loadClass('java.lang.Float');
    const JInt = Java.loadClass('java.lang.Integer');

    const addMiner = (item, weight, minTier, dimension) => {
        let tier = minTier || 1;
        let dim = dimension || 'minecraft:overworld';

        let json = new JsonObject();
        json.addProperty("type", "voidminers:miner");
        json.addProperty("allowHigherTiers", true);
        json.addProperty("dimension", dim);
        json.addProperty("minTier", new JInt(tier));

        let outputJson = new JsonObject();
        let stackJson = new JsonObject();
        stackJson.addProperty("id", item);
        outputJson.add("stack", stackJson);
        outputJson.addProperty("weight", new JFloat(weight));

        json.add("output", outputJson);

        let recipeId = `kubejs:voidminers/${item.replace(':', '_')}_${dim.split(':')[1]}`;
        event.custom(json).id(recipeId);
    };

    // 粗艾瑟金属（下界，等级4，权重5）
    addMiner('occultism:raw_iesnium', 5, 4, 'minecraft:the_nether');

    // 粗硅岩（末地，等级5，权重8）
    addMiner('mekanism_extras:raw_naquadah', 8, 5, 'minecraft:the_end');
});