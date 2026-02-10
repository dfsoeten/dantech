ServerEvents.recipes(event => {
    const recipies = [
        'rftoolsbuilder:builder',
        'rftoolsbase:machine_infuser',
    ]

	recipies.forEach(recipe => event.remove({ output: recipe }))
	
    event.shaped('rftoolsbuilder:builder', [
        'TPT',
        'SMS',
        'TDT'
    ], {
        T: 'mekanism:teleportation_core',
        P: 'oritech:processing_unit',
        S: 'mekanism:steel_casing',
        M: 'rftoolsbase:machine_frame',
        D: 'mekanism:digital_miner'
    })

    event.shaped('rftoolsbase:machine_infuser', [
        'DPD',
        'SMS',
        'AOA'
    ], {
        D: 'rftoolsbase:dimensionalshard',
        P: 'oritech:processing_unit',
        S: 'mekanism:steel_casing',
        M: 'rftoolsbase:machine_frame',
        A: 'mekanism:alloy_atomic',
        O: 'oritech:machine_extender' 
    })
})