<template>
    <div>
        <button @click="clearAll">모두삭제</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoItems: []
        }
    },
    methods: {
        clearAll()
        {
            this.$emit('allDeleteTodo')
        }
    }
}
</script>

<style>

</style>
