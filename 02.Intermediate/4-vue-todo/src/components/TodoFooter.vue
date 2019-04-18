<template>
    <div>
        <button @click="deleteAllItem">전체삭제</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        /*clearAll()
        {
            // this.$emit('clearAllTodo')
            // this.$store.commit('clearAllTodo')
        }*/
        ...mapMutations(['deleteAllItem'])
    }
}
</script>

<style>

</style>
