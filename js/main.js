/*----- constants -----*/
var suits = ['s', 'c', 'd', 'h'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
var masterDeck;

/*----- app's state (variables) -----*/
var shuffledDeck;
var playerHand;
var playerScore;
var shouldGameRun;

/*----- cached element references -----*/
var handContainer = document.getElementById('hand-container');
var dealerContainer = document.getElementById('dealer-container');
var scoreContainer = document.getElementById('score-container');

/*----- event listeners -----*/
document.getElementById('deal-button').addEventListener('click', handlePlayerDeal); 
document.getElementById('hit-button').addEventListener('click', handleHit); 
document.getElementById('reset').addEventListener('click', init); 

/*----- functions -----*/
init()

function init(){
    playerScore = 0;
    playerHand = [];
    shouldGameRun = true // at the start, the game SHOULD run. Once you bust, it should not. 
    handContainer.innerHTML = "";
    masterDeck = buildMasterDeck(); 
    shuffledDeck = handleShuffleDeck();
    render();
}

function buildMasterDeck() {
  var deck = [];
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
        // the 'face' property maps to the CSS classes for cards
        face: `${suit}${rank}`,
        value: Number(rank) || (rank === 'A' ? 11 : 10)
      });
    });
  });
  return deck;
}

function handleShuffleDeck() {
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
  // Builds the cards as a string of HTML
  var cardsHtml = deck.reduce(function(html, card, value) {
    return html + `<div class="card ${card.face}"></div>`;
  }, '');
  container.innerHTML = cardsHtml;
}

function handlePlayerDeal() {
    if(!shouldGameRun || playerHand.length > 0) return;
    var tempDeck = shuffledDeck.slice(0,2);
    playerHand = playerHand.concat(tempDeck);
    playerScore = handleUpdateScore();
    renderDeckInContainer(playerHand, handContainer);
    render();
}

function handleHit() {
    if(!shouldGameRun) return;
    playerHand = playerHand.concat(shuffledDeck.pop());
    playerScore = handleUpdateScore();
    renderDeckInContainer(playerHand, handContainer);
    render();
}

function handleUpdateScore() {
    return playerHand.reduce((acc, element) => {
      return acc + element.value;
    }, 0);
}

function handleWinLose() {
  if(playerScore < 21) {
    return `Your Score Is: ${playerScore}`;
  }else if (playerScore === 21) {
    shouldGameRun = false
    return 'BLACKJACK!! YOU WIN!!';
  } else {
    shouldGameRun = false;
    return 'BUST! You Lose!!';
  }
}

function render() {
  scoreContainer.innerHTML = handleWinLose();
}