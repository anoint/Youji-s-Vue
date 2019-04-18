<template>
    <div>
        <input v-model="newTodoItem" @keyup.enter="addTodo">
        <button @click="addTodo">추가</button>
        <Modal v-if="showModal" @close="showModal = false">
            
            <h3 slot="header">경고!
                <button @click="showModal = false">닫기</button>
            </h3>
            <div slot="body">
                할일을 입력하세요!
            </div>

        </Modal>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Modal from "./common/Modal"
export default {
    data() {
        return {
            newTodoItem: '',
            todoItems: [],
            showModal: false
        }
    },
    methods: {
        ...mapMutations(['addOneItem']),
        addTodo() {
            const newTodoItem = this.newTodoItem
            if(newTodoItem.length)
            {
                //console.log(newTodoItem);
                // this.$emit('addTodoItem', newTodoItem)
                //this.$store.commit('addOneTodo', newTodoItem)
                this.addOneItem(this.newTodoItem)
                this.clearInput()
            } else {
                this.showModal = true
            }
        },
        clearInput() {
            this.newTodoItem = ''
        }
    },
    components: {
        Modal
    }
}
</script>

<style>

</style>
