//전역 컴포넌트 등록하기
Vue.component('child-component', {
    props : ['propsdata'],
    template : '<p>{{ prosdata }}</p>'
});

Vue.component('sibling-component', {
    props : ['parentToChild'],
    template : '<p>{{ parentToChild }}</p>'
});
//데이터 속성 추가하기
var app = new Vue ({
    el : '#app',
    data : {
        message :'Hello Vue! passed form Parent Component',
        message2 : 'anotherMessage'
    }
});
        