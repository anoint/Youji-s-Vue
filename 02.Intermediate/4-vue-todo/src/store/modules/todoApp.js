import { store } from "../store"
const storage = {
    fetch() { //created 
        let arr = []
        const storageLength = localStorage.length
        if( storageLength > 0 )
        {
            for (let i = 0; i < storageLength; i++)
            {
                const key = localStorage.key(i)
                if( key != 'loglevel:webpack-dev-server')
                arr.push(JSON.parse(localStorage.getItem(key)))
            }
            return arr
        }
    }
}

const state = { //data 
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
}

export default {
    state,
    getters,
    mutations
}