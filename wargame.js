console.log("i'm connective");
//Players
const player1 = {
  hand: [],
};
let p1 = player1.hand.length;
const player2 = {
  hand: [],
};
let p2 = player2.hand.length;
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
console.log(deck)
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

// for (let i = 0; i < 26; i++) {
//   player1.hand.push(deck[i]);
// }
// for (let i = 26; i < 52; i++) {
//   player2.hand.push(deck[i]);
// }
//console.log(player1.hand);
//console.log(player2.hand)
//Loop

function introduce() {
  let i = 0;
  console.log(
    `Welcome to round ${(i += 1)} of the game. The deck contains ${
      deck.length
    } cards. Player 1 has ${player1.hand.length} cards; Player 2 has ${
      player2.hand.length
    } cards. `
  );
}

//Play a hand
function playCard(card1) {
  let x = card1.shift();
  arena.push(x);
  return arena;
}

//War setup
function maybeWar() {
  p1 = player1.hand.splice(0, 1);
  p2 = player2.hand.splice(0, 1);
  battlefield = [...p1, ...p2];
  console.log(player1.hand, player2.hand, battlefield, arena);
  p1 = player1.hand.splice(0, 3);
  p2 = player2.hand.splice(0, 3);
  battleReserve.push(p1, p2);
  return battlefield, battleReserve;
}

//Valid war check
let validHand = ''

function validWar(p1,p2){
  if (validHand===true){
    if ( p1.hand.length < 4){
      p1.hand.slice(...p1.hand)
      p2.hand.splice(...p1.hand)
      console.length("Player 1 is out of cards, player 2 wins")
    }
    else if (p2.hand.length < 4) {
      p2.hand.slice(...p2.hand)
      p1.hand.splice(...p2.hand)
      console.log("Player2 is out of cards, player 2 wins")
    };
  if (validHand===false){

  }
}}
// War part 1
function playWar(p1, p2) {
  console.log(battlefield.length, battleReserve.length);
  if (battlefield[0].value > battlefield[1].value) {
    player1.hand = [
      ...player1.hand,
      ...arena,
      ...battlefield,
      ...battleReserve[0],
      ...battleReserve[1],
    ];
    player2.hand = player2.hand;
    p1 > p2;
    console.log(battlefield[0], battlefield[1]);
    console.log(player1.hand, player2.hand);
    console.log("war over. player1 wins");
  } else if (battlefield[0].value < battlefield[1].value) {
    player2.hand = [
      ...player2.hand,
      ...arena,
      ...battlefield,
      ...battleReserve[0],
      ...battleReserve[1],
    ];
    player1.hand = player1.hand;
    p2 > p1;
    console.log(battlefield[0], battlefield[1]);
    console.log(player1.hand, player2.hand);
    console.log("war over. player2 wins");
  } else if (p1 === p2){
    playWarAgain()
    console.log("no one has won, move on to the next arena");
  } else {
    console.log("resume game")
  }
  return player1.hand, player2.hand;
}

// War part 2
function playWarAgain(p1, p2) {
  p1 = battleReserve[0];
  p2 = battleReserve[1];
  console.log(p1,p2)
  for (let i = 0; i <= 3; i++) {
    console.log((p1[i].value),(p2[i].value))
    if (p1[i].value === p2[i].value) {
      i += 1;
    }
    else if (p1[i].value > p2[i].value) {
      console.log("Player 1 wins. Resume the game");
      console.log(p1[i], p2[i]);

      player1.hand = [
        ...player1.hand,
        ...arena,
        ...battlefield,
        ...battleReserve[0],
        ...battleReserve[1],
      ];
      player2.hand 
      // = player2.hand;
      console.log(player1.hand.length, player2.hand.length)
      break
    } else if (p1[i].value < p2[i].value) {
      console.log("Player 2 wins. Resume the game");
      console.log(p1[i], p2[i]);

      player2.hand = [
        ...player2.hand,
        ...arena,
        ...battlefield,
        ...battleReserve[0],
        ...battleReserve[1],
      ];
      player1.hand 
      // = player1.hand;
      console.log(player1.hand.length, player2.hand.length)
      break

    } 
    else{ 
      break
    }
  }
  return player1.hand, player2.hand;
}


//Evaluate
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
    console.log(player1.hand, player2.hand);
    maybeWar();
    playWar();
    playWarAgain;
  }
  arena = [];
  return player1.hand, player2.hand;
}
//Game over?
function winCheck() {
  if (player1.hand.length == 52 || player2.hand.length == 52) {
    return false;
  } else if (player1.hand.length + player2.hand.length > 52) {
    return false;
  } else if (player1.hand.length > 52 || player2.hand.length > 52) {
    return false;
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

  while (player1.hand.length > 0 == true && player2.hand.length > 0 == true) {
    introduce();
    playCard(player1.hand);
    playCard(player2.hand);
    console.log(arena, player1.hand, player2.hand);
    compareCards();
    winCheck();
    // break;
  }
}
main();
/*

function playAgain() {
  let again;
  let y = confirm("Do you want to play again?")
  if (y == true){
    again = "Ok. "
  } else {
    again = "Bye."
  }
}

function gameReset() {
  player1.hand = [];
  player2.hand = [];
  deck = [];
  arena = [];
}

}
*/
//Compare cards
/*layer1.hand.length = true){
    if (player1.hand.length == 0){flag = false}
    else if (player2.hand.length == 0){flag = false}
    break */

// function playWarAgain(p1, p2) {
//   p1 = battleReserve[0];
//   p2 = battleReserve[1];
//   console.l0g(p1,p2)
//   for (let i = 0; i <= 2; i++) {
//     if (p1[i].value > p2[i + 1].value) {
//       console.log("Player 1 wins. Resume the game");
//       console.log(p1[i], p2[i + 1]);

//       player1.hand = [
//         ...player1.hand,
//         ...arena,
//         ...battlefield,
//         ...battleReserve[0],
//         ...battleReserve[1],
//       ];
//       player2.hand = player2.hand;
//     } else if (p1[i].value < p2[i + 1].value) {
//       console.log("Player 2 wins. Resume the game");
//       console.log(p1[i], p2[i + 1]);
//       player2.hand = [
//         ...player2.hand,
//         ...arena,
//         ...battlefield,
//         ...battleReserve[0],
//         ...battleReserve[1],
//       ];
//       player1.hand = player1.hand;
//     } else if (p1[i].value == p2[i + 1].value) {
//       i += 1;
//     }
//   }
//   return player1.hand, player2.hand;
// }

// function playWarAgain(p1, p2) {
//   p1 = battleReserve[0];
//   p2 = battleReserve[1];
//   console.l0g(p1,p2)
//   for (let i = 0; i <= 2; i++) {
//     if (battleReserve[i].value > battleReserve[i + 1].value) {
//       console.log("Player 1 wins. Resume the game");
//       console.log(battleReserve[i], battleReserve[i + 1]);
//       player1.hand = [
//         ...player1.hand,
//         ...arena,
//         ...battlefield,
//         ...battleReserve,
//       ];
//       player2.hand = player2.hand;
//     } else if (battleReserve[i].value < battleReserve[i + 1].value) {
//       console.log("Player 2 wins. Resume the game");
//       console.log(battleReserve[i], battleReserve[i + 1]);
//       player2.hand = [
//         ...player2.hand,
//         ...arena,
//         ...battlefield,
//         ...battleReserve,
//       ];
//       player1.hand = player1.hand;
//     } else if (battleReserve[i].value == battleReserve[i + 1].value) {
//       i += 1;
//     }
//   }
//   return player1.hand, player2.hand;
// }