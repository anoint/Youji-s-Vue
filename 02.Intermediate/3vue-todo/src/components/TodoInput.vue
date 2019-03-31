<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button v-on:click="addTodo()">추가</button>
         <Modal v-if="showModal" @close="showModal = false">
            <div class="modal-header">
                <slot name="header">
                    경고!
                    <button @click="showModal = false">닫기</button>     
                </slot>
            </div>
            <div class="modal-body">
                <slot name="body">
                    할일을 입력하세요!
                </slot>
            </div>
            <h3 slot="header">custom header</h3>
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
                this.$store.commit('addOneItem')
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
