ServerEvents.recipes(event => {
    event.custom({
        type: 'mekanism:crushing',
        input: { 
            item: 'minecraft:cobbled_deepslate' 
        },
        output: { 
            id: 'minecraft:cobblestone',
            count: 1
        }
    })
})