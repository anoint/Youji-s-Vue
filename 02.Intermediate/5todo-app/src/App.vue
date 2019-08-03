<template>
  <div id="app">
     <TodoHeader></TodoHeader>
     <TodoInput @addOneTodo="addOneTodo"></TodoInput>
     <TodoList v-bind:propsdata="todoItems" @deleteOneTodo="deleteOneTodo" @completedOneTodo="completedOneTodo"></TodoList>
     <TodoFooter @allDeleteTodo="allDeleteTodo"></TodoFooter>
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
                    this.todoItems.push(JSON.parse(localStorage.getItem(key)))
                }
            }
        }
    },
    methods: {
      addOneTodo(newItem)
      {
          if(this.checkItem(newItem))
          {
            const obj = { item: newItem, completed: false}
            this.todoItems.push(obj)
            localStorage.setItem(newItem, JSON.stringify(obj))
          }
      },
      checkItem(newItem)
      {
          let checkFlag = true
          for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i)

                if(key == newItem)
                {
                    checkFlag = false
                }
          }
          return checkFlag
      },
      deleteOneTodo(todoItem, index)
      {
        console.log('deleteOneTodo')
          localStorage.removeItem(todoItem.item)
          this.todoItems.splice(index, 1)
      },
      completedOneTodo(todoItem, index)
      {
          todoItem.completed = !todoItem.completed
          localStorage.removeItem(index)
          localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
      },
      allDeleteTodo()
      {
          this.todoItems = []
          localStorage.clear()
      }
    }
}
</script>

<style>

</style>
