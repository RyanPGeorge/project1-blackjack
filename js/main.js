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
document.querySelector('button').addEventListener('click', dealPlayerHand); 
//document.querySelector('hit').addEventListener('click', hitPlayerHand); 
//document.querySelector('stay').addEventListener('click', renderShuffledDeck);

/*----- functions -----*/
function init(){
    masterDeck = buildMasterDeck();
    shuffledDeck = shuffledDeck();
    dealPlayerHand = dealPlayerHand();
    //hitPlayerHand = hitPlayerHand();
    //buttons
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

function dealPlayerHand() {
    var tempDeck = shuffledDeck.slice(0,2);
    playerHand = [];
    playerHand.push(tempDeck);
    renderDeckInContainer(playerHand, handContainer);
    //return playerHand;
    }
    // return playerHand;


function hitPlayerHand() {
    var tempDeck = shuffledDeck.pop();
    //playerHand = [];
    playerHand.push(tempDeck);
    renderHandInContainer(playerHand, handContainer);
}

// this will add a card when hit 
function renderDeckInContainer(deck, container) {
  container.innerHTML = '';
  // Let's build the cards as a string of HTML
  var cardsHtml = deck.reduce(function(html, card) {
      console.log('card face',card.face)
      console.log('card OBJ is', card)
      // higher order array method or for loop to iterate over hand, this function will include the DOM elements to display the card, and values
    return html + `<div class="card ${card[0 ].face}"></div>`;
  }, '');
  container.innerHTML = cardsHtml;
}

// This will render two cards when game starts
  function renderHandInContainer(deck, container) {
    container.innerHTML = '';
    // Let's build the cards as a string of HTML
    var cardsHtml = deck.reduce(function(html, cards) {

      return html + `<div class="card ${cards[0].face}"></div>` + `<div class="card ${cards[1].face}"></div>`;

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