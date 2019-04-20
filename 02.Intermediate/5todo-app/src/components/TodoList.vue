<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
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
    props: ['propsdata'],
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
