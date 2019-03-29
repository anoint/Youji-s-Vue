import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const storage = {
    fatch() {
        const arr = [];
        if(localStorage.length > 0 )
        {
            for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== "loglevel:webpack-dev-server")
                {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }   
}
export const store = new  Vuex.Store({
    state: {
        headerText: 'TODO It!',
        todoItems: storage.fatch()
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems
        }
    },
    mutations: {
        addOneItem(state, todoItem)
        {
            let obj = { item: todoItem, completed: false }
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        deleteOneItem(state, payload)
        {
            localStorage.removeItem(payload.todoItem.item)
            state.todoItems.splice(payload.index,1)
        },
        toggleOneItem(state, payload)
        {
            state.todoItems[payload.index].completed = ! state.todoItems[payload.index].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItem(state)
        {
            localStorage.clear();
            state.todoItems = [];
        }   
    }
})