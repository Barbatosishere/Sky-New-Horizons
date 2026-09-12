ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:bedrock' });
    event.remove({ output: 'avaritia:full_matter_cluster' });
    });