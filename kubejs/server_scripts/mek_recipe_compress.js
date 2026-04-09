ServerEvents.recipes(event => {
    event.custom({
        type: 'mekanism:compressing',
        item_input: {
            item: 'create:brass_ingot'      
        },
        chemical_input: {
            chemical: 'mekanism:hydrogen',  
            amount: 100
        },
        output: {
            id: 'create:brass_sheet'        
        },
        duration: 200                     
    });

    event.custom({
        type: 'mekanism:compressing',
        item_input: {
            item: 'create:zinc_ingot'      
        },
        chemical_input: {
            chemical: 'mekanism:hydrogen',  
            amount: 100
        },
        output: {
            id: 'createaddition:zinc_sheet'        
        },
        duration: 200                     
    });
});