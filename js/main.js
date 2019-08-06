/*----- constants -----*/
var suits = ['s', 'c', 'd', 'h'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];

// build a 'master' deck of 'card' objects used to create shuffled decks
var masterDeck;
//renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
var shuffledDeck;
var playerHand;

/*----- cached element references -----*/
var shuffledContainer = document.getElementById('shuffled-deck-container');
var handContainer = document.getElementById('hand-container');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderPlayerHand); 
//document.querySelector('hit').addEventListener('click', renderShuffledDeck); 
//document.querySelector('stay').addEventListener('click', renderShuffledDeck);

/*----- functions -----*/
function init(){
    masterDeck = buildMasterDeck();
    shuffledDeck = shuffledDeck();
}
init()

function shuffledDeck() {
  // create a copy of the masterDeck (leave masterDeck untouched!)
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return shuffledDeck;
  //renderDeckInContainer(shuffledDeck, shuffledContainer);
}

function renderPlayerHand() {
    var tempDeck = shuffledDeck.slice(0,2);
    playerHand = [];
    playerHand.push(tempDeck);
    renderDeckInContainer(playerHand, handContainer);
    }


function renderDeckInContainer(deck, container) {
  container.innerHTML = '';
  // Let's build the cards as a string of HTML
  var cardsHtml = deck.reduce(function(html, card) {
    return html + `<div class="card ${card.face}"></div>`;
  }, '');
  container.innerHTML = cardsHtml;
}

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

//renderShuffledDeck();