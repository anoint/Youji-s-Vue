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
    mutations: {
        addOneItem() {
            var obj = { item: todoItem, completed: false}
            localStorage.setItem(todoItem, JSON.stringify(obj));
            this.todoItems.push(obj)
        }
    }
})