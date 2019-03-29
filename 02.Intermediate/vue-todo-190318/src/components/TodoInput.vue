<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <button v-on:click="addTodo">추가</button>
        
        <!-- use the modal component, pass in the prop -->
        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고!
                 <button id="show-modal" @click="showModal = false">close</button>
            </h3>
            <h3 slot="body">할일을 입력하세요.</h3>
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal' ;
import { mapMutations } from 'vuex'
export default {
 data() {
      return {
          newTodoItem: '',
          todoItems: [],
          showModal: false
      }
  },
  methods: {
        ...mapMutations({
               addOneItem: 'addOneItem'
        }),

    addTodo() {
          if(this.newTodoItem !== '')
          {
                this.addOneItem(this.newTodoItem)
            //   this.$emit('addTodoItem', this.newTodoItem)
              this.clearInput();
          } else {
              this.showModal = !this.showModal;
          }
      },
      clearInput() {
          this.newTodoItem = "";
      }
  },
  components: {
      Modal
  }   
}
</script>

<style>

</style>