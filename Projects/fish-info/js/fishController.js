angular.module('fishApp').controller('FishController',FishController);

function FishController() {
	var fish = this;
		fish.test = "hi";
		fish.checkSearch = checkSearch;
		// For the future of adding fish
		// fish.addFish = addFish;
		fish.canSearch = false;
		fish.fishes = [ 
				{ 	name:'RAINBOW TROUT',
					aka: 'STEEL HEAD TROUT',
					location:'COLD WATER_ PACIFIC OCEAN',
					recipie:'http://allrecipes.com/recipe/baked-fresh-rainbow-trout/',
					image:'img/rainbowtrout.png',
				},
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