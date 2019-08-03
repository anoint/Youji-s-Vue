<template>
    <div>
        <input type="text" value="" v-model="newTodoItem" @keyup.enter="addTodo">
        <button @click="addTodo">추가</button>
        <!-- use the modal component, pass in the prop -->
        <Modal v-if="showModal" @close="showModal = false">
          <h3 slot="header">경고!
            <i class="fas fa-times" @click="showModal = false"></i>
          </h3>
          <span slot="body">할일을 입력하세요.</span>
        </Modal>
    </div>
</template>

<script>
import Modal from "./common/Modal";
export default {
    data() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo() {
            let newItem = this.newTodoItem
            if(newItem != '')
            {
                this.$emit('addOneTodo', this.newTodoItem)
                this.clear()
            }
            else
            {
                this.showModal = true
            }
        },
        clear()
        {
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
