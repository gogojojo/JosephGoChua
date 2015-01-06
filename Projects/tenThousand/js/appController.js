 angular.module('tenThousandApp').controller('tenThousandController',tenThousandController);
// injecting firebase into the code 
tenThousandController.$inject = ['$firebase']

function tenThousandController($firebase){
	var controller = this;

	this.takeOff = getCount();
	this.addMinutes = addTime;

	this.resetCount = resetCount;

	function resetCount() {
		controller.takeOff.start = 10000
		controller.takeOff.x = 0
		controller.takeOff.$save()
	}
	
	function getCount() {
		var ref = new Firebase ("//tenthousand.firebaseIO.com/ten");
		var data = $firebase(ref).$asObject();
		return data;
	}


	function addTime(value){
		controller.takeOff.x += value;
		controller.takeOff.$save()
	}



} 