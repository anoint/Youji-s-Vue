<template>
    <div>
        <ul>
            <li v-for="(todoItem,index) in this.$store.getters.storedTodoItems" v-bind:key="todoItem.item">
                <i class="fas fa-check" v-bind:class="{completed: todoItem.completed}" 
                                         @click="toggleOneComplete({todoItem,index})">
                </i>
                <span v-bind:class="{completed: todoItem.completed}">
                    {{ todoItem.item }}
                </span>
                <button @click="deleteOneItem({todoItem,index})">삭제</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    methods: { 
        ...mapMutations([ 'deleteOneItem', 'toggleOneComplete' ])
    },
    computed:
    {
        ...mapGetters(['storedTodoItems'])
    }
}
</script>

<style>
ul
{
    list-style-type: none;
}
.completed 
{
    color: gray;
    text-decoration: line-through;
}
</style>
