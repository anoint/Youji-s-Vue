import { store } from "../store";


const storage = {
    fetch() { 
        var arr = []
        if( localStorage.length > 0)
        {
            for (let i = 0; i < localStorage.length; i++) {
                
                if( localStorage.key(i) !== 'loglevel:webpack-dev-server')
                {
                    //this.todoItems.push(localStorage.key(i));
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) 
                }
            }
            return arr
        }
    }
} 
 const state = {
    todoItems: storage.fetch()
 }
 const getters = {
    storedTodoItems(state)
    {
        return state.todoItems
    }
 }
 const mutations = {
     addOneItem(state,todoItem) {
        const obj = { item: todoItem, completed: false}
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj)
    },
     deleteOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem)
        state.todoItems.splice(payload.index,1)
    },
     toggleOneComplete(state, payload) {
        state.todoItems[payload.index].completed = ! state.todoItems[payload.index].completed 
        localStorage.removeItem(payload.todoItem)
        localStorage.setItem(payload.todoItem.item ,JSON.stringify(payload.todoItem))
    },
     deleteAllItem(state) {
        localStorage.clear()
        state.todoItems = []
    }    
 };

 export default {
    state,
    getters,
    mutations
 }