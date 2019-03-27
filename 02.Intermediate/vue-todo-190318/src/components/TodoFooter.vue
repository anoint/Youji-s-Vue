<template>
    <div>
        <button v-on:click="clearAll">모두 삭제</button>
    </div>
</template>

<script>
export default {
    methods: {
        clearAll() {
            this.$emit('clearAllTodo')
        }
    }
}
</script>

<style>

</style>
