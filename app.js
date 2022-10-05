const playerTally = document.getElementById('playerScoreBoard')
const dealerTally = document.getElementById('dealerScoreBoard')
const pushTally = document.getElementById('pushScoreBoard')

const playerCards = document.querySelector('.playerCardContainer')
const dealerCards = document.querySelector('.dealerCardContainer')

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
let isActiveGame = false

let playerHand = []
let dealerHand = []



const checkWin = () => {
  if (playerScore > 0 && dealerScore === 0) {
    return
  } 
  else if (playerScore === 21){
    // alert("PLAYER HAS BLACKJACK")
    dealerPlay()
  }
  else if (playerScore <= 21 && dealerScore >21){
    console.log("checkWintest11")
    alert("PLAYER WINS!")
    // console.log("PLAYER WINS!");
    playerWins++
    playerTally.innerText = playerWins
    isActiveGame = false
    return
} else if (playerScore > 21 && dealerScore <= 21){
  console.log("checkWintest11")
    alert ("DEALER WINS!")
    // console.log("DEALER WINS!");
    dealerWins++;
    dealerTally.innerText = dealerWins
    isActiveGame = false
    return
} else if (playerScore === 21 && dealerScore === 21){
  console.log("checkWintest11")
    alert("IT'S A PUSH!")
    // console.log("IT'S A PUSH!")
    pushWins++;
    pushTally.innerText = pushWins
    isActiveGame = false
    return
}
  else if (playerScore < 21 && dealerScore === 21) {
    console.log("checkWintest11")
    alert("DEALER HAS BLACKJACK")
    dealerWins++
    dealerTally.innerText = dealerWins
    isActiveGame = false
    return
  }  else if (playerScore > 21) {
    console.log("checkWintest11")
    alert("PLAYER BUSTED AND GAME IS OVER CLICK PLAY AGAIN");
    dealerWins++
    dealerTally.innerText = dealerWins
    isActiveGame = false
    return
  } else if (dealerScore > 21) {
    console.log("checkWintest11")
    alert("DEALER BUSTS, PLAYER WINS")
    playerWins++
    playerTally.innerText = playerWins
    isActiveGame = false
    return
  } else if (playerScore > dealerScore && dealerScore >= 17) {
    console.log("checkWintest11")
    alert("PLAYER WINS!");
    playerWins++
    playerTally.innerText = playerWins
    isActiveGame = false
    return
  } else if (!isPlayerTurn && playerScore < dealerScore && dealerScore >= 17 && dealerScore <= 21){
    alert ("DEALER WINS!");
    dealerWins++
    dealerTally.innerText = dealerWins
    isActiveGame = false
    return
  }
}

const checkAce = () => {
  if (playerScore >=11) {
    for (card of deck) {
      if (card.name === 'Ace'){
        card.value === 1
      }
    }
  }
  return
}

