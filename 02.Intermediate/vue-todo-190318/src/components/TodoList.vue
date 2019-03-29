<template> 
    <div>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="index">  
                <i class="checkBtn fas fa-check" v-on:click="toggleCompleted({todoItem,index})" 
                    v-bind:class="{ txtComplated: todoItem.completed }"></i>
                <span v-bind:class="{ txtComplated: todoItem.completed }" >{{ todoItem.item }}</span>
                <button v-on:click="deleteTodo({todoItem, index})">삭제</button>
            </li>
        </transition-group> 
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"
export default {
    props: ['propsdata'],
    methods: {
        ...mapMutations({
            deleteTodo: 'deleteOneItem',
            toggleCompleted:'toggleOneItem'
        })
        /*deleteTodo(todoItem, index) {
            // this.$emit('deleteTodoItem', todoItem, index)  
            this.$store.commit('deleteOneItem', {todoItem, index})
        },*/,
        /*toggleCompleted(todoItem, index) {
            // this.$emit('toggle', todoItem, index)
            this.$store.commit('toggleOneItem', {todoItem, index})
        }*/
    },
    computed: {
        ...mapGetters(['storedTodoItems'])
        //todoItems() {
            //return this.$store.getters.storedTodoItems
       // }
    }
}
</script>

<style>
.txtComplated
{
    color: lightgray;
    text-decoration: line-through;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
ul
{
    list-style-type: none;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
