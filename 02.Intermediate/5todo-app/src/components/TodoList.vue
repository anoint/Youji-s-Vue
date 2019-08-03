<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in propsdata" :key="todoItem.item">
                <span class="fas fa-check" :class="{textCompleted: todoItem.completed}"
                        @click="completedTodo(todoItem, index)"></span>
                <span :class="{textCompleted: todoItem.completed}">
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
            this.$emit('deleteOneTodo', todoItem, index)
        },
        completedTodo(todoItem, index)
        {
            this.$emit('completedOneTodo', todoItem, index)
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
