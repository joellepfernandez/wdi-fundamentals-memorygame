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

document.getElementById('game-board');

// create a section element... <section></section>
var card = document.createCards('card');

// add a class... <section class='blue-skies'></section>
strongbadia.className = 'card';

// append the area to a world element (maybe a div somewhere?)
// <div>
//   <section class='blue-skies'></section>
// </div>
world.appendChild(strongbadia);