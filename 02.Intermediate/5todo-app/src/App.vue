<template>
  <div id="app">
     <TodoHeader></TodoHeader>
     <TodoInput v-on:addTodo="addOneTodo"></TodoInput>
     <TodoList v-bind:propsdata="todoItems"></TodoList>
     <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
export default {
    components: {
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter
    },
   data() {
        return {
            todoItems: []
        }
    },
    created() {
        if( localStorage.length > 0)
        {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i)
            
                if(key != 'loglevel:webpack-dev-server')
                {
                    //console.log(JSON.parse(localStorage.getItem(key)))
                    this.todoItems.push(JSON.parse(localStorage.getItem(key)))
                }
            }
        }
    },
    methods: {
      addOneTodo(newItem)
      {
               // console.log('11133331');
          
          const obj = { item: newItem, completed: false}
          this.todoItems.push(newItem, JSON.stringify(obj))
          localStorage.setItem(newItem, JSON.stringify(obj))
      }
    }
}
</script>

<style>
 
</style>
