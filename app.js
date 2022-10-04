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
console.log(deck)

const shuffleDeck = () => {
  for (let i = deck.length-1; i>0; i--){
    const randomDeck = Math.floor(Math.random()* (i+1));
    [deck[i], deck[randomDeck]] = [deck[randomDeck], deck[i]]
  } //updated Fisher-Yeats algorithm for shuffling an array
}

const countCards = () => {
  playerHand.forEach(pCard => {
    playerScore += pCard.value
  });
  dealerHand.forEach(dCard => {
    dealerScore += dCard.value
  })
}

const dealGame = () => {
  shuffleDeck();
  playerHand.push(deck.pop());
  playerHand.push(deck.pop());
  countCards()
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
  // console.log(dealerHand)
}

// countCards()

const playerHit = () => {
  playerHand.push(deck.pop())
  countCards()
  console.log(playerScore)
  console.log(playerHand)
}
const playerBlackJack = () => {
  if (playerScore=== 21){
    alert("Player Wins")
    isPlayerTurn = !isPlayerTurn
  }
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
