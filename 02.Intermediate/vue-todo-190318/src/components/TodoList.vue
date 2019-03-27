<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem">  
                <i class="checkBtn fas fa-check" v-on:click="toggleCompleted(todoItem,index)" 
                    v-bind:class="{ txtComplated: todoItem.completed }"></i>
                <span v-bind:class="{ txtComplated: todoItem.completed }" >{{ todoItem.item }}</span>
                <button v-on:click="deleteTodo(todoItem, index)">삭제</button>
            </li>
        </ul>    
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        deleteTodo(todoItem, index) {
            this.$emit('deleteTodoItem', todoItem, index)  
        },
        toggleCompleted(todoItem, index) {
            this.$emit('toggle', todoItem, index)
        },
    }
}
</script>

<style>
.txtComplated
{
    color: lightgray;
    text-decoration: line-through;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
ul
{
    list-style-type: none;
}
</style>
