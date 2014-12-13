var Ticktactoe = angular.module("tickTacToe",[]);

Ticktactoe.controller("gameController",['$scope',function($scope){

// HOW THE COMPUTER WILL CHECK IF THE PLAYER HAS WON
// IF player 1 contains the winning combination THEN
// 		player 1 wins, gets a point & the game resets
// ELSE player 2 contains the winning combination THEN
// 		player 2 wins, gets a point & the game resets
// ELSE there are 9 turns that have been won THEN
// 		game is a tie & the game resets
// ElSE the game isn't finished yet and its the next persons turns

// WHAT HAPPENS WHEN SOMEONE CLICKS ON A SQUARE (#1 FOR ARGUMENTS SAKE)
// IF player 1 makes the click THEN
//  	it will display player 1's image, add 1 to the turn counter
//		add the # to player 1's list, then check if they won
// ELSE player 2 makes the click THEN
//  	it will display player 2's image, add 1 to the turn counter
// 		add the # to player 1's list, then check if they won

$scope.player1 = [];
$scope.player2 = [];
$scope.playCounter = 0
$scope.oneWins = 0;
$scope.twoWins = 0;
$scope.drawCounter = 0;
// $scope.winnerCheck = function() {
        // if ($scope.player1.indexOf(1) != -1 && 
        	// $scope.player1.indexOf(2) != -1 &&
        	// $scope.player1.indexOf(3) != -1) {
            // return true;
            // player1 wins, player1's counter ++, gameresets
        // }
        // if (player2.indexOf(1) != -1 && 
        	// player2.indexOf(2) != -1 &&
        	// player2.indexOf(3) != -1) {
            // player2 wins, player2's counter ++, gameresets
        // }
        // Continue down the line for all of the checks
    	// else { 
    	// return false
// }};
    $scope.firstTurn = true;
// Funtions that happen with a click
    $scope.showOneFirst = true;
    $scope.showOneSecond = true;
    $scope.showTwoFirst = true;
    $scope.showTwoSecond = true;
    $scope.showThreeFirst = true;
    $scope.showThreeSecond = true;
    $scope.showFourFirst = true;
    $scope.showFourSecond = true;
    $scope.showFiveFirst = true;
    $scope.showFiveSecond = true;
    $scope.showSixFirst = true;
    $scope.showSixSecond = true;
    $scope.showSevenFirst = true;
    $scope.showSevenSecond = true;
    $scope.showEightFirst = true;
    $scope.showEightSecond = true;
    $scope.showNineFirst = true;
    $scope.showNineSecond = true;
// Game fuctions
$scope.findWinner2 = function(){

    if ($scope.player2.indexOf(1) != -1 &&
        $scope.player2.indexOf(2) != -1 &&
        $scope.player2.indexOf(3) != -1
        ) {
            alert("Player Wins");
            $scope.twoWins ++;
        }
    else if (
        $scope.player2.indexOf(1) != -1 &&
        $scope.player2.indexOf(4) != -1 &&
        $scope.player2.indexOf(7) != -1
        ) {
            alert("Player Wins");
            $scope.twoWins ++;
        }
    else if (
        $scope.player2.indexOf(1) != -1 &&
        $scope.player2.indexOf(5) != -1 &&
        $scope.player2.indexOf(9) != -1
        ) {
            alert("Player Wins");
            $scope.twoWins ++;
        }
        else if (
        $scope.player2.indexOf(1) != -1 &&
        $scope.player2.indexOf(5) != -1 &&
        $scope.player2.indexOf(9) != -1
        ) {
            alert("Player Wins");
            $scope.twoWins ++;
        }
        else if (
        $scope.player2.indexOf(2) != -1 &&
        $scope.player2.indexOf(5) != -1 &&
        $scope.player2.indexOf(8) != -1
        ) {
            alert("Player Wins");
            $scope.twoWins ++;
        }
        else if (
        $scope.player2.indexOf(3) != -1 &&
        $scope.player2.indexOf(6) != -1 &&
        $scope.player2.indexOf(9) != -1
        ) {
            alert("Player Wins");
            $scope.twoWins ++;
        }
        else if (
        $scope.player2.indexOf(3) != -1 &&
        $scope.player2.indexOf(5) != -1 &&
        $scope.player2.indexOf(7) != -1
        ) {
            alert("Player Wins");
            $scope.twoWins ++;
        }
        else if (
        $scope.player2.indexOf(4) != -1 &&
        $scope.player2.indexOf(5) != -1 &&
        $scope.player2.indexOf(6) != -1
        ) {
            alert("Player Wins");
            $scope.twoWins ++;
        }
        else if (
        $scope.player2.indexOf(7) != -1 &&
        $scope.player2.indexOf(8) != -1 &&
        $scope.player2.indexOf(9) != -1
        ) {
            alert("Player Wins");
            $scope.twoWins ++;
        }
        else if ( $scope.playCounter >= 9
            ) {
            alert("It's a tie!");
            $scope.drawCounter ++;
        }
        else {
        }
};
$scope.findWinner = function(){

    if ($scope.player1.indexOf(1) != -1 &&
        $scope.player1.indexOf(2) != -1 &&
        $scope.player1.indexOf(3) != -1
        ) {
            alert("Player 1 Wins");
            $scope.oneWins ++;
        }
    else if (
        $scope.player1.indexOf(1) != -1 &&
        $scope.player1.indexOf(4) != -1 &&
        $scope.player1.indexOf(7) != -1
        ) {
            alert("Player Wins");
            $scope.oneWins ++;
        }
    else if (
        $scope.player1.indexOf(1) != -1 &&
        $scope.player1.indexOf(5) != -1 &&
        $scope.player1.indexOf(9) != -1
        ) {
            alert("Player Wins");
            $scope.oneWins ++;
        }
        else if (
        $scope.player1.indexOf(1) != -1 &&
        $scope.player1.indexOf(5) != -1 &&
        $scope.player1.indexOf(9) != -1
        ) {
            alert("Player Wins");
            $scope.oneWins ++;
        }
        else if (
        $scope.player1.indexOf(2) != -1 &&
        $scope.player1.indexOf(5) != -1 &&
        $scope.player1.indexOf(8) != -1
        ) {
            alert("Player Wins");
            $scope.oneWins ++;
        }
        else if (
        $scope.player1.indexOf(3) != -1 &&
        $scope.player1.indexOf(6) != -1 &&
        $scope.player1.indexOf(9) != -1
        ) {
            alert("Player Wins");
            $scope.oneWins ++;
        }
        else if (
        $scope.player1.indexOf(3) != -1 &&
        $scope.player1.indexOf(5) != -1 &&
        $scope.player1.indexOf(7) != -1
        ) {
            alert("Player Wins");
            $scope.oneWins ++;
        }
        else if (
        $scope.player1.indexOf(4) != -1 &&
        $scope.player1.indexOf(5) != -1 &&
        $scope.player1.indexOf(6) != -1
        ) {
            alert("Player Wins");
            $scope.oneWins ++;
        }
        else if (
        $scope.player1.indexOf(7) != -1 &&
        $scope.player1.indexOf(8) != -1 &&
        $scope.player1.indexOf(9) != -1
        ) {
            alert("Player Wins");
            $scope.oneWins ++;
        }
        else if ( $scope.playCounter >= 9
            ) {
            alert("It's a tie!");
            $scope.drawCounter ++;
        }
        else {
        }
};
// Player One's Function
$scope.firstPlayer = function(){
    $scope.showOneFirst = false;
    $scope.player1.push(1);
    $scope.findWinner();
};
// Player Two's Function
$scope.secondPlayer = function(){
    $scope.showOneSecond = false;
    $scope.player2.push(1);
    $scope.findWinner2();
};

//  Function for box1
$scope.boxOne = function() {
    $scope.playCounter ++
    if ($scope.firstTurn === true) {
        $scope.firstPlayer();
}
    else {
        $scope.secondPlayer();
    }
    $scope.firstTurn = $scope.firstTurn === false;

};
// Fuction for box2
$scope.boxTwo = function() {
    $scope.playCounter ++
    if ($scope.firstTurn === true) {
    $scope.showTwoFirst = false;
    $scope.player1.push(2);
    $scope.findWinner();
    }
    else {
    $scope.showTwoSecond = false;
    $scope.player2.push(2);
    $scope.findWinner2();
    }
    $scope.firstTurn = $scope.firstTurn === false;

};
// Function for box3
$scope.boxThree = function() {
    $scope.playCounter ++
    if ($scope.firstTurn === true) {
    $scope.showThreeFirst = false;
    $scope.player1.push(3);
    $scope.findWinner();
    }
    else {
    $scope.showThreeSecond = false;
    $scope.player2.push(3);
    $scope.findWinner2();
    }
    $scope.firstTurn = $scope.firstTurn === false;
};
$scope.boxFour = function() {
    $scope.playCounter ++
    if ($scope.firstTurn === true) {
    $scope.showFourFirst = false;
    $scope.player1.push(4);
    $scope.findWinner();
    }
    else {
    $scope.showFourSecond = false;
    $scope.player2.push(4);
    $scope.findWinner2();
    }
    $scope.firstTurn = $scope.firstTurn === false;
};
// Function for box 5
$scope.boxFive = function() {
    $scope.playCounter ++
    if ($scope.firstTurn === true) {
    $scope.showFiveFirst = false;
    $scope.player1.push(5);
    $scope.findWinner();
    }
    else {
    $scope.showFiveSecond = false;
    $scope.player2.push(5);
    $scope.findWinner2();
    }
    $scope.firstTurn = $scope.firstTurn === false;
};
// Box 6
$scope.boxSix = function() {
    $scope.playCounter ++
   if ($scope.firstTurn === true) {
    $scope.showSixFirst = false;
    $scope.player1.push(6);
    $scope.findWinner();
    }
    else {
    $scope.showSixSecond = false;
    $scope.player2.push(6);
    $scope.findWinner2();
    }
    $scope.firstTurn = $scope.firstTurn === false;
};
//  Box 7
$scope.boxSeven = function() {
    $scope.playCounter ++
    if ($scope.firstTurn === true) {
    $scope.showSevenFirst = false;
    $scope.player1.push(7);
    $scope.findWinner();
    }
    else {
    $scope.showSevenSecond = false;
    $scope.player2.push(7);
    $scope.findWinner2();
    }
    $scope.firstTurn = $scope.firstTurn === false;
};
// Box 8
$scope.boxEight = function() {
    $scope.playCounter ++
    if ($scope.firstTurn === true) {
    $scope.showEightFirst = false;
    $scope.player1.push(8);
    $scope.findWinner();
    }
    else {
    $scope.showEightSecond = false;
    $scope.player2.push(8);
    $scope.findWinner2();
    }
    $scope.firstTurn = $scope.firstTurn === false;
};
//  Box 9 
$scope.boxNine = function() {
    $scope.playCounter ++
   if ($scope.firstTurn === true) {
    $scope.showNineFirst = false;
    $scope.player1.push(9);
    $scope.findWinner();
    }
    else {
    $scope.showNineSecond = false;
    $scope.player2.push(9);
    $scope.findWinner2();
    }
    $scope.firstTurn = $scope.firstTurn === false;
};
$scope.resetGame = function() {
    $scope.player1 = [];
    $scope.player2 = [];
    $scope.showOneFirst = true;
    $scope.showOneSecond = true;
    $scope.showTwoFirst = true;
    $scope.showTwoSecond = true;
    $scope.showThreeFirst = true;
    $scope.showThreeSecond = true;
    $scope.showFourFirst = true;
    $scope.showFourSecond = true;
    $scope.showFiveFirst = true;
    $scope.showFiveSecond = true;
    $scope.showSixFirst = true;
    $scope.showSixSecond = true;
    $scope.showSevenFirst = true;
    $scope.showSevenSecond = true;
    $scope.showEightFirst = true;
    $scope.showEightSecond = true;
    $scope.showNineFirst = true;
    $scope.showNineSecond = true;
    $scope.firstTurn = true;
    $scope.playCounter = 0;
};

}]);
