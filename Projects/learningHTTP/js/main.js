angular
	.module('app',[])
	.controller('MainController',MainController);

	MainController.$inject = ['http'];

	function MainController($http) {
		var self = this;

		self.fetch = function()
 {
 	$http.get('data/toys.json')
 		.sucess(function(data){
 			self.toys = data;
 		});
 };	}