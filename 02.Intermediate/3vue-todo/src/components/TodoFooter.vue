<template>
    <div>
        <button v-on:click="clearAll">모두삭제</button>
    </div>
</template>

<script>
export default {
    methods: {
        clearAll() {
            this.$emit('deleteTodoAll')
        }
    }
}
</script>

<style>

</style>
