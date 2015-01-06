angular.module('choreApp').controller('choreController', choreController);

function choreController() {
	var chores = this;
	chores.sample = 'hello';
	chores.addTodos = addTodos;

	chores.todoList = [
					{due: 'tomorrow',todos: 'homework',},
					{due: 'two days', todos: 'studying',}
					];

	function addTodos(x, y ) {
		chores.todoList.push({due:x, todos:y});
	}
}