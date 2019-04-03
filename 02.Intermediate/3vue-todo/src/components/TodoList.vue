<template>
    <div>
        <transition-group name="list" tag="ul"> 
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item">
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
import { mapGetters, mapMutations } from 'vuex'
export default {
    props: ['propsdata'],
    methods: {
        ...mapMutations ({
            deleteTodo: 'deleteOneItem',
            toggleComplete: 'toggleOneComplete'
        }),
        // deleteTodo(todoItem, index) {
        //     // this.$emit('deleteTodoItem', todoItem, index)
        //     this.$store.commit('deleteOneItem', {todoItem, index})
        // },
        // toggleComplete(todoItem, index)
        // {
        //     // this.$emit('toggleTodoComplete', todoItem, index)
        //     this.$store.commit('toggleOneComplete', {todoItem, index})            
        // }
    },
    computed: {
        ...mapGetters(['storedTodoItems'])
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

