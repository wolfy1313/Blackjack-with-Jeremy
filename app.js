const playerWin = document.getElementById('playerScoreBoardTotal')
const dealerWin = document.getElementById('dealerScoreBoardTotal')
const pushTally = document.getElementById('pushScoreBoardTotal')

const playerTally = document.getElementById('playerCurrentScore')
const dealerTally = document.getElementById('dealerCurrentScore')

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
    alert("PLAYER HAS BLACKJACK")
    !isPlayerTurn
    dealerPlay()
  }
  else if (playerScore <= 21 && dealerScore >21){
    playerWins++
    playerWin.innerText = playerWins
    isActiveGame = false
    alert("PLAYER WINS!")
    return
} else if (playerScore > 21 && dealerScore <= 21){
    dealerWins++;
    dealerWin.innerText = dealerWins
    isActiveGame = false
    alert ("DEALER WINS!")
    return
} else if (playerScore === 21 && dealerScore === 21){
    pushWins++;
    pushTally.innerText = pushWins
    isActiveGame = false
    alert("IT'S A PUSH!")
    return
}
  else if (playerScore < 21 && dealerScore === 21 && !isPlayerTurn) {
    dealerWins++
    dealerWin.innerText = dealerWins
    isActiveGame = false
    alert("DEALER HAS BLACKJACK")
    return
  }  else if (playerScore > 21) {
    dealerWins++
    dealerWin.innerText = dealerWins
    isActiveGame = false
    alert("PLAYER BUSTED AND GAME IS OVER CLICK PLAY AGAIN");
    return
  } else if (dealerScore > 21) {
    playerWins++
    playerWin.innerText = playerWins
    isActiveGame = false
    alert("DEALER BUSTS, PLAYER WINS")
    return
  } else if (playerScore > dealerScore && dealerScore >= 17) {
    playerWins++
    playerWin.innerText = playerWins
    isActiveGame = false
    alert("PLAYER WINS!");
    return
  } else if (!isPlayerTurn && playerScore < dealerScore && dealerScore >= 17 && dealerScore <= 21){

    dealerWins++
    dealerWin.innerText = dealerWins
    isActiveGame = false
    alert ("DEALER WINS!");
    return
  }
}

