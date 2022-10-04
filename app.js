const playerTally = document.getElementById('playerScoreBoard')
const dealerTally = document.getElementById('dealerScoreBoard')
const pushTally = document.getElementById('pushScoreBoard')
const playerCards = document.querySelector('pcards')

const dealButton = document.getElementById('deal')
const hitButton = document.getElementById('hit')
const stayButton = document.getElementById('stay')
const resetButton = document.getElementById('reset')

let playerWins = 0
let dealerWins = 0
let pushWins = 0

let playerScore = 0
let dealerScore = 0



let isPlayerTurn = true
let isDealerTurn = false
let isWinner = false
let isPush = false

let playerHand = []
let dealerHand = []

const playerBlackJack = () => {
  if (playerScore === 21){
    alert("PLAYER HAS BLACKJACK")
    isPlayerTurn = !isPlayerTurn
  } else if (dealerScore === 21) {
    alert("DEALER HAS BLACKJACK")
  }
}

const checkBust = () => {
  if (playerScore > 21) {
    alert("PLAYER BUSTED AND GAME IS OVER CLICK PLAY AGAIN")
  }
}

const checkAce = () => {
  if (playerScore <12) {
    playerHand.forEach(card => {

    })
  }
}

const deck =[
  {
    name: 'Ace',
    value: 11,
    suit: 'spades',
    // art: placeholder,
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'clubs'
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'hearts'
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'diamonds'
  },
  {
    name: 'King',
    value: 10,
    suit: 'clubs'
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'clubs'
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'clubs'
  },
  {
    name: '10',
    value: 10,
    suit: 'clubs'
  },
  {
    name: '9',
    value: 9,
    suit: 'clubs'
  },
  {
    name: '8',
    value: 8,
    suit: 'clubs'
  },
  {
    name: '7',
    value: 7,
    suit: 'clubs'
  },
  {
    name: '6',
    value: 6,
    suit: 'clubs'
  },
  {
    name: '5',
    value: 5,
    suit: 'clubs'
  },
  {
    name: '4',
    value: 4,
    suit: 'clubs'
  },
  {
    name: '3',
    value: 3,
    suit: 'clubs'
  },
  {
    name: '2',
    value: 2,
    suit: 'clubs'
  },
  {
    name: 'King',
    value: 10,
    suit: 'spades'
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'spades'
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'spades'
  },
  {
    name: '10',
    value: 10,
    suit: 'spades'
  },
  {
    name: '9',
    value: 9,
    suit: 'spades'
  },
  {
    name: '8',
    value: 8,
    suit: 'spades'
  },
  {
    name: '7',
    value: 7,
    suit: 'spades'
  },
  {
    name: '6',
    value: 6,
    suit: 'spades'
  },
  {
    name: '5',
    value: 5,
    suit: 'spades'
  },
  {
    name: '4',
    value: 4,
    suit: 'spades'
  },
  {
    name: '3',
    value: 3,
    suit: 'spades'
  },
  {
    name: '2',
    value: 2,
    suit: 'spades'
  },
  {
    name: 'King',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: '10',
    value: 10,
    suit: 'diamonds'
  },
  {
    name: '9',
    value: 9,
    suit: 'diamonds'
  },
  {
    name: '8',
    value: 8,
    suit: 'diamonds'
  },
  {
    name: '7',
    value: 7,
    suit: 'diamonds'
  },
  {
    name: '6',
    value: 6,
    suit: 'diamonds'
  },
  {
    name: '5',
    value: 5,
    suit: 'diamonds'
  },
  {
    name: '4',
    value: 4,
    suit: 'diamonds'
  },
  {
    name: '3',
    value: 3,
    suit: 'diamonds'
  },
  {
    name: '2',
    value: 2,
    suit: 'diamonds'
  },
  {
    name: 'King',
    value: 10,
    suit: 'hearts'
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'hearts'
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'hearts'
  },
  {
    name: '10',
    value: 10,
    suit: 'hearts'
  },
  {
    name: '9',
    value: 9,
    suit: 'hearts'
  },
  {
    name: '8',
    value: 8,
    suit: 'hearts'
  },
  {
    name: '7',
    value: 7,
    suit: 'hearts'
  },
  {
    name: '6',
    value: 6,
    suit: 'hearts'
  },
  {
    name: '5',
    value: 5,
    suit: 'hearts'
  },
  {
    name: '4',
    value: 4,
    suit: 'hearts'
  },
  {
    name: '3',
    value: 3,
    suit: 'hearts'
  },
  {
    name: '2',
    value: 2,
    suit: 'hearts'
  },
]
console.log(deck)

const shuffleDeck = () => {
  for (let i = deck.length-1; i>0; i--){
    const randomDeck = Math.floor(Math.random()* (i+1));
    [deck[i], deck[randomDeck]] = [deck[randomDeck], deck[i]]
  } //updated Fisher-Yeats algorithm for shuffling an array
}

const countCards = () => {
  playerHand.forEach(pCard => {
    playerScore = pCard.value
  });
  dealerHand.forEach(dCard => {
    dealerScore += dCard.value
  })
  playerBlackJack()
}

const dealGame = () => {
  shuffleDeck();
  playerHand.push(deck.pop());
  playerHand.push(deck.pop());
  countCards()
  checkBust()
  console.log(playerScore)
  console.log(playerHand)
  // console.log(playerHand[0].value)
//**put function here to add values of cards to comprise player's total numerical score**
  // for (let card of playerHand) {
  //   if (document.getElementById('pCard1')) {
  //     document.getElementById('pCard1').innerHTML = playerHand[card]
  //   }
  // }
  // for (let card of playerHand) {
  //   if (document.getElementById('pCard1')) {
  //     document.getElementById('pCard1').innerHTML = playerHand[card]
  //   }
  // }
  dealerHand.push(deck.pop())
  dealerHand.push(deck.pop())
  countCards()
  console.log(dealerScore)
  console.log(dealerHand)
  // console.log(dealerHand)
}

// countCards()

const playerHit = () => {
  playerHand.push(deck.pop())
  countCards()
  checkBust()
  console.log(playerScore)
  console.log(playerHand)
}


const playerStay = () => {
  isDealerTurn = true
  console.log(isDealerTurn)
}

const resetGame = () => {
  playerScore = 0
  dealerScore = 0
  isPlayerTurn = true
  isDealerTurn = false
  isWinner = false
  isPush = false
  playerHand = []
  dealerHand= []
}


// shuffleDeck()
// console.log(deck)

dealButton.addEventListener('click', dealGame)
hitButton.addEventListener('click', playerHit)
stayButton.addEventListener('click', playerStay)
resetButton.addEventListener('click', resetGame)
// () => {
  // const cards = Object.keys([playerHand])
  // cards.forEach((card) => {
  //   const item = document.createElement('div')
  //   item.classList.add('item')
  //   item.innerHTML = card
  //   list.append(item)
  // })
  

// })
