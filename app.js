const playerScore = document.getElementById('playerScoreBoard')
const dealerScore = document.getElementById('dealerScoreBoard')
const pushScore = document.getElementById('pushScoreBoard')
const dealButton = document.getElementById('deal')

let playerWins = 0
let dealerWins = 0
let pushWins = 0

const resetButton = document.getElementById('reset')

let isPlayerTurn = true
let isWinner = false
let isPush = false

let playerHand = []
let dealerHand = []

const deck =[
  {
    name: 'Ace of Spades',
    value: 11,
    suit: 'spades',
    // art: //img src=""//
  },
  {
    name: 'Ace of Clubs',
    value: 11,
    suit: 'clubs'
  },
  {
    name: 'Ace of Hearts',
    value: 11,
    suit: 'hearts'
  },
  {
    name: 'Ace of Diamonds',
    value: 11,
    suit: 'diamonds'
  },
  {
    name: 'King of Clubs',
    value: 10,
    suit: 'clubs'
  },
  {
    name: 'Queen of Clubs',
    value: 10,
    suit: 'clubs'
  },
  {
    name: 'Jack of Clubs',
    value: 10,
    suit: 'clubs'
  },
  {
    name: '10 of Clubs',
    value: 10,
    suit: 'clubs'
  },
  {
    name: '9 of Clubs',
    value: 9,
    suit: 'clubs'
  },
  {
    name: '8 of Clubs',
    value: 8,
    suit: 'clubs'
  },
  {
    name: '7 of Clubs',
    value: 7,
    suit: 'clubs'
  },
  {
    name: '6 of Clubs',
    value: 6,
    suit: 'clubs'
  },
  {
    name: '5 of Clubs',
    value: 5,
    suit: 'clubs'
  },
  {
    name: '4 of Clubs',
    value: 4,
    suit: 'clubs'
  },
  {
    name: '3 of Clubs',
    value: 3,
    suit: 'clubs'
  },
  {
    name: '2 of Clubs',
    value: 2,
    suit: 'clubs'
  },
  {
    name: 'King of Spades',
    value: 10,
    suit: 'spades'
  },
  {
    name: 'Queen of Spades',
    value: 10,
    suit: 'spades'
  },
  {
    name: 'Jack of Spades',
    value: 10,
    suit: 'spades'
  },
  {
    name: '10 of Spades',
    value: 10,
    suit: 'spades'
  },
  {
    name: '9 of Spades',
    value: 9,
    suit: 'spades'
  },
  {
    name: '8 of Spades',
    value: 8,
    suit: 'spades'
  },
  {
    name: '7 of Spades',
    value: 7,
    suit: 'spades'
  },
  {
    name: '6 of Spades',
    value: 6,
    suit: 'spades'
  },
  {
    name: '5 of Spades',
    value: 5,
    suit: 'spades'
  },
  {
    name: '4 of Spades',
    value: 4,
    suit: 'spades'
  },
  {
    name: '3 of Spades',
    value: 3,
    suit: 'spades'
  },
  {
    name: '2 of Spades',
    value: 2,
    suit: 'spades'
  },
  {
    name: 'King of Diamonds',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: 'Queen of Diamonds',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: 'Jack of Diamonds',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: '10 of Diamonds',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: '9 of Diamonds',
    value: 9,
    suit: 'diamonds'
  },
  {
    name: '8 of Diamonds',
    value: 8,
    suit: 'diamonds'
  },
  {
    name: '7 of Diamonds',
    value: 7,
    suit: 'diamonds'
  },
  {
    name: '6 of Diamonds',
    value: 6,
    suit: 'diamonds'
  },
  {
    name: '5 of Diamonds',
    value: 5,
    suit: 'diamonds'
  },
  {
    name: '4 of Diamonds',
    value: 4,
    suit: 'diamonds'
  },
  {
    name: '3 of Diamonds',
    value: 3,
    suit: 'diamonds'
  },
  {
    name: '2 of Diamonds',
    value: 2,
    suit: 'diamonds'
  },
  {
    name: 'King of Hearts',
    value: 10,
    suit: 'hearts'
  },
  {
    name: 'Queen of Hearts',
    value: 10,
    suit: 'hearts'
  },
  {
    name: 'Jack of Hearts',
    value: 10,
    suit: 'hearts'
  },
  {
    name: '10 of Hearts',
    value: 10,
    suit: 'hearts'
  },
  {
    name: '9 of Hearts',
    value: 9,
    suit: 'hearts'
  },
  {
    name: '8 of Hearts',
    value: 8,
    suit: 'hearts'
  },
  {
    name: '7 of Hearts',
    value: 7,
    suit: 'hearts'
  },
  {
    name: '6 of Hearts',
    value: 6,
    suit: 'hearts'
  },
  {
    name: '5 of Hearts',
    value: 5,
    suit: 'hearts'
  },
  {
    name: '4 of Hearts',
    value: 4,
    suit: 'hearts'
  },
  {
    name: '3 of Hearts',
    value: 3,
    suit: 'hearts'
  },
  {
    name: '2 of Hearts',
    value: 2,
    suit: 'hearts'
  },
]

const dealGame = () => {
  console.log(deck[Math.floor(Math.random()*deck.length)]); 
}


dealButton.addEventListener('click', dealGame)
