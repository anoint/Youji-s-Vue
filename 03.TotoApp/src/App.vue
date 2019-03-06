<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoFooter></TodoFooter>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoFooter from './components/TodoFooter.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';

export default {
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
