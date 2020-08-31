var app = new Vue({ 
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
});

var app2 = new Vue({
	el: "#app-2",
	data:{
		message: '이 페이지는' + new Date() + '에 로드 되었습니다.'
	}
});

var app3 = new Vue({
	el: "#app-3",
	data:{
		seen: true,
		seen2: false
	}
});

var app4 = new Vue({
	el: "#app-4",
	data:{
		todos:[
			{text:'Javascript 배우기'},
			{text:'Vue 배우기'},
			{text:'project 만들자'}
		]
	}
});

var app5 = new Vue({
	el: "#app-5",
	data: {
		message: "안녕하세요! Vue.js!"
	},
	methods:{
		reverseMessage: function(){
			this.message = this.message.split('').reverse().join('');
		}
	}
});

var app6 = new Vue({
	el: "#app-6",
	data:{
		message: "안녕하세요 vue!"
	}
});

Vue.component('todo-tiem',{
	props:['todo'],
	template: '<li id="">{{ todo.text }}</li>'
})

var app7 = new Vue({
	el: "#app-7",
	data:{
		groceryList:[
			{id: 0, text: 'Vegetables'},
			{id: 1, text: 'Cheese'},
			{id: 2, text: 'Whatever else humans are supposed to eat'}
		]
	}
});

var data = { a: 1} ;

var vm = new Vue({
	el: "#test1",
	data: data
});

// Uncaught TypeError: Cannot assign to read only property 'foo' of object '#<Object>' at Vue.proxySetter [as foo] 
// vm2.foo = 'bbb';


vm.$data === data; // => true
vm.$el === document.getElementById("test1"); // => true

// $watch 는 인스턴스 메소드
vm.$watch('a',function(newVal, oldVal){
	// vm.a 가 변경되면 호출
	console.log("newVal : " + newVal);
	console.log("oldVal : " + oldVal);
});

vm.a === data.a; 

vm.a = 2;

// data.a = 3;

vm.b = 'hi';


var data2 = {
	newTodoText: '',
	visitCount: 0,
	hideCompletedTodos: false,
	todos: [],
	error: null
};


var obj = {
	foo : 'bar'
};

Object.freeze(obj);

var vm2 = new Vue({
	el: "#app-8",
	data: obj
});

obj.foo = 'aaa';


new Vue({
	data: {
		a: 1
	},
	create: function(){
		// this 는 vm 인스턴스를 가리킨다.
		console.log("a is: " + this.a); 
	}
}); 

var app9 = new Vue({
				el: "#app-9",
				data:{
					dynamicId: 'app9DivId',
					// isButtonDisabled: false,
					isButtonDisabled: true,
					rawHtml: '<table border="1"><tr><td>1</td><td>2</td><td>3</td></tr></table>',
					number: 1,
					ok: true,
					message: "가나다라마바사"
				}
			});
app9.number = 2;
app9.ok = false;