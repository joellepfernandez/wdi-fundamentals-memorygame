console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne === cardTwo) {
  day = 'You found a match!';
} else {
  alert('Sorry, try again.');
}

if (cardOne === cardThree) {
  day = 'Sorry, try again.';
} else {
  alert('You found a match!');
}

if (cardTwo === cardThree) {
  day = 'Sorry, try again.';
} else {
  alert('You found a match!');
}

if (cardThree === cardFour) {
  day = 'You found a match!';
} else {
  alert('Sorry, try again.');
}*/

/*function createCards() {
var gameBoard = document.getElementById('gameBoard');
  for(i = 0; i <4; i++){
var newDiv = document.createElement('div');
  newDiv.className = "card";
  gameBoard.appendChild(newDiv);
}
};
createCards(); //calls the cards

*/
var cards = ['queen','queen','king', 'king']; //represents cards in game
var cardsInPlay = []; //represents cards in play

var board = document.getElementById('game-board'); //defines board so you can add cards to board
function createBoard() { //creates function 
  for (var i = 0; i < cards.length; i++) { //loops through cards i++ adding 1 card until reaching the length of card array
    var cardElement = document.createElement('div'); //creates a div element to be used as a card
    cardElement.className = 'card'; //links cardElement to .class in CSS
  cardElement.setAttribute('data-card', cards[i]); //set 'data-card' to the element of the array like queen or king not data
  cardElement.addEventListener('click', isTwoCards); //listens for a click of the card so that the function isTwoCards is executed
  board.appendChild(cardElement); //append (add) the card to the board
  board.appendChild(cardElement);
}

function isTwoCards() { //see if cards are in play
  cardsInPlay.push(this.getAttribute('data-card')); //gives access to the cardElement
  console.log(this.getAttribute('data-card')); //show image of card
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
  } 
  else {
    this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
  }
  if (cardsInPlay.length === 2) { //signifies that there are 2 cards in play
    isMatch(cardsInPlay); // pass the cardsInPlay as an argument to isMatch function
    cardsInPlay = []; // clear cards in play array for next try
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) { //card queen1 and card queen 2 see line 44
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}


}

createBoard();