const deck =[
  {
    name: 'Ace',
    value: 11,
    suit: 'spades',
    id: 'Ace of spades',
    
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'clubs',
    id: 'Ace of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'hearts',
    id: 'Ace of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'diamonds',
    id: 'Ace of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'King',
    value: 10,
    suit: 'clubs',
    id: 'King of  clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'clubs',
    id: 'Queen of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'clubs',
    id: 'Jack of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '10',
    value: 10,
    suit: 'clubs',
    id: '10 of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '9',
    value: 9,
    suit: 'clubs',
    id: '9 of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '8',
    value: 8,
    suit: 'clubs',
    id: '8 of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '7',
    value: 7,
    suit: 'clubs',
    id: '7 of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '6',
    value: 6,
    suit: 'clubs',
    id: '6 of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '5',
    value: 5,
    suit: 'clubs',
    id: '5 of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '4',
    value: 4,
    suit: 'clubs',
    id: '4 of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '3',
    value: 3,
    suit: 'clubs',
    id: '3 of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '2',
    value: 2,
    suit: 'clubs',
    id: '2 of clubs',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'King',
    value: 10,
    suit: 'spades',
    id: 'King of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'spades',
    id: 'Queen of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'spades',
    id: 'Jack of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '10',
    value: 10,
    suit: 'spades',
    id: '10 of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '9',
    value: 9,
    suit: 'spades',
    id: '9 of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '8',
    value: 8,
    suit: 'spades',
    id: '8 of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '7',
    value: 7,
    suit: 'spades',
    id: '7 of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '6',
    value: 6,
    suit: 'spades',
    id: '6 of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '5',
    value: 5,
    suit: 'spades',
    id: '5 of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '4',
    value: 4,
    suit: 'spades',
    id: '4 of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '3',
    value: 3,
    suit: 'spades',
    id: '3 of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '2',
    value: 2,
    suit: 'spades',
    id: '2 of spades',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'King',
    value: 10,
    suit: 'diamonds',
    id: 'King of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'diamonds',
    id: 'Queen of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'diamonds',
    id: 'Jack of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '10',
    value: 10,
    suit: 'diamonds',
    id: '10 of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '9',
    value: 9,
    suit: 'diamonds',
    id: '9 of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '8',
    value: 8,
    suit: 'diamonds',
    id: '8 of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '7',
    value: 7,
    suit: 'diamonds',
    id: '7 of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '6',
    value: 6,
    suit: 'diamonds',
    id: '6 of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '5',
    value: 5,
    suit: 'diamonds',
    id: '5 of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '4',
    value: 4,
    suit: 'diamonds',
    id: '4 of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '3',
    value: 3,
    suit: 'diamonds',
    id: '3 of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '2',
    value: 2,
    suit: 'diamonds',
    id: '2 of diamonds',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'King',
    value: 10,
    suit: 'hearts',
    id: 'King of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'hearts',
    id: 'Queen of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'hearts',
    id: 'Jack of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '10',
    value: 10,
    suit: 'hearts',
    id: '10 of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '9',
    value: 9,
    suit: 'hearts',
    id: '9 of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '8',
    value: 8,
    suit: 'hearts',
    id: '8 of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '7',
    value: 7,
    suit: 'hearts',
    id: '7 of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '6',
    value: 6,
    suit: 'hearts',
    id: '6 of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '5',
    value: 5,
    suit: 'hearts',
    id: '5 of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '4',
    value: 4,
    suit: 'hearts',
    id: '4 of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '3',
    value: 3,
    suit: 'hearts',
    id: '3 of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
  {
    name: '2',
    value: 2,
    suit: 'hearts',
    id: '2 of hearts',
    art: 'assets/playing-cards-vector-free-483402.jpeg',
  },
]

const shuffleDeck = () => {
  for (let i = deck.length-1; i>0; i--){
    const randomDeck = Math.floor(Math.random()* (i+1));
    [deck[i], deck[randomDeck]] = [deck[randomDeck], deck[i]]
  } //updated Fisher-Yeats algorithm for shuffling an array
}

const countCards = () => {
  playerScore = 0
  playerHand.forEach(pCard => {
    playerScore += pCard.value
  });
  dealerScore = 0
  dealerHand.forEach(dCard => {
    dealerScore += dCard.value
  })
  checkWin()
}

const dealGame = () => {
  console.log("inside dealGame", isActiveGame)
  if (isActiveGame){
    return
  }
    shuffleDeck();
    playerHand.push(deck.pop());
    playerHand.push(deck.pop());
    playerHand.forEach((card) => {
      const newCard = document.createElement('img')
      newCard.classList.add('pcard')
      newCard.src = card.art
      playerCards.append(newCard)
    })
    countCards()
    // checkBust()
    console.log("playerScore", playerScore)
    console.log("playerHand", playerHand)

    dealerHand.push(deck.pop())
    dealerHand.push(deck.pop())
    dealerHand.forEach((card) => {
      const newCard = document.createElement('img')
      newCard.classList.add('pcard')
      newCard.src = card.art
      playerCards.append(newCard)
    })
    countCards()
    console.log("dealerScore", dealerScore)
    console.log("dealerHand", dealerHand)

    isActiveGame = true
    dealButton.removeEventListener('click', dealGame)
  // console.log(dealerHand)
}


const playerHit = () => {
  dealButton.removeEventListener('click', dealGame)
  if (!isPlayerTurn) {
    return
  }
  checkAce()
  playerHand.push(deck.pop())
  countCards()
  // checkBust()
  console.log("playerHit, playerScore", playerScore)
  console.log("playerHitHand, playerHand", playerHand)
}



const dealerPlay = () => {
  dealButton.removeEventListener('click', dealGame)
  hitButton.removeEventListener('click', playerHit)
  // stayButton.removeEventListener('click', dealerPlay)
  isPlayerTurn = false
  isActiveGame = true
  console.log("dealerPlay, playerScore", playerScore)
  console.log("dealerPlay, dealerScore", dealerScore)
  if (playerScore < dealerScore && dealerScore <= 21){
    alert("DEALER WINS HIT PLAY AGAIN TO PLAY...AGAIN")
    dealerWins++
    dealerTally.innerText = dealerWins
    isActiveGame = false
    return
  } else if (playerScore > 21){
    alert("PLAYER ALREADY LOST THERE IS NO STAYING")
    return
  } 
  else if (playerScore === dealerScore && dealerScore >= 17){
    alert("PUSH IT")
    pushWins++
    pushTally.innerText = pushWins
    isActiveGame = false
    return
  }
  else if (playerScore <= 21 && dealerScore <17) {
    dealerHand.push(deck.pop())
    countCards()
    dealerPlay()
    // checkBust()
    console.log("dealerHand", dealerHand)
  } else if (playerScore > dealerScore && dealerScore <17) {
    dealerHand.push(deck.pop())
    countCards()
    dealerPlay()
  }
  // else {
  //   checkWin()
  // }
}

const resetGame = () => {
  dealButton.addEventListener('click', dealGame)
  hitButton.addEventListener('click', playerHit)
  isActiveGame = false
  playerScore = 0
  dealerScore = 0
  isPlayerTurn = true
  isDealerTurn = false
  isWinner = false
  isPush = false
  playerHand = []
  dealerHand= []
  playerCards.innerHTML = ''
  dealerCards.innerHTML = ''
}


dealButton.addEventListener('click', dealGame)
hitButton.addEventListener('click', playerHit)
stayButton.addEventListener('click', dealerPlay)
resetButton.addEventListener('click', resetGame)


// put event listeners in a function and run them when you start the game, don't add event listeners until you start the game. this way I can put in the once:true
// dealButton.removeEventListener


// const playerBlackJack = () => {
//   if (playerScore === 21){
//     alert("PLAYER HAS BLACKJACK")
//     dealerPlay()
//   } else if (dealerScore === 21) {
//     alert("DEALER HAS BLACKJACK")
//     isActiveGame = false
//   } else if (playerScore === 21 && dealerScore === 21){
//     alert("DOUBLE BLACKJACK! IT'S A PUSH!")
//     isActiveGame = false
//   }
// }


// const playerStay = () => {
//   isPlayerTurn = false;
//   isActiveGame = true
//   console.log(isDealerTurn)
// }

// const checkBust = () => {
//   if (playerScore > 21) {
//     alert("PLAYER BUSTED AND GAME IS OVER CLICK PLAY AGAIN");
//     isActiveGame = false
//   } else if (dealerScore > 21) {
//     alert("DEALER BUSTS, PLAYER WINS")
//     isActiveGame = false
//   }
// }


//download card images an assets fol