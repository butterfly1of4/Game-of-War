console.log("i'm connective");
//Players
const player1 = {
  hand: [],
};

const player2 = {
  hand: [],
};

const deckTotal = 52;
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

function introduce(){
  let i = 0
  console.log(`Welcome to round ${i+1} of the game. The deck contains 52 cards. Player 1 has ${player1.hand.length} cards; Player 2 has ${player2.hand.length} cards. `)
}

//Play a hand
function playCard(card1) {
  let x = card1.shift();
  arena.push(x);
  return arena;
}
//maybe war 

function maybeWar(){
 let p1 = player1.hand.shift()
 let p2 = player2.hand.shift()
 battlefield.push(p1,p2)
 battleReserve.push(p1)
 battleReserve.push(p2)
 battleReserve.push(p1)
 battleReserve.push(p2)
 battleReserve.push(p1)
 battleReserve.push(p2)
return battlefield, battleReserve
}

function playWar(p1, p2){
  console.log(battlefield.length,battleReserve.length)
    if (battlefield[0].value > battlefield[1].value){
      player1.hand = [...player1.hand,...arena,...battlefield,...battleReserve]
      player2.hand = player2.hand
      console.log(battlefield[0], battlefield[1])
      console.log(playe1.hand, player2.hand)
      console.log("war over. player1 wins")
    } else if
      (battlefield[0].value < battlefield[1].value){
        player2.hand = [...player2.hand,...arena,...battlefield,...battleReserve]
        player1.hand = player1.hand
        console.log(battlefield[0], battlefield[1])
        console.log(player1.hand, player2.hand)
        console.log("war over. player2 wins")
    } else { 
      console.log("no one has won, move on to the next arena");
    }
    return player1.hand, player2.hand
}
function playWarAgain(p1,p2) {
    for (let i = 0; i <= 2; i++) {
      if (battleReserve[i].value > battleReserve[i + 1].value) {
        console.log("Player 1 wins. Resume the game");
        console.log(battleReserve[i], battleReserve[i + 1]);
        player1.hand = [...player1.hand,...arena,...battlefield,...battleReserve];
        player2.hand = player2.hand
      } else if (battleReserve[i].value < battleReserve[i + 1].value){
        console.log("Player 2 wins. Resume the game");
        console.log(battleReserve[i], battleReserve[i + 1]);
        player2.hand = [...player2.hand,...arena,...battlefield,...battleReserve];
        player1.hand = player1.hand
 
      } else if (battleReserve[i].value == battleReserve[i + 1].value) {
        i += 1;
      }
    } return player1.hand, player2.hand
  }

/*
//WAR
function cardsDownWar(card2) {
  console.log(card2)
  let y = card2.splice(0,0,3)
 
  battleReserve
  return battleReserve;
  
}

//cardsDownWar(player2.hand);
cardsDownWar(player1.hand);


console.log(cardsDownWar(player1.hand))
console.log(cardsDownWar(player2.hand))

function cardsUpWar(card3) {
  let y = card3.shift();
  console.log(y, card3);
  battlefield = [y];
  return battlefield;
}

  
    
    cardsUpWar(player1.hand);
    cardsUpWar(player2.hand);
    console.log(cardsUpWar(player1.hand))
    console.log(player2.hand) 

//Play war

function battlefieldWar() {
  if (battlefield[0].value > battlefield[1].value) {
    console.log("The war is over. Player 1 wins");
    console.log(battlefield[0], battlefield[1]);
    player1.hand = [...player1.hand, ...battlefield];
    player1.hand = [...player1.hand...battleReserve];
    console.log(player1.hand, player2.hand);
  } else if (battlefield[0].value < battlefield[1].value) {
    console.log("The war is over. Player 2 wins");
    console.log(battlefield[0], battlefield[1]);
    player2.hand = [...player2.hand,...battlefield];
    player2.hand = [...player2.hand,...battleReserve];
    //resumeGame();
    console.log(player1.hand, player2.hand);
  } else if (battlefield[0].value == battlefield[1].value) {
    //reserveWar();
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
    player1.hand = [...player1.hand, ...arena];
    player2.hand = player2.hand;
    console.log(arena[0], arena[1]);
    console.log(player1.hand, player2.hand);
    console.log("Player 1 wins");
  } else if (arena[0].value < arena[1].value) {
    player2.hand = [...player2.hand, ...arena];
    player1.hand = player1.hand;
    console.log(arena[0], arena[1]);
    console.log(player1.hand, player2.hand);
    console.log("Player 2 wins");
  } else if (arena[0].value == arena[1].value) {
    console.log(arena[0], arena[1]);
    console.log("We have a war");
    console.log(player1.hand, player2.hand)
    maybeWar()
    playWar()
    playWarAgain
    
  }
  arena = [];
  return player1.hand, player2.hand;

}
//compareCards();

function winCheck() {
  
  if (i + j > 52) {
  } else if (i == 52 || j == 52) {
  } else if (i == 0 || j == 0) {
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
    winCheck();
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
