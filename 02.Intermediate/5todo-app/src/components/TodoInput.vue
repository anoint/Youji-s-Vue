<template>
    <div> 
        <input type="text" value="" v-model="newTodoItem" @keyup.enter="addTodo">
        <button @click="addTodo">추가</button> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo() {
            let newItem = this.newTodoItem
            if(newItem != '')
            {
                console.log('1111');
                this.$emit('addOneTodo', this.newTodoItem)
                this.clear()
            }
            else
            {
                //modal
            }
        },
        clear()
        {
            this.newTodoItem = ''
        }
    }
}
</script>

<style>

</style>
