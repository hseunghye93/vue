var cmp ={
  tomplate: '<p>This is another local child component</p>'
}

Vue.component('todo-footer',{
  tomplate:'<p>This is another global child component</p>'
});


var app = new Vue({
  el:'#app'
  , data: {
    message: 'This is a parent component'
  }
  , Components:{
    'todo-list': cmp
  }
});
