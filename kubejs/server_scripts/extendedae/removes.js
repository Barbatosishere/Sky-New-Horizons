// server_scripts/extendedae/removes.js
ServerEvents.recipes(event => {
    // 移除配方 extendedae:inscriber/concurrent_print
    event.remove({ id: 'extendedae:inscriber/concurrent_print' });
    // 移除配方 extendedae:inscriber/concurrent_process
    event.remove({ id: 'extendedae:inscriber/concurrent_process' });
    // 移除配方 extendedae:entro_seed
    event.remove({ id: 'extendedae:entro_seed' });
    // 移除配方 extendedae:water_cell
    event.remove({ id: 'extendedae:water_cell' });
    // 移除配方 extendedae:cobblestone_cell
    event.remove({ id: 'extendedae:cobblestone_cell' });
    // 移除配方 extendedae:fishbig
    event.remove({ id: 'extendedae:fishbig' });

     event.recipes.extendedcrafting.shaped_table({ id: 'extendedae:ex_inscriber' }, [
            
            '     ',
            '  A  ',
            ' BAC ',
            '  A  ',
            '     '
        ],{
            A: { item: 'ae2:capacity_card' },
            B: { item: 'ae2:inscriber' },
            C: { item: 'extendedae:concurrent_processor' }
        },);
    
    event.recipes.extendedcrafting.shaped_table({ id: 'extendedae:ex_charger' }, [
            
            '     ',
            '     ',
            ' BAC ',
            '     ',
            '     '
        ],{
            A: { item: 'ae2:capacity_card' },
            B: { item: 'ae2:charger' },
            C: { item: 'extendedae:concurrent_processor' }
        });
    
    event.recipes.extendedcrafting.shaped_table({ id: 'extendedae:ex_molecular_assembler' }, [
            
            'E   E',
            'AADAA',
            'BBDBB',
            'CCDCC',
            'E   E'
        ],{
            A: { item: 'ae2:molecular_assembler' },
            B: { item: 'extendedae:concurrent_processor' },
            C: { item: 'ae2:fluix_dust' },
            D: { item: 'ae2:engineering_processor' },
            E: { item: 'ae2:capacity_card' }
        });
    
        event.recipes.extendedcrafting.shaped_table({ id: 'extendedae:oversize_interface' }, [
            
            '     ',
            ' ADA ',
            ' B B ',
            ' CEC ',
            '     '
        ],{
            A: { item: 'extendedae:concurrent_processor' },
            B: { item: 'ae2:annihilation_core' },
            C: { item: 'ae2:formation_core' },
            D: { tag: 'extendedae:extended_interface' },
            E: { item: 'extendedae:ingredient_buffer' }
        });
    
    event.recipes.extendedcrafting.shaped_table({ id: 'extendedae:ex_pattern_provider' }, [
            
            ' CDC ',
            ' AAA ',
            ' BBB ',
            ' CCC ',
            ' CEC '
        ],{
            A: { item: 'ae2:capacity_card' },
            B: { item: 'minecraft:crafting_table' },
            C: { tag: 'ae2:glass_cable' },
            D: { tag: 'ae2:pattern_provider' },
            E: { item: 'extendedae:concurrent_processor' }
        });
    
    event.recipes.extendedcrafting.shaped_table({ id: 'extendedae:ex_interface' }, [

            
            ' CDC ',
            ' AAA ',
            ' BBB ',
            ' CCC ',
            ' CEC '
        ],{
            A: { item: 'ae2:capacity_card' },
            B: { tag: 'c:glass_blocks/tinted' },
            C: { tag: 'ae2:glass_cable' },
            D: { tag: 'ae2:interface' },
            E: { item: 'extendedae:concurrent_processor' }
    });
});
