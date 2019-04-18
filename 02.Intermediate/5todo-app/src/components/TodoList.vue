<template>
    <div>
        <ul>
            <li v-for="(index, todoItem) in this.todoItems" v-bind:key="todoItem.item">
                <span class="fas fa-check" v-bind="{textCompleted: todoItem.completed}"></span>
                <span v-bind="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
                <button @click="deleteTodo(index,todoItem)">삭제</button>
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
                    console.log(JSON.parse(localStorage.getItem(key)))
                    this.todoItems.push(JSON.parse(localStorage.getItem(key)))
                }
            }
        }
    },
    methods: {
        deleteTodo(index, todoItem)
        {
            localStorage.removeItem(todoItem)
            this.todoItems.splice(index, 1)
        }
    }
    
}
</script>

<style>
.textCompleted{
    color: gray
    
}
</style>
