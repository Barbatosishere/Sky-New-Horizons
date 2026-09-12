ServerEvents.recipes(event => {
    event.shaped('appliedcreate:brass_pattern_provider', [
        'BBB',
        'CAD',
        'BBB'
    ], {
        A: 'extendedae:ex_pattern_provider',
        B: 'create:brass_ingot',
        C: 'create:brass_casing',
        D: 'extendedcrafting:basic_component'
    })

    event.shaped('appliedcreate:andesite_pattern_provider', [
        'BBB',
        'CAD',
        'BBB'
    ], {
        A: 'ae2:pattern_provider',
        B: 'create:andesite_alloy',
        C: 'create:andesite_casing',
        D: 'extendedcrafting:basic_component'
    })
});