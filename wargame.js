console.log("i'm connective");
//Players
const player1 = {
  hand: [],
};

const player2 = {
  hand: [],
};
let new1 = [];
let new2 = [];
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
  console.log("I'm the deck");
  return deck;
}
//createDeck();

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
//shuffle(deck);

//Deal
/*
for (let i = 0; i < 26; i++) {
  player1.hand.push(deck[i]);
}
for (let i = 26; i < 52; i++) {
  player2.hand.push(deck[i]);
}*/
//console.log(player1.hand);
//console.log(player2.hand)
//Loop

//Play a hand
function playCard(card1) {
  let x = card1.shift();
  arena.push(x);
  return arena;
}

//WAR
function cardsDownWar(card2) {
  let y = card2.slice(0, 3);
  console.log(y, card2);
  battleReserve = [y];
  return battleReserve;
}

function cardsUpWar(card3) {
  let y = card3.shift();
  console.log(y, card3);
  battlefield = [y];
  return battlefield;
}

    cardsDownWar(player2.hand);
    cardsDownWar(player1.hand);
    cardsUpWar(player1.hand);
    cardsUpWar(player2.hand);
//Play war
/*
function battlefieldWar() {
  if (battlefield[0].value > battlefield[1].value) {
    console.log("The war is over. Player 1 wins");
    console.log(battlefield[0], battlefield[1]);
    player1.hand.push(...battlefield);
    player1.hand.push(...battleReserve);
   // resumeGame();
    console.log(player1.hand, player2.hand);
  } else if (battlefield[0].value < battlefield[1].value) {
    console.log("The war is over. Player 2 wins");
    console.log(battlefield[0], battlefield[1]);
    player2.hand.push(...battlefield);
    player2.hand.push(...battleReserve);
    //resumeGame();
    console.log(player1.hand, player2.hand);
  } else if (battlefield[0].value == battlefield[1].value) {
    reserveWar();
  }
}
battlefieldWar();
//gameOver();

//Reserve card war
function reserveWar() {
  for (let i = 0; i <= 2; i++) {
    if (battleReserve[i].value > battleReserve[i + 1].value) {
      console.log("Player 1 wins. Resume the game");
      console.log(battleReserve[i], battleReserve[i + 1]);
      player1.hand.push(...battlefield);
      player1.hand.push(...battleReserve);
      //resumeGame();
    } else if (battleReserve[i].value < battleReserve[i + 1].value) {
      console.log("Player 2 wins. Resume the game");
      console.log(battleReserve[i], battleReserve[i + 1]);
      player2.hand.push(...battlefield);
      player2.hand.push(...battleReserve);
      //resumeGame();
    } else if (battleReserve[i].value == battleReserve[i + 1].value) {
      i += 1;
    }
  }
}
*/
//Compare cards
function compareCards() {
  if (arena[0].value > arena[1].value) {
    player1.hand = [...player1.hand, ...arena]
    player2.hand = player2.hand;
    console.log(arena[0], arena[1]);
    console.log(player1.hand, player2.hand);
    console.log("Player 1 wins");
  } else if (arena[0].value < arena[1].value) {
    player2.hand = [...player2.hand,...arena]
    player1.hand = player1.hand;
    console.log(arena[0], arena[1]);
    console.log(player1.hand, player2.hand);
    console.log("Player 2 wins");
  } else if (arena[0].value == arena[1].value) {
    console.log(arena[0], arena[1]);
    console.log("We have a war");
    cardsDownWar(), cardsUpWar(), battlefieldWar(), reserveWar();
  }
  arena = []
  return player1.hand, player2.hand
}


//compareCards();
function winCheck(){
  let i = player1.hand.length
  let j = player2.hand.length
  let k = 52;
  if (i + j < 52) {
    console.log("too big")
  } else if ( i == 52 || j == 52){
    console.log ("52")
  } else if (i == 0 || j == 0){
    console.log("zero")
  } else {
    console.log(player1.hand, player2.hand);
    console.log(player1.hand.length, player2.hand.length);
  }
}

function main() {
  createDeck();
  shuffle(deck);
  //deal cards
  for (let i = 0; i < 26; i++) {
    player1.hand.push(deck[i]);
  }
  for (let i = 26; i < 52; i++) {
    player2.hand.push(deck[i]);
  }

  while (player1.hand.length > 0 && player2.hand.length > 0) {
    playCard(player1.hand);
    playCard(player2.hand);
    console.log(arena, player1.hand, player2.hand);
    compareCards();
    winCheck()
    
  }
}
main();
/*


function playAgain() {
  if ((input = "yes")) {
    createDeck();
  } else {
    console.log("Thanks for playing");
  }
}

function gameReset() {
  player1.hand = [];
  player2.hand = [];
  deck = [];
  arena = [];
}

//note: add alert() to play again
*/

/*layer1.hand.length = true){
    if (player1.hand.length == 0){flag = false}
    else if (player2.hand.length == 0){flag = false}
    break */
