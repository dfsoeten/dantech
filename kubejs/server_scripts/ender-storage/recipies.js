ServerEvents.recipes(event => {
    const recipies = [
        'enderstorage:ender_chest',
        'enderstorage:ender_tank',
        'enderstorage:ender_pouch'
    ]

	recipies.forEach(recipe => event.remove({ output: recipe }))
	
    event.shaped('enderstorage:ender_chest', [
        'BWB',
        'OCO',
        'BEB'
    ], {
		B: 'minecraft:blaze_rod',
        W: '#minecraft:wool',
        O: '#c:obsidians',
        E: 'oritech:enderic_compound',
        C: '#c:chests'
    })

    event.shaped('enderstorage:ender_tank', [
        'BWB',
        'OCO',
        'BEB'
    ], {
		B: 'minecraft:blaze_rod',
        W: '#minecraft:wool',
        O: '#c:obsidians',
        E: 'oritech:enderic_compound',
        C: 'minecraft:cauldron'
    })

     event.shaped('enderstorage:ender_pouch', [
        'BLB',
        'LEL',
        'BWB'
    ], {
		B: 'minecraft:blaze_powder',
        L: 'minecraft:leather',
        W: '#minecraft:wool',
        E: 'oritech:enderic_compound',
    })
})