<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
                <span class="fas fa-check" v-bind:class="{textCompleted: todoItem.completed}"
                        @click="completedTodo(todoItem, index)"></span>
                <span v-bind:class="{textCompleted: todoItem.completed}">
                    {{ todoItem.item }}
                </span>
                <button @click="deleteTodo(todoItem, index)">삭제</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
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
        deleteTodo(todoItem, index)
        {
            localStorage.removeItem(todoItem)
            this.todoItems.splice(index, 1)
        },
        completedTodo(todoItem, index)
        {
            todoItem.completed = !todoItem.completed
            localStorage.removeItem(index)
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
        }
    }
}
</script>

<style>
.textCompleted{
    color: gray;
    text-decoration: line-through;
}
</style>
