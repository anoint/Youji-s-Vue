<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
        return {
            todoItems: []
        }
    },
    created()
    {
      if(localStorage.length >0)
      {
        for (var i = 0; i < array.length; i++) {
          this.todoItems.push(localStorage.key(i));
        }
      }
    },
    methods: {
        addTodo(todoItem) {
                localStorage.setItem(todoItem,todoItem);
                this.todoItems.push(todoItem);
        },
        clearInput() {
            this.newTodoItem = '';
        },
        clearAll() {
            localStorage.clear();
            this.todoItems = [];
        },
        removeTodo()
        {
          localStorage.removeItem(todoItem);
          this.todoItems.splice(index,1);
        }
    },
  components: {
    'TodoHeader': TodoHeader,
    'TodoFooter': TodoFooter,
    'TodoList': TodoList,
    'TodoInput': TodoInput
  }
}
</script>

<style>
body
    {
        text-align: center;
        background-color: #F6F6F8;
    }
    input
    {
        border-style: groove;
        width: 200px;
    }
    button
    {
        border-style: groove;
    }
    .shadow
    {
        box-shadow: 5px 10px 10px rgba(0,0,0, 0.3)
    }
</style>
