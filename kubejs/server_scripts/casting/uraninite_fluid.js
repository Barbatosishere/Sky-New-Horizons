// server_scripts/casting/uraninite_fluid.js
ServerEvents.recipes(event => {
    // powah:uraninite → ?  [casting.melting]
    event.recipes.casting.melting('powah:uraninite', '90x casting:molten_budding_uraninite', 500)
    // casting:gem_mold → powah:uraninite  [casting.solidifier]
    event.recipes.casting.solidifier('casting:gem_mold', '90x casting:molten_budding_uraninite', 'powah:uraninite')
    // powah:uraninite_block → ?  [casting.melting]
     event.recipes.casting.melting('powah:uraninite_block', '810x casting:molten_budding_uraninite', 500)
    // casting:block_mold → powah:uraninite  [casting.solidifier]
    event.recipes.casting.solidifier('casting:block_mold', '810x casting:molten_budding_uraninite', 'powah:uraninite')
})
