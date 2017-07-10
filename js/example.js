var test = new Vue({
	el: '#app',
	data: {
		show: false,
		todos: [
			{ 
				text: 'text 1',
				status: false,
				show: true
			},
			{ 
				text: 'text 2', 
				status: true,
				show: true
			}
		]
	},
	methods: {
		throught: function() {
			this.todos[0].status = true;
		},
		onClick: function() {
			this.todos.push({
				text: this.message,
				status: false,
				show: true
			})
		},
		removeTrought: function() {
			for (var i = 0; i < this.todos.length; i++) {
				if (this.todos[i].status) {
					this.todos[i].show = false;
				}
			}
		}
	}
})

// Определяем новый компонент под названием todo-item
Vue.component('todo-item', {
	// Компонент todo-item теперь принимает
	// "prop", то есть пользовательский параметр.
	// Этот параметр называется todo.
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})