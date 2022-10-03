const playerScore = document.getElementById('playerScoreBoard')
const dealerScore = document.getElementById('dealerScoreBoard')
const pushScore = document.getElementById('pushScoreBoard')

let playerWins = 0
let dealerWins = 0
let pushWins = 0

const resetButton = document.getElementById('reset')

let isPlayerTurn = true
let isWinner = false
let isPush = false

let playerHand = []
let dealerHand = []

const suits = ['hearts', 'spades', 'clubs', 'diamonds']
const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const deck = [suits, cards]
console.log(deck)

