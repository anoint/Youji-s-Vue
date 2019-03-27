<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:deleteTodoItem="deleteOneItem" v-on:toggle="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAllTodo="clearAllItem"></TodoFooter>
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
    methods: {
        addOneItem(todoItem)
        {
            var obj = { item: todoItem, completed: false }
            localStorage.setItem(todoItem, JSON.stringify(obj));
            this.todoItems.push(obj);
        },
        deleteOneItem(todoItem, index)
        {
            localStorage.removeItem(todoItem.item)
            this.todoItems.splice(index,1)
        },
        toggleOneItem(todoItem, index)
        {
            this.todoItems[index].completed = ! this.todoItems[index].completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearAllItem()
        {
            localStorage.clear();
            this.todoItems = [];
        }
    },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
</style>
