ServerEvents.recipes(event => {
    const recipies = [
        'oritech:crafting/alloy/steel',
        'oritech:biosteel_blockblockinv',

        'bigreactors:crafting/yellorium_component_to_storage',
        'bigreactors:crafting/yellorium_storage_to_component',
    ]

    recipies.forEach(recipy => {
        event.remove({ id: recipy })
    })
})