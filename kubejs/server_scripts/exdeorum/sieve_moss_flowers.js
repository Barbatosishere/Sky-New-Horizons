ServerEvents.recipes(event => {
        const TagKey = Java.loadClass('net.minecraft.tags.TagKey');
        const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
        const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
        const blockRegistry = BuiltInRegistries.BLOCK;
        const itemRegistry = BuiltInRegistries.ITEM;
        const tagKey = TagKey.create(blockRegistry.key(), ResourceLocation.parse('minecraft:flowers'));
        const flowers = [];
        blockRegistry.getTag(tagKey).orElseThrow()
            .forEach(holder => {
                const id = holder.key().location();
                if (itemRegistry.containsKey(id)) {
                    flowers.push(id.toString());
                }
            });
        const moss = 'minecraft:moss_block';

        flowers.forEach(chunkId => {
    event.custom({
                type: 'exdeorum:sieve',
                ingredient: { item: moss },
                mesh: { item: 'exdeorum:string_mesh' },
                result: { id: chunkId },
                result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.01
        }
            });

    event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: moss },
            mesh: { item: 'exdeorum:flint_mesh' },
            result: { id: chunkId },
            result_amount: {
                type: 'minecraft:binomial',
                n: 1.0,
                p: 0.05
            }
        });

    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: moss },
        mesh: { item: 'exdeorum:iron_mesh' },
        result: { id: chunkId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.10
        }
    });

    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: moss },
        mesh: { item: 'exdeorum:golden_mesh' },
        result: { id: chunkId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.15
        }
    });

    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: moss },
        mesh: { item: 'exdeorum:diamond_mesh' },
        result: { id: chunkId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.20
        }   
      });

    event.custom({
        type: 'exdeorum:sieve',
        ingredient: { item: moss },
        mesh: { item: 'exdeorum:netherite_mesh' },
        result: { id: chunkId },
        result_amount: {
            type: 'minecraft:binomial',
            n: 1.0,
            p: 0.3
        }
    });
    })
    });