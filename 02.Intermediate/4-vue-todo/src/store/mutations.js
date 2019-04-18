const addOneTodo = (state, newTodoItem) =>
{   
    var obj = { item:newTodoItem, completed: false}
    state.todoItems.push(obj) // 객체를 저장해야됨.
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
}
const toggleCompleted = (state, payload) =>
{   
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed //순서 객체 1 > web 2
    localStorage.removeItem(payload.todoItem.item)
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
}
const deleteTodo = (state, payload) =>
{
    state.todoItems.splice(payload.index, 1)
    localStorage.removeItem(payload.todoItem.item)
}
const clearAllTodo = (state) =>
{
    state.todoItems = []
    localStorage.clear()
}


export{ addOneTodo, toggleCompleted, deleteTodo, clearAllTodo }