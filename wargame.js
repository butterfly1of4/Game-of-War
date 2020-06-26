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
let arena = []
let battlefield = [[],[]]

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

class War {
  constructor(field) {
    this.battlefield = battlefield
  }
  dealWar() {
  }}*/
arena[1]== arena[0]
//WAR
function cardsDownWar(card2){
  let y = card2.shift()
  battlefield[1].push(y)
  }

  function cardsUpWar(card3) {
    let y = card3.shift()
    battlefield[0].push(y);
  }

  cardsDownWar(player2.hand)
  cardsDownWar(player2.hand)
  cardsUpWar(player1.hand)
  cardsUpWar(player2.hand)
  console.log(battlefield, player1.hand, player2.hand)

  function gameOver(hand1,hand2) {
    if (player1.hand == 0) {
      console.log("Game over. Player 2 wins")
    } else if (player2.hand == 0){
      console.log("Game over. Player 1 wins")
    } else {
      
    }
  }