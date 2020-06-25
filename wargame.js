console.log("i'm connective");
//Players
const player1 = {hand: []};
const player2 = {hand: []};
let testArr = [
  { one: "one" },
  { two: "two" },
  { potato: "potato" },
  { sunday: "Sunday" },
];
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
console.log(player1.hand);

for (let i = 26; i < 52; i++) {
  player2.hand.push(deck[i]);
} 
console.log(player2.hand);
console.log(player2.hand)


//Play a hand
function playCard(card1){
  let x = card1.shift(0)
  arena.push(x)
  return arena
 }
playCard(player1.hand)
playCard(player2.hand)
console.log(arena)


//Compare cards
function compareCards(){
  if (arena[0].value > arena[1].value) {
    console.log("Player 1 wins")
  } else if(arena[0].value < arena[1].value){
    console.log("Player 2 wins");
  } else if(arena[0].value == arena[1].value){
    console.log("We have a war")
  }
  
}
compareCards()