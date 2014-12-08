
window.onload = function () {
	document.getElementById('rock').onclick = function (){
		playerPick = "Rock";
		randomComputerChoice();
		alert("You picked "+playerPick+" and the computer picked "+computerChoice);
		outcome();
	};
	document.getElementById('paper').onclick = function (){
		playerPick = "Paper";
		randomComputerChoice();
		alert("You picked "+playerPick+" and the computer picked "+computerChoice);
		outcome();
	};
	document.getElementById('scissors').onclick = function (){
		playerPick = "Scissors";
		randomComputerChoice();
		alert("You picked "+playerPick+" and the computer picked "+computerChoice);
		outcome();
	};
}
var outcome = function() {
if (playerPick == "Rock" && computerChoice == "Paper") {
	alert("You Lose");
}
else if (playerPick == "Rock" && computerChoice == "Scissors") {
	alert("You Win");
}
else if (playerPick == "Paper" && computerChoice == "Scissors") {
	alert("You Lose");
}
else if (playerPick == "Paper" && computerChoice == "Rock") {
	alert("You Win");
}
else if (playerPick == "Scissors" && computerChoice == "Paper") {
	alert("You Win");
}
else if (playerPick == "Scissors" && computerChoice == "Rock") {
	alert("You Win");
}
else {
	alert("It's a tie");
}
};


var randomComputerChoice = function() {
randomizeChoice = Math.random();
if (randomizeChoice <= .33) {
	computerChoice = "Rock";
}
else if ( .33 < randomizeChoice && randomizeChoice < .67) {
	computerChoice = "Paper";
}
else if (randomizeChoice >=.67) {
	computerChoice = "Scissors";
}
};

var startGame = function() {
var choice = prompt("Choose 1 - Rock, choose 2 -paper, choose 3 - scissors")

if (choice == 1) { 
playerChoice = "Rock";
}
else if (choice == 2) {
playerChoice = "Paper";
}
else if (choice == 3 ) {
playerChoice ="Scissors;"
}
else {
alert("You did not choice is not valid");
}

alert(playerChoice)
};