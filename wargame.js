console.log("i'm connective")
//Players
const player1 = {hand:[]};
const player2 = {hand:[]}
let deck = [{one: 'one'}, {two: 'two'}, {potato: 'potato'}, {sunday: 'Sunday'}]
//Cards/deck
const suits= ["Hearts", "Clubs", "Spades","Diamonds"];
const cards= ["two","three","four","five","six","seven","eight","nine","ten","Jack","Queen","King","Ace"];
const value= [2,3,4,5,6,7,8,9,10,11,12,13,14];
const deck = []
let card = {}
let shuffledDDeck = []

//test variables


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
//Shuffle



function shuffle(deck){
    for (let i =deck.length - 1; i >0;i--){
        let j = Math.floor(Math.random()* (i+1));
        let temp = deck[i]
        deck[i] = deck[j];
        deck[j]= temp;
    }
    return deck
}
shuffle(deck)



//Deal
for (let i = 0; i < 26; i++){
    player1.hand.push(deck[i])
}
console.log(player1.hand)




