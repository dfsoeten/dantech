ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(global.nukelist.items)
})

ServerEvents.recipes(event => {
    global.nukelist.items.forEach(item => {
        event.remove([{ output: item }, { input: item }])
    })
})