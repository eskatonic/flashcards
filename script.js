

// Get Spanish card data from JSON and publish
// When button is clicked, card "flips" to English version.
// Card flips back when clicked again.
// If "Correct" is pressed, correct count goes up by 1 and card is discarded.
// If "Wrong" is pressed, card is pushed to end of deck for retry.


// VARIABLES
const rightButton = document.querySelector("#right");
const wrongButton = document.querySelector("#wrong");
const cardButton = document.querySelector("#card");
const nextButton = document.querySelector("#next");
// let cards = [{id: 1, Spanish: "La Calle", English: "Street"}];
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

// import data from "./cards.json";
// console.log(data);


// FUNCTIONS

// Load the Deck from JSON
// function load() {
//     let cards = JSON.parse(cards);
//     console.log(cards);
// }

// SHUFFLE DECK:
// Create a new array of cards from the deck.
const newCard = (e) => {
    // console.log("NEW CARD BUTTON PRESSED");
}

const wrongButtonPress = (e) => {
    // console.log("WRONG BUTTON PRESSED");
}

const cardPress = (e) => {
    // If the card is showing one language, clicking on it again will show the other.
    if (e.target.innerText === cards[0].spanish)
    {
        e.target.innerText = `${cards[0].english}`;
    } else {
        e.target.innerText = `${cards[0].spanish}`;
    }
}

const nextButtonPress = (e) => {
    // console.log("NEXT CARD BUTTON PRESSED");
}

// EVENT HANDLERS
rightButton.addEventListener("click", newCard);
wrongButton.addEventListener("click", wrongButtonPress);
cardButton.addEventListener("click", cardPress);
nextButton.addEventListener("click", nextButtonPress);

