RecipeViewerEvents.removeEntries('item', event => {
    global.nukelist.items.forEach(item => {
        event.remove(item);
    })
})