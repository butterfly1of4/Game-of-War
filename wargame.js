console.log("i'm connective")
//Players
const player1 = {hand:[]};
const player2 = {hand:[]}

//Cards/deck
const suits= ["Hearts", "Clubs", "Spades","Diamonds"];
const cards= ["two","three","four","five","six","seven","eight","nine","ten","Jack","Queen","King","Ace"];
const value= [2,3,4,5,6,7,8,9,10,11,12,13,14];
const deck = []
let card = {}
//Create deck
function createDeck(){
    for (let i = 0; i < suits.length; i++){
        for(let j = 0; j< cards.length; j++){
       card ={
            suits: suits[i],
            cards: cards[j],
            value: value[j]
        }
       deck.push(card)
    }
        	
        
		 		console.log(deck)
    } return deck
} 
console.log(deck);
createDeck()
/*
//Shuffle
function shuffle(deck){
    return shuffle(deck)
}
shuffle()

*/
