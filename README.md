# Game-of-War

A 2 player card game using all 52 cards. Each player gets half the deck. The players flip cards simulatneously and compare numbers. Highest number wins. If Player 1 & Player 2's numbers match, War is declared. For war, each player deals three cards down and one card up. The higher number of the overtuned cards wins. In the event of a tie, the next card is flipped, and so on until there is a winner. Winner takes all the cards and adds them to the bottom of their deck.

##Start game
-open [https://github.com/butterfly1of4/Game-of-War/blob/master/index.html]: https://github.com/butterfly1of4/Game-of-War/blob/master/index.html

```
startGame() return Boolean

```

##Create Deck:

`const Deck = []`,

##Declare players:

- create 2 players

````
const player = {
    hand= []
}```
```setPlayers()```

##Shuffle:

```shuffle()```

##Deal
```deal()```
26 cards to each player

##Play:
```playHand()```=
```flipCards()```
-players flip the first card from hand

Evaluate:
```evaluateCards()```
For:
*one player > other:
    player ==  winner
    winner takes cards
    ``` addCardsToHand()```

    if the cards match:
    ```declareWar()```

    if a player is out of cards
    ```gameEnds()```

    and the winner is declared,
    and another game may be initiated
    ```playAgain()```
        resume play
*same
    War is declared



If War is declared
```declareWar()```

deal 3 cards face down
```dealFaceDown()```
and one face up
```flipCard()```
cards are compared
```evaluateCards()```
if there's a winner, cards are added to their deck
```addCardsToDeck()```
game continues as usual

```playHand()```

if there is a tie, the first face down card is flipped
```flipFaceDown()```
```evaluateCards()```
if a tie remains, same 2 functions.
````
