const addOneItem = (state,todoItem) => {
    const obj = { item: todoItem, completed: false}
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj)
}
const deleteOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem)
    state.todoItems.splice(payload.index,1)
}
const toggleOneComplete = (state, payload) => {
    state.todoItems[payload.index].completed = ! state.todoItems[payload.index].completed 
    localStorage.removeItem(payload.todoItem)
    localStorage.setItem(payload.todoItem.item ,JSON.stringify(payload.todoItem))
}
const deleteAllItem = (state) => {
    localStorage.clear()
    state.todoItems = []
}

export { addOneItem, deleteOneItem, toggleOneComplete, deleteAllItem }