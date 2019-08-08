
//DONE//deal two cards and by pushing them into player hand array

//DONE// if player wishes, he can hit, at which point another card will be pushed into the player hand arrr, from the deck

//IN PROGRESS// after each hit, evaluate if player is at 21 or bust. If under 21 allow option to hit to remain open. 

// set up onclick event functions 

/*
getScore = (playerHand) => {
  hand.forEach(card => {
    let sum =+ card.value
    return sum
  })
  console.log(sum)
  checkValue(sum)
}

 
checkValue = () => {
  if (sum > 21) {
    //bust you loose
  }
  else if (sum === 21) {
    //you win
  }
  else {
    // all hit 
  }
}
*/

/*----- constants -----*/
var suits = ['s', 'c', 'd', 'h'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// build a 'master' deck of 'card' objects used to create shuffled decks
var masterDeck;
//renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
var shuffledDeck;
var playerHand = [];
var playerScore = 21;
var gameWinLose;

/*----- cached element references -----*/
//var shuffledContainer = document.getElementById('shuffled-deck-container');
var handContainer = document.getElementById('hand-container');
var dealerContainer = document.getElementById('dealer-container');
var scoreContainer = document.getElementById('score-container');

/*----- event listeners -----*/
document.getElementById('deal-button').addEventListener('click', renderPlayerDeal); 
document.getElementById('hit-button').addEventListener('click', renderPlayerHit); 
//document.getElementById('deal-button').addEventListener('click', stayPlayerHand); 


/*----- functions -----*/
function init(){
    masterDeck = buildMasterDeck();
    shuffledDeck = shuffledDeck();
}
init()

function buildMasterDeck() {
  var deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
        // the 'face' property maps to the CSS classes for cards
        face: `${suit}${rank}`,
        // the 'value' property is set for blackjack, not war
        value: Number(rank) || (rank === 'A' ? 11 : 10)
      });
    });
  });
  return deck;
}

function shuffledDeck() {
  // create a copy of the masterDeck (leave masterDeck untouched!)
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return shuffledDeck;
}

function renderDeckInContainer(deck, container) {
  container.innerHTML = '';
  // Let's build the cards as a string of HTML
  var cardsHtml = deck.reduce(function(html, card, value) {
      //console.log('card face', card.face)
      //console.log('card value is', value)  
      //console.log("the player's hand is", playerHand)  
      ///// higher order array method or for loop to iterate over hand, this function will include the DOM elements to display the card, and values
    return html + `<div class="card ${card.face}"></div>`;
  }, '');
  container.innerHTML = cardsHtml;
}

/*
function renderScoreInContainer(playerScore, scorecontainer) {
  scorecontainer.innerHTML = '';
  var scoreHtml = deck.reduce(function(html, card) {
    return html + `<div class="card" ${card.value}"</div>`
  }
  scorecontainer.innerHTML = scoreHtml;
}
*/




// Deal me a hand functions ->
function renderPlayerDeal() {
    var tempDeck = shuffledDeck.slice(0,2);
    playerHand = [];
    playerHand = playerHand.concat(tempDeck);
    renderDeckInContainer(playerHand, handContainer);
}

function renderPlayerHit() {
    var tempDeck = shuffledDeck.pop();
    playerHand = playerHand.concat(tempDeck);
    renderDeckInContainer(playerHand, handContainer);
}

/* drafts of update score counter logic
function renderPlayerScore() {
  playerScore = 0;
  playerHand.forEach(card => {
      playerScore = playerScore + card.value;
    })
    console.log(sum)
    checkValue(sum)
  }
}
*/

/*
function renderWinLose() {
  playerScore = 0;
  playerHand.forEach(card => {
    playerScore = playerScore + card.value;
  });

  if (playerScore > 21) {
    gameWinLose = 'You lost!';
  }

  else if (playerScore == 21) {
    gameWinLose = 'You won!';

  }
  else {
    gameWinLose = '';
  }
*/

/* //win lose logic
function gameWinLose () {

}
*/


/*
// This will render two cards when game starts (SAL)
  function renderFirstHandInContainer(deck, container) {
    container.innerHTML = '';
    // Let's build the cards as a string of HTML
    var cardsHtml = deck.reduce(function(html, cards) {

      return html + `<div class="card ${cards[0].face}"></div>` + `<div class="card ${cards[1].face}"></div>`;

    }, '');
    container.innerHTML = cardsHtml;
  }


/* function dealerHand() {
  // a simple function to generate numeric score between 1 - 25. 
  // once player hits or stays, it will compare against this numeric dealer score to determine a win or loss against the dealer
}
*/

/*
function winLoss() {
  //once player hits or stays, this will compare against this numeric dealer score to determine a win or loss against the dealer 
}
*/