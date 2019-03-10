<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button @click="addTodo">add</button>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            newTodoItem: ""
        }
    }, 
    methods: {
        addTodo() {
            if(this.newTodoItem !== '')
            {
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }
        },
        clearInput()
        {
            this.newTodoItem = "";
        }
    }
}
</script>
<style>

</style>
