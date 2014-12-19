angular.module('todosApp').controller('TodosController',TodosController);

TodosController.$inject = ['$firebase'];

function TodosController($firebase) {
	this.text = null;
	this.todosList = getTodos();
	this.addTodo = addTodo;
	this.deleteTodo = deleteTodo;
	
	function addTodo() {
		this.todosList.$add({task:this.text, done:false});
		this.text = null;
	}
	function deleteTodo(index) {
		this.todosList.$remove(index);
	}
	function getTodos() {
		var ref = new Firebase('http://mytodolistapp.firebaseIO.com/todo')
		var todos = $firebase(ref).$asArray();
	return todos;
}

}