const checkPlayerAce = () => {
  if (playerScore >=11) {
    for (card of deck) {
      if (card.name === 'Ace'){
        card.value === 1
      }
    }
  }
  return
}
const checkDealerAce = () => {
  if (dealerScore >=11) {
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
    art: 'assets/playing-cards-assets/png/ace_of_spades.png',
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'clubs',
    id: 'Ace of clubs',
    art: 'assets/playing-cards-assets/png/ace_of_clubs.png',
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'hearts',
    id: 'Ace of hearts',
    art: 'assets/playing-cards-assets/png/ace_of_hearts.png',
  },
  {
    name: 'Ace',
    value: 11,
    suit: 'diamonds',
    id: 'Ace of diamonds',
    art: 'assets/playing-cards-assets/png/ace_of_diamonds.png',
  },
  {
    name: 'King',
    value: 10,
    suit: 'clubs',
    id: 'King of  clubs',
    art: 'assets/playing-cards-assets/png/king_of_clubs.png',
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'clubs',
    id: 'Queen of clubs',
    art: 'assets/playing-cards-assets/png/queen_of_clubs.png',
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'clubs',
    id: 'Jack of clubs',
    art: 'assets/playing-cards-assets/png/jack_of_clubs.png',
  },
  {
    name: '10',
    value: 10,
    suit: 'clubs',
    id: '10 of clubs',
    art: 'assets/playing-cards-assets/png/10_of_clubs.png',
  },
  {
    name: '9',
    value: 9,
    suit: 'clubs',
    id: '9 of clubs',
    art: 'assets/playing-cards-assets/png/9_of_clubs.png',
  },
  {
    name: '8',
    value: 8,
    suit: 'clubs',
    id: '8 of clubs',
    art: 'assets/playing-cards-assets/png/8_of_clubs.png',
  },
  {
    name: '7',
    value: 7,
    suit: 'clubs',
    id: '7 of clubs',
    art: 'assets/playing-cards-assets/png/7_of_clubs.png',
  },
  {
    name: '6',
    value: 6,
    suit: 'clubs',
    id: '6 of clubs',
    art: 'assets/playing-cards-assets/png/6_of_clubs.png',
  },
  {
    name: '5',
    value: 5,
    suit: 'clubs',
    id: '5 of clubs',
    art: 'assets/playing-cards-assets/png/5_of_clubs.png',
  },
  {
    name: '4',
    value: 4,
    suit: 'clubs',
    id: '4 of clubs',
    art: 'assets/playing-cards-assets/png/4_of_clubs.png',
  },
  {
    name: '3',
    value: 3,
    suit: 'clubs',
    id: '3 of clubs',
    art: 'assets/playing-cards-assets/png/3_of_clubs.png',
  },
  {
    name: '2',
    value: 2,
    suit: 'clubs',
    id: '2 of clubs',
    art: 'assets/playing-cards-assets/png/2_of_clubs.png',
  },
  {
    name: 'King',
    value: 10,
    suit: 'spades',
    id: 'King of spades',
    art: 'assets/playing-cards-assets/png/king_of_spades.png',
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'spades',
    id: 'Queen of spades',
    art: 'assets/playing-cards-assets/png/queen_of_spades.png',
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'spades',
    id: 'Jack of spades',
    art: 'assets/playing-cards-assets/png/jack_of_spades.png',
  },
  {
    name: '10',
    value: 10,
    suit: 'spades',
    id: '10 of spades',
    art: 'assets/playing-cards-assets/png/10_of_spades.png',
  },
  {
    name: '9',
    value: 9,
    suit: 'spades',
    id: '9 of spades',
    art: 'assets/playing-cards-assets/png/9_of_spades.png',
  },
  {
    name: '8',
    value: 8,
    suit: 'spades',
    id: '8 of spades',
    art: 'assets/playing-cards-assets/png/8_of_spades.png',
  },
  {
    name: '7',
    value: 7,
    suit: 'spades',
    id: '7 of spades',
    art: 'assets/playing-cards-assets/png/7_of_spades.png',
  },
  {
    name: '6',
    value: 6,
    suit: 'spades',
    id: '6 of spades',
    art: 'assets/playing-cards-assets/png/6_of_spades.png',
  },
  {
    name: '5',
    value: 5,
    suit: 'spades',
    id: '5 of spades',
    art: 'assets/playing-cards-assets/png/5_of_spades.png',
  },
  {
    name: '4',
    value: 4,
    suit: 'spades',
    id: '4 of spades',
    art: 'assets/playing-cards-assets/png/4_of_spades.png',
  },
  {
    name: '3',
    value: 3,
    suit: 'spades',
    id: '3 of spades',
    art: 'assets/playing-cards-assets/png/3_of_spades.png',
  },
  {
    name: '2',
    value: 2,
    suit: 'spades',
    id: '2 of spades',
    art: 'assets/playing-cards-assets/png/2_of_spades.png',
  },
  {
    name: 'King',
    value: 10,
    suit: 'diamonds',
    id: 'King of diamonds',
    art: 'assets/playing-cards-assets/png/king_of_diamonds.png',
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'diamonds',
    id: 'Queen of diamonds',
    art: 'assets/playing-cards-assets/png/queen_of_diamonds.png',
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'diamonds',
    id: 'Jack of diamonds',
    art: 'assets/playing-cards-assets/png/jack_of_diamonds.png',
  },
  {
    name: '10',
    value: 10,
    suit: 'diamonds',
    id: '10 of diamonds',
    art: 'assets/playing-cards-assets/png/10_of_diamonds.png',
  },
  {
    name: '9',
    value: 9,
    suit: 'diamonds',
    id: '9 of diamonds',
    art: 'assets/playing-cards-assets/png/9_of_diamonds.png',
  },
  {
    name: '8',
    value: 8,
    suit: 'diamonds',
    id: '8 of diamonds',
    art: 'assets/playing-cards-assets/png/8_of_diamonds.png',
  },
  {
    name: '7',
    value: 7,
    suit: 'diamonds',
    id: '7 of diamonds',
    art: 'assets/playing-cards-assets/png/7_of_diamonds.png',
  },
  {
    name: '6',
    value: 6,
    suit: 'diamonds',
    id: '6 of diamonds',
    art: 'assets/playing-cards-assets/png/6_of_diamonds.png',
  },
  {
    name: '5',
    value: 5,
    suit: 'diamonds',
    id: '5 of diamonds',
    art: 'assets/playing-cards-assets/png/5_of_diamonds.png',
  },
  {
    name: '4',
    value: 4,
    suit: 'diamonds',
    id: '4 of diamonds',
    art: 'assets/playing-cards-assets/png/4_of_diamonds.png',
  },
  {
    name: '3',
    value: 3,
    suit: 'diamonds',
    id: '3 of diamonds',
    art: 'assets/playing-cards-assets/png/3_of_diamonds.png',
  },
  {
    name: '2',
    value: 2,
    suit: 'diamonds',
    id: '2 of diamonds',
    art: 'assets/playing-cards-assets/png/2_of_diamonds.png',
  },
  {
    name: 'King',
    value: 10,
    suit: 'hearts',
    id: 'King of hearts',
    art: 'assets/playing-cards-assets/png/king_of_hearts.png',
  },
  {
    name: 'Queen',
    value: 10,
    suit: 'hearts',
    id: 'Queen of hearts',
    art: 'assets/playing-cards-assets/png/queen_of_hearts.png',
  },
  {
    name: 'Jack',
    value: 10,
    suit: 'hearts',
    id: 'Jack of hearts',
    art: 'assets/playing-cards-assets/png/jack_of_hearts.png',
  },
  {
    name: '10',
    value: 10,
    suit: 'hearts',
    id: '10 of hearts',
    art: 'assets/playing-cards-assets/png/10_of_hearts.png',
  },
  {
    name: '9',
    value: 9,
    suit: 'hearts',
    id: '9 of hearts',
    art: 'assets/playing-cards-assets/png/9_of_hearts.png',
  },
  {
    name: '8',
    value: 8,
    suit: 'hearts',
    id: '8 of hearts',
    art: 'assets/playing-cards-assets/png/8_of_hearts.png',
  },
  {
    name: '7',
    value: 7,
    suit: 'hearts',
    id: '7 of hearts',
    art: 'assets/playing-cards-assets/png/7_of_hearts.png',
  },
  {
    name: '6',
    value: 6,
    suit: 'hearts',
    id: '6 of hearts',
    art: 'assets/playing-cards-assets/png/6_of_hearts.png',
  },
  {
    name: '5',
    value: 5,
    suit: 'hearts',
    id: '5 of hearts',
    art: 'assets/playing-cards-assets/png/5_of_hearts.png',
  },
  {
    name: '4',
    value: 4,
    suit: 'hearts',
    id: '4 of hearts',
    art: 'assets/playing-cards-assets/png/4_of_hearts.png',
  },
  {
    name: '3',
    value: 3,
    suit: 'hearts',
    id: '3 of hearts',
    art: 'assets/playing-cards-assets/png/3_of_hearts.png',
  },
  {
    name: '2',
    value: 2,
    suit: 'hearts',
    id: '2 of hearts',
    art: 'assets/playing-cards-assets/png/2_of_hearts.png',
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
  playerScore = 0
  playerHand.forEach(pCard => {
    playerScore += pCard.value;
    playerTally.innerText = playerScore
  });
  dealerScore = 0
  dealerHand.forEach(dCard => {
    dealerScore += dCard.value;
    dealerTally.innerText = dealerScore
  })
  if (playerScore >= 21){
    hitButton.removeEventListener('click', playerHit)
  }
  checkWin()
}

const dealGame = () => {
  console.log("inside dealGame", isActiveGame)
  if (isActiveGame){
    return
  }
    shuffleDeck();
    playerHand.push(deck.pop());
    checkPlayerAce();
    playerHand.push(deck.pop());
    playerHand.forEach((card) => {
      const newCard = document.createElement('img')
      newCard.classList.add('pcard')
      newCard.src = card.art
      playerCards.append(newCard)
    })
    countCards()
    dealerHand.push(deck.pop());
    checkDealerAce();
    dealerHand.push(deck.pop())
    dealerHand.forEach((card) => {
      const newCard = document.createElement('img')
      newCard.classList.add('dcard')
      newCard.src = card.art
      dealerCards.append(newCard)
    })
    countCards()
    console.log("dealerScore", dealerScore)
    console.log("dealerHand", dealerHand)

    isActiveGame = true
    dealButton.removeEventListener('click', dealGame)
    if (playerScore < 21) {
    hitButton.addEventListener('click', playerHit)
  }
}


const playerHit = () => {
  dealButton.removeEventListener('click', dealGame)
  if (!isPlayerTurn) {
    return
  }
  checkPlayerAce()
  playerCards.innerHTML = ''
  playerHand.push(deck.pop());
  playerHand.forEach((card) => {
    const newCard = document.createElement('img')
    newCard.classList.add('pcard')
    newCard.src = card.art
    playerCards.append(newCard)
  })
  countCards()
}

const dealerPlay = () => {
  if (!isActiveGame){
    return
  }
  dealButton.removeEventListener('click', dealGame)
  hitButton.removeEventListener('click', playerHit)
  isPlayerTurn = false
  isActiveGame = true
  if (playerScore < dealerScore && dealerScore <= 21){
    dealerWins++
    dealerWin.innerText = dealerWins
    isActiveGame = false
    alert("DEALER WINS HIT PLAY AGAIN TO PLAY...AGAIN")
    return
  } else if (playerScore > 21){
    alert("PLAYER ALREADY LOST THERE IS NO STAYING")
    return
  }
  else if (playerScore === dealerScore && dealerScore >= 17){
    pushWins++
    pushTally.innerText = pushWins
    isActiveGame = false
    alert("PUSH IT")
    return
  } else if (playerScore > dealerScore && dealerScore >= 17) {
    playerWins++
    playerWin.innerText = playerWins
    isActiveGame = false
    alert ("PLAYER WINS")
    return
  }
  else if (playerScore <= 21 && dealerScore <17) {
    dealerCards.innerHTML = ''
    checkDealerAce()
    dealerHand.push(deck.pop())
    checkDealerAce()
    dealerHand.forEach((card) => {
      const newCard = document.createElement('img')
      newCard.classList.add('dcard')
      newCard.src = card.art
      dealerCards.append(newCard)
    })
    countCards()
    dealerPlay()
  } else if (playerScore > dealerScore || playerScore === 21 && dealerScore <17) {
    dealerCards.innerHTML = ''
    checkDealerAce()
    dealerHand.push(deck.pop())
    checkDealerAce()
    dealerHand.forEach((card) => {
      const newCard = document.createElement('img')
      newCard.classList.add('dcard')
      newCard.src = card.art
      playerCards.append(newCard)
    })
    countCards()
    dealerPlay()
  }
  else {
    stayButton.removeEventListener('click', dealerPlay)
  }
}


const resetGame = () => {
  dealerHand.forEach((dcard) => {
    deck.push(dcard)
  });
  playerHand.forEach((pCard) => {
    deck.push(pCard)
  });
  dealButton.addEventListener('click', dealGame)
  hitButton.removeEventListener('click', playerHit)
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
  playerTally.innerHTML = ''
  dealerTally.innerHTML = ''
}

dealButton.addEventListener('click', dealGame)

stayButton.addEventListener('click', dealerPlay)
resetButton.addEventListener('click', resetGame)
