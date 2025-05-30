//Object data structure
let player = {
    name: "XYZ",
    chips: 145
}
let cards=[]
let sum=0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
//let sumEl = document.querySelector("#sum-el") we can also use this mehtod

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let num = Math.floor(Math.random() * 13) + 1
    if(num===1){
        return 11
    }
    else if(num>10){
        return 10
    }
    else {
        return num
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard+secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + ' '
    }
    if (sum < 21){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "Hurray!! You got BlackJack"
        hasBlackjack = true
    }
    else {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message    
}

function newCard() {
    if (isAlive===true && hasBlackjack===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}