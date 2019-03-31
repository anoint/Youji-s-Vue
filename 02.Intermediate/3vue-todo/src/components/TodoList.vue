<template>
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item">
                <i class="fas fa-check" 
                      v-on:click="toggleComplete(todoItem, index)"
                      v-bind:class="{textCompleted: todoItem.completed}"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>                
                <button v-on:click="deleteTodo(todoItem, index)">삭제</button>
            </li>
        </transition-group>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        deleteTodo(todoItem, index) {
            this.$emit('deleteTodoItem', todoItem, index)
        },
        toggleComplete(todoItem, index)
        {
            this.$emit('toggleTodoComplete', todoItem, index)            
        }
    }
}
</script>

<style>
.textCompleted{
    text-decoration: line-through;
    color: lightgray;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>

