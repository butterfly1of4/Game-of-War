//Players
const player1 = {
    hand: [],
  };
  let p1 = player1.hand.length
  const player2 = {
    hand: [],
  };
  let p2 = player2.hand.length
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
  let warHand = [] 
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
  console.log(player1.hand);
  console.log(player2.hand)

  function playCard(card1) {
    let x = card1.shift();
    arena.push(x);
    return arena;
  }

playCard(player1.hand)
playCard(player2.hand)
  // let arena = [player1.hand[0],player2.hand[0]]

console.log(arena, player1.hand,player2.hand)
  function maybeWar() {
    p1 = player1.hand.splice(0,1);
    p2 = player2.hand.splice(0,1);
    battlefield = [...p1, ...p2];
    console.log(player1.hand, player2.hand, battlefield, arena)
    p1 = player1.hand.splice(0,3);
    p2 = player2.hand.splice(0,3);
    battleReserve.push(p1, p2)
    // battleReserve.push(p1);
    // battleReserve.push(p2);
    // battleReserve.push(p1);
    // battleReserve.push(p2);
    // battleReserve.push(p1);
    // battleReserve.push(p2);
    console.log(battlefield,battleReserve,player1.hand, player2.hand)
    return battlefield, battleReserve;}
   
  
  // War part 1
  function playWar(p1, p2) {
    console.log(battlefield.length, battleReserve.length, arena.length);
    warHand =  [...arena, ...battleReserve, ...battlefield]
    console.log(warHand, warHand.length)
    console.log(player2.hand,player2.hand)
    if (battlefield[0].value > battlefield[1].value) {
      console.log(battlefield[0],battlefield[1])
      p1>p2
      player1.hand = [
        ...player1.hand, ...warHand
        // ...arena,
        // ...battlefield,
        // ...battleReserve,
      ];
      player2.hand 
    //   = player2.hand
      console.log(battlefield[0], battlefield[1]);
      console.log(player1.hand, player2.hand);
      console.log("war over. player1 wins");
    } else if (battlefield[0].value < battlefield[1].value) {
      p2 > p1
      player2.hand = [
        ...player2.hand, ...warHand
        // ...arena,
        // ...battlefield,
        // ...battleReserve,
      ];
      player1.hand 
    //   = player1.hand;
      console.log(battlefield[0], battlefield[1]);
      console.log(player1.hand, player2.hand);
      console.log("war over. player2 wins");
    } else {
      console.log("no one has won, move on to the next arena");
    }
    return player1.hand, player2.hand;
  }


maybeWar()
playWar()


  // War part 2
  function playWarAgain(p1, p2) {
    for (let i = 0; i <= 2; i++) {
      if (battleReserve[i].value > battleReserve[i + 1].value) {
        console.log("Player 1 wins. Resume the game");
        console.log(battleReserve[i], battleReserve[i + 1]);
        player1.hand = [
          ...player1.hand,
          ...arena,
          ...battlefield,
          ...battleReserve,
        ];
        player2.hand = player2.hand;
      } else if (battleReserve[i].value < battleReserve[i + 1].value) {
        console.log("Player 2 wins. Resume the game");
        console.log(battleReserve[i], battleReserve[i + 1]);
        player2.hand = [
          ...player2.hand,
          ...arena,
          ...battlefield,
          ...battleReserve,
        ];
        player1.hand = player1.hand;
      } else if (battleReserve[i].value == battleReserve[i + 1].value) {
        i += 1;
      }
    }
    return player1.hand, player2.hand;
  }



