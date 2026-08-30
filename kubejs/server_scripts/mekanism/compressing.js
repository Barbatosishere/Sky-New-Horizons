// server_scripts/mekanism/compressing.js
ServerEvents.recipes(event => {
    // create:brass_ingot → create:brass_sheet  [compressing]
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

    // create:zinc_ingot → createaddition:zinc_sheet  [compressing]
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

    // create_better_motors:reggarfonite_gem → create_better_motors:reggarfonite_sheet  [compressing]
    event.custom({
        type: 'mekanism:compressing',
        item_input: {
            item: 'create_better_motors:reggarfonite_gem'      
        },
        chemical_input: {
            chemical: 'mekanism:hydrogen',  
            amount: 100
        },
        output: {
            id: 'create_better_motors:reggarfonite_sheet'        
        },
        duration: 200                     
    });

});
