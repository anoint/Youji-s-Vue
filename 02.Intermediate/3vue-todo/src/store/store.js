import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters: {
        storedTodoItems(state)
        {
            return state.todoItems
        }
    },
    mutations: {
        addOneItem(state,todoItem) {
            var obj = { item: todoItem, completed: false}
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj)
        },
        deleteOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem)
            state.todoItems.splice(payload.index,1)
        },
        toggleOneComplete(state, payload)
        {
            state.todoItems[payload.index].completed = ! state.todoItems[payload.index].completed 
            localStorage.removeItem(payload.todoItem)
            localStorage.setItem(payload.todoItem.item ,JSON.stringify(payload.todoItem))
        },
        deleteAllItem(state)
        {
            localStorage.clear()
            state.todoItems = []
        }
    }
})