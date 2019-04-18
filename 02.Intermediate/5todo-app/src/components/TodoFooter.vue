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
            this.todoItems = []
            localStorage.clear()
        }
    }
}
</script>

<style>

</style>
