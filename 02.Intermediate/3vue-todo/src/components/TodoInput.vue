<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button v-on:click="addTodo()">추가</button>
         <Modal v-if="showModal" @close="showModal = false">
                <h3 slot="header">
                    경고!
                    <button @click="showModal = false">닫기</button>     
                </h3>
                <div slot="body">
                    할일을 입력하세요!
                </div>
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal'
export default {
    data() {
        return {
            newTodoItem: '',
            todoItems: [],
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem != '')
            {
                //this.todoItems.push(this.newTodoItem)
                // this.$emit('addTodoItem',this.newTodoItem)
                this.$store.commit('addOneItem', this.newTodoItem)
                this.clearInput()
            } else
            {
                this.showModal = true
            }
        },
        clearInput()
        {
            this.newTodoItem = '';
        }
    },
    components: {
        Modal
    }
}
</script>

<style>

</style>
