angular.module('fishApp').controller('FishController',FishController);

function FishController() {
	var fish = this;
		fish.test = "hi";
		fish.checkSearch = checkSearch;
		// For the future of adding fish
		// fish.addFish = addFish;
		fish.canSearch = false;
		fish.fishes = [ 
				{ 	name:'rainbow trout',
					location:'california',
					weight:'a lot of it',
					image:'img/rainbowtrout.jpg'
				},
				{	name:'salmon',
					location:'everywhere',
					weight:'a lot of it',
				}
	];

	function checkSearch() {
		if (fish.search !== null) {
			fish.canSearch = true;
		}
		else if (fish.search === null) {
			fish.canSearch = false;
		}
	}
	// for the future of adding fish
	// function addFish( x, y,) {
	// 	fish.fishes.name.push(x)
	// 	fish.fishes.location.push(y)
	// }
}