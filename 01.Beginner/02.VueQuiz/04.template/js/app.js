var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        msg2: 'Hi!',
        uid: '10',
        flag: false
    },
    methods: {
        clickBtn() {
            console.log('hi');
        },
        // clickBtn:function() {
        //     console.log('hi');
        // }
        clickBtn2() {
            console.log('jina');
        }
    }
})