<template>
    <div>
        <button v-on:click="clearAll">모두삭제</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations({
            clearAll : 'deleteAllItem'
        })
        // clearAll() {
        //     // this.$emit('deleteTodoAll')
        //      this.$store.commit('deleteAllItem')
        // }
    }
}
</script>

<style>

</style>
