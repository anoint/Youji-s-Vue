<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button v-on:click="addTodo()">추가</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: '',
            todoItems: []
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem != '')
            {
                var obj = { item: this.newTodoItem, completed: false}
                localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
                this.todoItems.push(this.newTodoItem)

                this.clearInput()
            }
        },
        clearInput()
        {
            this.newTodoItem = '';
        }
    }
}
</script>

<style>

</style>
