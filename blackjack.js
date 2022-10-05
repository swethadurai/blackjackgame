let firstcard=getRandomCard()
let secondcard=getRandomCard()
let cards=[firstcard,secondcard]
let result= firstcard+secondcard
let hasblackjack=false
let isalive=true
let message=""
let messageEl=document.getElementById("messageel")
let sumEl=document.getElementById("sum-el")

let cardsEl=document.getElementById("cards-el")

let playername="swe"
let amountwon=123
let playerEl=document.getElementById("player-el")
playerEl.textContent=playername+":"+amountwon

function getRandomCard() {
	// body...
	let randomNum= Math.floor(Math.random()*13)+1
	return randomNum
	console.log(randomNum)
	if( randomNum>10){
		return 10
	}
	else if(randomNum===1){
		return 11
	}
	else{
		return randomnum
	}

}


function startGame() {
	rendergame()                             
	// body...


}
	
function rendergame() {
	
	cardsEl.textContent="cards:"
	for (let i = 0; i<cards.length ; i++) {
		cardsEl.textContent += cards[i]+" "
		
	}
	sumEl.textContent="sum :"+ result

    if(result<=20){
	    message="do u wanna draw a card"
    }else if(result===21){
	    message="boom!! you won"
	    hasblackjack=true
	
    }
    else{
	   message="betterluck next time"
	   isalive=false
    }
    messageEl.textContent=message
}

function newcard() {
	// body...
	if(isalive===true && hasblackjack===false){
	//console.log("drawing a new card from deck!! ")
	let card=getRandomCard()
	result += card

	cards.push(card)
	console.log(cards)
	rendergame()


}


}
