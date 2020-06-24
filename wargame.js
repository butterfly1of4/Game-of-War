
const player1 = {hand:[]};
const player2 = {hand:[]}


const suits= ["Hearts", "Clubs", "Spades","Diamonds"];
const cards= ["two","three","four","five","six","seven","eight","nine","ten","Jack","Queen","King"];
const value= [2,3,4,5,6,7,8,9,10,11,12,13,14];


const deck = []
function createDeck(){
    for (let i = 0; i < suits.length; i++){
        for(let j = 0; j< cards.length; j++){
        let card ={
            suits: suits[i],
            cards: cards[i],
            value: value[i]
        }
         deck.push(card);
									console.log(deck)
								}
    } return deck
}


/*
const suits = ["hearts", "clubs", "spades","diamonds"]
const cards = ["two","three",etc]
const value = [2,3,4,etc]

const deck = []
for (let i = 0; i< suits.length; i++){
    for (let j=0; j> cards.length; j++){
        let card = {
            suits: suits[i],
            rank: cards[i]
            value: value[i]
        }
        deck.push(card)
    }
}
let deck = []
let player1= {deck:[]}
let player2= {deck:[]}
for (let i =0; i < deck.length; i ++){
if (i%2 = 0){
    player1.deck.push(deck[i])
    player2.deck.push(dec[i])
}
}


let deck = [1,2,3,4,5,6]
console.log(deck.slice(0,3))
player1.deck = deck.slice(0,3)
*/