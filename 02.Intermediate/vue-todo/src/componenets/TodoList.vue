<template>
    <div>
        <ul>
            <li v-for="(todoItem,index) in propsdata" v-bind:key="todoItem.item">
            <i class="checkBtn fas fa-check"  v-bind:class="{textCompleted: todoItem.completed}"
             v-on:click="toggleCompleted(todoItem,index)"></i>
            
            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
            <span v-on:click="removeTodo(todoItem, index)">delete</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, index) {
            this.$emit('removeItem', todoItem, index);
        },
        toggleCompleted(todoItem, index) {
            this.$emit('toggleItem', todoItem, index);
        }
    }
}
</script>
<style>

</style>
