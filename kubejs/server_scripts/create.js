ServerEvents.recipes(event => {
    const { create } = event.recipes;
    create.splashing('alltheores:platinum_ingot', 'create:crushed_raw_platinum');
    });