<template>
    <div>
        <button v-on:click="clearAll">Clear All</button>
    </div>
</template>
<script>
export default {
    methods: {
        clearAll() {
            localStorage.clear();
        }
    }
}
</script>
<style>

</style>


