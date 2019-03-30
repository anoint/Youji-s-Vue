<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
                <i class="fas fa-check" 
                      v-on:click="toggleComplete(todoItem, index)"
                      v-bind:class="{textCompleted: todoItem.completed}"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>                
                <button v-on:click="deleteTodo(todoItem, index)">삭제</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    data() {
        return {
            todoItems: [],
        }
    },
    methods: {
        deleteTodo(todoItem, index) {
            localStorage.removeItem(todoItem)
            this.todoItems.splice(index,1)
        },
        toggleComplete(todoItem, index)
        {
            this.todoItems[index].completed = ! this.todoItems[index].completed 
            localStorage.removeItem(todoItem)
            localStorage.setItem(todoItem.item ,JSON.stringify(todoItem))
        }
    },
    created() {
        if( localStorage.length > 0)
        {
            for (let i = 0; i < localStorage.length; i++) {
                
                if( localStorage.key(i) !== 'loglevel:webpack-dev-server')
                {
                    // this.todoItems.push(localStorage.key(i));
                    this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) 
                }
           }
        }
    }
}
</script>

<style>
.textCompleted{
    text-decoration: line-through;
    color: lightgray;
}
</style>

