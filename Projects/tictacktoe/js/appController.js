angular.module('tickTacToe').controller('tickTacToeController',tickTacToeController);
// injection of firebase 
tickTacToeController.$inject = ['$firebase'];

function tickTacToeController($firebase) {
    var tick = this;
    // declaration of firebase function
    tick.sync = sync();
    // function declarations

    tick.findWinner2 =findWinner2;
    tick.findWinner = findWinner;
    tick.boxOne = boxOne;
    tick.boxTwo = boxTwo;
    tick.boxThree = boxThree;
    tick.boxFour = boxFour;
    tick.boxFive = boxFive;
    tick.boxSix = boxSix;
    tick.boxSeven = boxSeven;
    tick.boxEight = boxEight;
    tick.boxNine = boxNine;
    tick.resetGame = resetGame;
    // inital declarations
    tick.sync.player1 = [];
    tick.sync.player2 = [];
    tick.sync.playCounter = 0;
    tick.sync.oneWins = 0;
    tick.sync.twoWins = 0;
    tick.sync.drawCounter = 0;
    tick.sync.header = true;
    tick.sync.yeezyWins = false;
    tick.sync.tswiftWins = false;
    tick.sync.draw = false;
    tick.sync.firstTurn = true;
// Funtions that happen with a click
    tick.sync.showOneFirst = true;
    tick.sync.showOneSecond = true;
    tick.sync.showTwoFirst = true;
    tick.sync.showTwoSecond = true;
    tick.sync.showThreeFirst = true;
    tick.sync.showThreeSecond = true;
    tick.sync.showFourFirst = true;
    tick.sync.showFourSecond = true;
    tick.sync.showFiveFirst = true;
    tick.sync.showFiveSecond = true;
    tick.sync.showSixFirst = true;
    tick.sync.showSixSecond = true;
    tick.sync.showSevenFirst = true;
    tick.sync.showSevenSecond = true;
    tick.sync.showEightFirst = true;
    tick.sync.showEightSecond = true;
    tick.sync.showNineFirst = true;
    tick.sync.showNineSecond = true;
// 
    tick.sync.canplayOne = true;
    tick.sync.canplayTwo = true;
    tick.sync.canplayThree = true;
    tick.sync.canplayFour = true;
    tick.sync.canplayFive = true;
    tick.sync.canplaySix = true;
    tick.sync.canplaySeven = true;
    tick.sync.canplayEight = true;
    tick.sync.canplayNine = true;
// Firebase function set up
function sync() {
        var ref = new Firebase('http://ticktak.firebaseIO.com/ticktak');
        var tac = $firebase(ref).$asArray();
        return tac;
    }
// Game fuctions
function findWinner2 (){

    if (tick.sync.player2.indexOf(1) != -1 &&
        tick.sync.player2.indexOf(2) != -1 &&
        tick.sync.player2.indexOf(3) != -1
        ) {
            tick.sync.tswiftWins = true;
            tick.sync.header = false;
            tick.sync.twoWins ++;

        }
    else if (
        tick.sync.player2.indexOf(1) != -1 &&
        tick.sync.player2.indexOf(4) != -1 &&
        tick.sync.player2.indexOf(7) != -1
        ) {
            tick.sync.tswiftWins = true;
            tick.sync.header = false;
            tick.sync.twoWins ++;

        }
    else if (
        tick.sync.player2.indexOf(1) != -1 &&
        tick.sync.player2.indexOf(5) != -1 &&
        tick.sync.player2.indexOf(9) != -1
        ) {
            tick.sync.tswiftWins = true;
            tick.sync.header = false;
            tick.sync.twoWins ++;

        }
        else if (
        tick.sync.player2.indexOf(1) != -1 &&
        tick.sync.player2.indexOf(5) != -1 &&
        tick.sync.player2.indexOf(9) != -1
        ) {
            tick.sync.tswiftWins = true;
            tick.sync.header = false;
            tick.sync.twoWins ++;

        }
        else if (
        tick.sync.player2.indexOf(2) != -1 &&
        tick.sync.player2.indexOf(5) != -1 &&
        tick.sync.player2.indexOf(8) != -1
        ) {
            tick.sync.tswiftWins = true;
            tick.sync.header = false;
            tick.sync.twoWins ++;

        }
        else if (
        tick.sync.player2.indexOf(3) != -1 &&
        tick.sync.player2.indexOf(6) != -1 &&
        tick.sync.player2.indexOf(9) != -1
        ) {
            tick.sync.tswiftWins = true;
            tick.sync.header = false;
            tick.sync.twoWins ++;

        }
        else if (
        tick.sync.player2.indexOf(3) != -1 &&
        tick.sync.player2.indexOf(5) != -1 &&
        tick.sync.player2.indexOf(7) != -1
        ) {
            tick.sync.tswiftWins = true;
            tick.sync.header = false;
            tick.sync.twoWins ++;

        }
        else if (
        tick.sync.player2.indexOf(4) != -1 &&
        tick.sync.player2.indexOf(5) != -1 &&
        tick.sync.player2.indexOf(6) != -1
        ) {
            tick.sync.tswiftWins = true;
            tick.sync.header = false;
            tick.sync.twoWins ++;

        }
        else if (
        tick.sync.player2.indexOf(7) != -1 &&
        tick.sync.player2.indexOf(8) != -1 &&
        tick.sync.player2.indexOf(9) != -1
        ) {
            tick.sync.tswiftWins = true;
            tick.sync.header = false;
            tick.sync.twoWins ++;

        }
        else if ( tick.sync.playCounter >= 9
            ) {
            tick.sync.draw = true;
            tick.sync.header = false;
            tick.sync.drawCounter ++;
        }
        else {
        }
}
function findWinner(){

    if (tick.sync.player1.indexOf(1) != -1 &&
        tick.sync.player1.indexOf(2) != -1 &&
        tick.sync.player1.indexOf(3) != -1
        ) {
            tick.sync.yeezyWins = true;
            tick.sync.header = false;
            tick.sync.oneWins ++;
        }
    else if (
        tick.sync.player1.indexOf(1) != -1 &&
        tick.sync.player1.indexOf(4) != -1 &&
        tick.sync.player1.indexOf(7) != -1
        ) {
            tick.sync.yeezyWins = true;
            tick.sync.header = false;
            tick.sync.oneWins ++;
        }
    else if (
        tick.sync.player1.indexOf(1) != -1 &&
        tick.sync.player1.indexOf(5) != -1 &&
        tick.sync.player1.indexOf(9) != -1
        ) {
            tick.sync.yeezyWins = true;
            tick.sync.header = false;
            tick.sync.oneWins ++;
        }
        else if (
        tick.sync.player1.indexOf(1) != -1 &&
        tick.sync.player1.indexOf(5) != -1 &&
        tick.sync.player1.indexOf(9) != -1
        ) {
            tick.sync.yeezyWins = true;
            tick.sync.header = false;
            tick.sync.oneWins ++;
        }
        else if (
        tick.sync.player1.indexOf(2) != -1 &&
        tick.sync.player1.indexOf(5) != -1 &&
        tick.sync.player1.indexOf(8) != -1
        ) {
            tick.sync.yeezyWins = true;
            tick.sync.header = false;
            tick.sync.oneWins ++;
        }
        else if (
        tick.sync.player1.indexOf(3) != -1 &&
        tick.sync.player1.indexOf(6) != -1 &&
        tick.sync.player1.indexOf(9) != -1
        ) {
            tick.sync.yeezyWins = true;
            tick.sync.header = false;
            tick.sync.oneWins ++;
        }
        else if (
        tick.sync.player1.indexOf(3) != -1 &&
        tick.sync.player1.indexOf(5) != -1 &&
        tick.sync.player1.indexOf(7) != -1
        ) {
            tick.sync.yeezyWins = true;
            tick.sync.header = false;
            tick.sync.oneWins ++;
        }
        else if (
        tick.sync.player1.indexOf(4) != -1 &&
        tick.sync.player1.indexOf(5) != -1 &&
        tick.sync.player1.indexOf(6) != -1
        ) {
            tick.sync.yeezyWins = true;
            tick.sync.header = false;
            tick.sync.oneWins ++;
        }
        else if (
        tick.sync.player1.indexOf(7) != -1 &&
        tick.sync.player1.indexOf(8) != -1 &&
        tick.sync.player1.indexOf(9) != -1
        ) {
            tick.sync.yeezyWins = true;
            tick.sync.header = false;
            tick.sync.oneWins ++;
        }
        else if ( tick.sync.playCounter == 9) {
            tick.sync.draw = true;
            tick.sync.header = false;
            tick.sync.drawCounter ++;
        }
        else {
        }
}
//  Function for box1
function boxOne() {
    
    if (tick.sync.canplayOne === false) {
    }
    else if (tick.sync.yeezyWins === true || tick.sync.tswiftWins === true) {    
    }
    else if (tick.sync.firstTurn === true) {
        tick.sync.showOneFirst = false;
        tick.sync.player1.push(1);
        tick.sync.playCounter ++;
        tick.findWinner();
        tick.sync.firstTurn = tick.sync.firstTurn === false;
}
    else {
        tick.sync.showOneSecond = false;
        tick.sync.player2.push(1);
        tick.sync.playCounter ++;
        tick.findWinner2();
        tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    
    tick.sync.canplayOne = false;
    

}
// Fuction for box2
function boxTwo() {

    if (tick.sync.canplayTwo === false) {
    }
    else if (tick.sync.yeezyWins === true || tick.sync.tswiftWins === true) {    
    }
    else if (tick.sync.firstTurn === true) {
    tick.sync.showTwoFirst = false;
    tick.sync.player1.push(2);
    tick.sync.playCounter ++;
    tick.findWinner();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    else {
    tick.sync.showTwoSecond = false;
    tick.sync.player2.push(2);
    tick.sync.playCounter ++;
    tick.findWinner2();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    
    tick.sync.canplayTwo = false;

}
// Function for box3
function boxThree() {
    
    if (tick.sync.canplayThree === false) {
    }
    else if (tick.sync.yeezyWins === true || tick.sync.tswiftWins === true) {    
    }
    else if (tick.sync.firstTurn === true) {
    tick.sync.showThreeFirst = false;
    tick.sync.player1.push(3);
    tick.sync.playCounter ++;
    tick.findWinner();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    else {
    tick.sync.showThreeSecond = false;
    tick.sync.player2.push(3);
    tick.sync.playCounter ++;
    tick.findWinner2();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    
    tick.sync.canplayThree = false;
}
function boxFour() {
    
    if (tick.sync.canplayFour === false) {
    }
    else if (tick.sync.yeezyWins === true || tick.sync.tswiftWins === true) {    
    }
    else if (tick.sync.firstTurn === true) {
    tick.sync.showFourFirst = false;
    tick.sync.player1.push(4);
    tick.sync.playCounter ++;
    tick.findWinner();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    else {
    tick.sync.showFourSecond = false;
    tick.sync.player2.push(4);
    tick.sync.playCounter ++;
    tick.findWinner2();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    
    tick.sync.canplayFour = false;
}
// Function for box 5
function boxFive () {
    
    if (tick.sync.canplayFive === false) {
    }
    else if (tick.sync.yeezyWins === true || tick.sync.tswiftWins === true) {    
    }
    else if (tick.sync.firstTurn === true) {
    tick.sync.showFiveFirst = false;
    tick.sync.player1.push(5);
    tick.sync.playCounter ++;
    tick.findWinner();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    else {
    tick.sync.showFiveSecond = false;
    tick.sync.player2.push(5);
    tick.sync.playCounter ++;
    tick.findWinner2();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
   
    tick.sync.canplayFive = false;
}
// Box 6
function boxSix () {
   
    if (tick.sync.canplaySix === false) {
    }
    else if (tick.sync.yeezyWins === true || tick.sync.tswiftWins === true) {    
    }
    else if (tick.sync.firstTurn === true) {
    tick.sync.showSixFirst = false;
    tick.sync.player1.push(6);
    tick.sync.playCounter ++;
    tick.findWinner();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    else {
    tick.sync.showSixSecond = false;
    tick.sync.player2.push(6);
    tick.sync.playCounter ++;
    tick.findWinner2();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    
    tick.sync.canplaySix = false;
}
//  Box 7
function boxSeven() {
    
    if (tick.sync.canplaySeven === false) {
    }
    else if (tick.sync.yeezyWins === true || tick.sync.tswiftWins === true) {    
    }
    else if (tick.sync.firstTurn === true) {
    tick.sync.showSevenFirst = false;
    tick.sync.player1.push(7);
    tick.sync.playCounter ++;
    tick.findWinner();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    else {
    tick.sync.showSevenSecond = false;
    tick.sync.player2.push(7);
    tick.sync.playCounter ++;
    tick.findWinner2();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    
    tick.sync.canplaySeven = false;
}
// Box 8
function boxEight() {
    
    if (tick.sync.canplayEight === false) {
    }
    else if (tick.sync.yeezyWins === true || tick.sync.tswiftWins === true) {    
    }
    else if (tick.sync.firstTurn === true) {
    tick.sync.showEightFirst = false;
    tick.sync.player1.push(8);
    tick.sync.playCounter ++;
    tick.findWinner();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    else {
    tick.sync.showEightSecond = false;
    tick.sync.player2.push(8);
    tick.sync.playCounter ++;
    tick.findWinner2();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    
    tick.sync.canplayEight = false;
}
//  Box 9 
function boxNine() {

    if (tick.sync.canplayNine === false) {
    }
    else if (tick.sync.yeezyWins === true || tick.sync.tswiftWins === true) {    
    }
    else if (tick.sync.firstTurn === true) {
    tick.sync.showNineFirst = false;
    tick.sync.player1.push(9);
    tick.sync.playCounter ++;
    tick.findWinner();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    else {
    tick.sync.showNineSecond = false;
    tick.sync.player2.push(9);
    tick.sync.playCounter ++;
    tick.findWinner2();
    tick.sync.firstTurn = tick.sync.firstTurn === false;
    }
    
    tick.sync.canplayNine = false;
}
function resetGame() {
    if (tick.sync.yeezyWins === true) {
        tick.sync.firstTurn = true;
    }
    else if (tick.sync.draw === true && tick.sync.firstTurn === true) {
        tick.sync.firstTurn = false;
    }
    else if 
        (tick.sync.draw === true && tick.sync.firstTurn === false) {
        tick.sync.firstTurn = true;
    }
    else {
        tick.sync.firstTurn = false;
    }
    tick.sync.player1 = [];
    tick.sync.player2 = [];
    tick.sync.showOneFirst = true;
    tick.sync.showOneSecond = true;
    tick.sync.showTwoFirst = true;
    tick.sync.showTwoSecond = true;
    tick.sync.showThreeFirst = true;
    tick.sync.showThreeSecond = true;
    tick.sync.showFourFirst = true;
    tick.sync.showFourSecond = true;
    tick.sync.showFiveFirst = true;
    tick.sync.showFiveSecond = true;
    tick.sync.showSixFirst = true;
    tick.sync.showSixSecond = true;
    tick.sync.showSevenFirst = true;
    tick.sync.showSevenSecond = true;
    tick.sync.showEightFirst = true;
    tick.sync.showEightSecond = true;
    tick.sync.showNineFirst = true;
    tick.sync.showNineSecond = true;
    tick.sync.playCounter = 0;
    tick.sync.canplayOne = true;
    tick.sync.canplayTwo = true;
    tick.sync.canplayThree = true;
    tick.sync.canplayFour = true;
    tick.sync.canplayFive = true;
    tick.sync.canplaySix = true;
    tick.sync.canplaySeven = true;
    tick.sync.canplayEight = true;
    tick.sync.canplayNine = true;
    tick.sync.header = true;
    tick.sync.tswiftWins = false;
    tick.sync.yeezyWins = false;
    tick.sync.draw = false;
    
}
}