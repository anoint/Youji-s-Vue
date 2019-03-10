Vue.component('todo-footer', {
    template : '<p>This is another global child component</p>'
});
var todoList = {
    template : '<p>This id another local child component</p>'
}
var app = new Vue ({
    el : '#app',
    data : {
        message :'This is a parent component'
    },
    components : {
        'todo-list' : todoList
    }
});
        