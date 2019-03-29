<template>
    <div>
        <button v-on:click="clearAll">모두 삭제</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations({
            clearAll: 'clearAllItem'
        })
        /*clearAll() {
            // this.$emit('clearAllTodo')
            this.$store.commit('clearAllItem')
        }*/
    }
}
</script>

<style>

</style>
