ServerEvents.recipes(event => {
    event.recipes.casting.melting('powah:uraninite', '90x casting:molten_budding_uraninite', 500)
    event.recipes.casting.solidifier('casting:gem_mold', '90x casting:molten_budding_uraninite', 'powah:uraninite')
     event.recipes.casting.melting('powah:uraninite_block', '810x casting:molten_budding_uraninite', 500)
    event.recipes.casting.solidifier('casting:block_mold', '810x casting:molten_budding_uraninite', 'powah:uraninite')
})