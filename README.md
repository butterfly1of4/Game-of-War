# Game-of-War

This is 2 player card game using all 52 cards. Each player gets half the deck. The players flip cards simulatneously and compare numbers. Highest number wins. If Player 1 & Player 2's numbers match, War is declared. For war, each player deals three cards down and one card up. The higher number of the overtuned cards wins. In the event of a tie, the next card is flipped, and so on until there is a winner. Winner takes all the cards and adds them to the bottom of their deck.

## Start game

To start the game, open <https://github.com/butterfly1of4/Game-of-War/blob/master/index.html>. This application requires a working knowledge of Javascript and a terminal. There is no installation required, simply open a terminal. The program will run on its own, and upon refresh.

## Setup:

```
function introduce()
startGame() return Boolean

```

### Create and Shuffle deck

```
const Deck = [],
function createDeck(){}
function shuffle(deck)[]
```

### Declare players:

Player1: player1
Player2: player2
Deal cards: 
```
 for (let i = 0; i < 26; i++) {
   player1.hand.push(deck[i]);
 }
 for (let i = 26; i < 52; i++) {
   player2.hand.push(deck[i]);
}
```

### Round:

Begin every round by dealing 2 cards to the arena array:

```function playCard(card1) {
  let x = card1.shift();
  arena.push(x);
  return arena;
}
```

The cards are evaluated, and it's determinded whether there will be a war, or if the game will resume normally: 
```
function compareCards() {}

```
### War
If the cards in the arena match and a war is declared, a total of 8 cards are dealt between the 2 players. 

Deal: 
```
function maybeWar() {
     battlefield = [...p1, ...p2]
    battleReserve = [[...p1R], [...p2R]]
```
Check to see if each player has enough cards to continue: 
```
validWar() {
}
```
If yes, round 1 of war starts:
```
function playWar(p1, p2) {
    battlefield}
 iIf the value of cards in battlefield match: 
 function playWarAgain(p1, p2) {
    battleReserve = [[...p1R], [...p2R]]}
```
### Win Check: 
```
function winCheck() {}
```

The game is over when 1 player has 52 cards, and the other player has 0. To play again, refresh the browser.