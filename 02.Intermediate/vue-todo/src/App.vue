<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" 
              v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter></TodoFooter>

  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
<script>
  import TodoHeader from './componenets/TodoHeader.vue'
  import TodoInput from './componenets/TodoInput.vue'
  import TodoList from './componenets/TodoList.vue'
  import TodoFooter from './componenets/TodoFooter.vue'

export default {
  data: function() {
        return {
            todoItems: []
        }
    },
   components: {
      'TodoHeader': TodoHeader,
      'TodoInput': TodoInput,
      'TodoList': TodoList,
      'TodoFooter': TodoFooter,
    },
    created: function() {
        if(localStorage.length > 0 )
        {
            for (var i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i) !== "loglevel:webpack-dev-server")
                {
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    },
    methods: 
        {
            addOneItem(todoItem) 
            {
                    var obj = { complated: false, item:todoItem } 
                    localStorage.setItem(todoItem, JSON.stringify(obj));
                    this.todoItems.push(obj);
            },
            removeOneItem(todoItem,index)
            {
                    this.todoItems.splice(index, 1);
                    localStorage.removeItem(todoItem);
                    console.log(todoItem);
            },
            toggleOneItem(todoItem,index)
            {
                todoItem.completed = !todoItem.completed;
                localStorage.removeItem(todoItem.item);
                localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
            }
        }
    }

</script>

<style>
  body
  {
    text-align: center;
    background-color: #f6f6f6;
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
  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
  }
</style>
