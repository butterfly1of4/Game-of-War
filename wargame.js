console.log("i'm connective");
//Players
const player1 = {hand: [], collectCards: function() {player1.hand.push()}
};
const player2 = {hand: [], collectCards: function() {player2.hand.push()}
};
//let testArr = [{ one: "one" },{ two: "two" },{ potato: "potato" },{ sunday: "Sunday" }];
//Cards/deck
const suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
const cards = [
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "Jack",
  "Queen",
  "King",
  "Ace",
];
const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const deck = [];
let card = {};
let shuffledDDeck = [];
let arena = [];
let battlefield = [];
let battleReserve = [];
//let battlefield = [[],[]]

//Create deck
function createDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      card = {
        suits: suits[i],
        cards: cards[j],
        value: value[j],
      };
      deck.push(card);
    }
  }
  console.log(deck);
  console.log("I'm the deck")
  return deck;
}

createDeck();

//Shuffle

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}
shuffle(deck);

//Deal
for (let i = 0; i < 26; i++) {
  player1.hand.push(deck[i]);
} 

for (let i = 26; i < 52; i++) {
  player2.hand.push(deck[i]);
} 
//console.log(player2.hand);
//console.log(player2.hand)


//Play a hand
function playCard(card1){
  let x = card1.shift()
  arena.push(x)
  return arena
 }
playCard(player1.hand)
playCard(player2.hand)
//console.log(arena)

/*
//Compare cards
function compareCards(){
  if (arena[0].value > arena[1].value) {
    player1.hand.push(...arena)
    console.log("Player 1 wins")
  } else if(arena[0].value < arena[1].value){
    player2.hand.push(...arena)
    console.log("Player 2 wins")
  } else if(arena[0].value == arena[1].value){
    console.log("We have a war")

  }
  console.log(player2.hand, player1.hand)
}
compareCards()


  }}*/

arena[1]== arena[0]

//WAR
//Deal war cards
function cardsDownWar(card2){
  let y = card2.slice(0,3)
  battleReserve.push(y)
  }

  function cardsUpWar(card3) {
    let y = card3.shift()
    battlefield.push(y);
    battlefield.length
  }
  console.log(battleReserve)
  console.log(battlefield)
  cardsDownWar(player2.hand)
  cardsDownWar(player1.hand)
  //console.log(battlefield, player1.hand, player2.hand)
  cardsUpWar(player1.hand)
  cardsUpWar(player2.hand)
 // console.log(battlefield, player1.hand, player2.hand)

//Play war
function playWar(){
  if (battlefield[0] > battlefield[1]){
    player1.hand.push(battlefield)
    player1.hand.push(battleReserve)
    console.log("The war is over. Player 1 wins")
  } else if (battlefield[0] < battlefield[1]){
    player2.hand.push(battlefield)
    player2.hand.push(battleReserve)
    console.log("The war is over. Player 2 wins")
  } else if (battlefield[0]== battlefield[1]){
    
  }
}

  function gameOver(hand1,hand2) {
    if (player1.hand == 0) {
      console.log("Game over. Player 2 wins")
    } else if (player2.hand == 0){
      console.log("Game over. Player 1 wins")
    } else {
      playCard(player1.hand)
      playCard(player2.hand)
    }
  }

  function playAgain() {
    if (input='yes'){
      createDeck()
    } else {
      console.log("Thanks for playing")
    }
  }
