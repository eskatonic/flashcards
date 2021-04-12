

// Get Spanish card data from JSON and publish
// When button is clicked, card "flips" to English version.
// Card flips back when clicked again.
// If "Correct" is pressed, correct count goes up by 1 and card is discarded.
// If "Wrong" is pressed, card is pushed to end of deck for retry.


// VARIABLES
const instructions = document.querySelector("#instructions");
const closeButton = document.querySelector("#close");
const newGameButton = document.querySelector("#newgame");
const rightButton = document.querySelector("#right");
const wrongButton = document.querySelector("#wrong");
const cardButton = document.querySelector("#card");
const nextButton = document.querySelector("#next");

let cards = [ {
    "id": 1,
    "spanish": "la silla",
    "english": "chair"
},

{
    "id": 2,
    "spanish": "caerse",
    "english": "to fall"
},

{
    "id:": 3,
    "spanish": "la caja",
    "english": "box, cash register"
},

{
    "id": 4,
    "spanish": "los calcitines",
    "english": "socks"
},

{
    "id": 5,
    "spanish": "cambiar",
    "english": "to change"
}
];


// FUNCTIONS

// INSTRUCTIONS

const instructionsModal = (e) => {
    modal.style.display = "block";
}
// SHUFFLE DECK:
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

const shuffleDeck = (e) => {
    // let newDeck = [];
    for (i = cards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let newDeck = cards[i];
        cards[i] = cards[j];
        cards[j] = newDeck;
    }
}

shuffleDeck();
console.log("The cards are: ");
for(i = 0; i < cards.length; i++) {
    console.log(`$cards[i].id`);
}


// Create a new array of cards from the deck.
const newCard = (e) => {
    // console.log("NEW CARD BUTTON PRESSED");
}

const wrongButtonPress = (e) => {
    // console.log("WRONG BUTTON PRESSED");
}

const cardPress = (e) => {
    // If the card is showing one language, clicking on it again will show the other.
    if (e.target.innerText === cards[1].spanish)
    {
        e.target.innerText = `${cards[1].english}`;
    } else {
        e.target.innerText = `${cards[1].spanish}`;
    }
}

const nextButtonPress = (e) => {
    // console.log("NEXT CARD BUTTON PRESSED");
}

const closeModal = () => {
    modal.style.display = 'none'
  }

// EVENT HANDLERS
rightButton.addEventListener("click", newCard);
wrongButton.addEventListener("click", wrongButtonPress);
cardButton.addEventListener("click", cardPress);
nextButton.addEventListener("click", nextButtonPress);
instructions.addEventListener("click",instructionsModal);
closeButton.addEventListener("click", closeModal);
