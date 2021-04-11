

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
// let cards = "CARD TEXT HERE"; <- just used to test card text area
let cards = [{"id:": 1, "Spanish": "La Calle", "English": "Street"}];

// import data from "./cards.json";
// console.log(data);


// FUNCTIONS

// Load the Deck from JSON
function load() {
    let cards = JSON.parse(cards);
    console.log(cards);
}
// SHUFFLE DECK:
// Create a new array of cards from the deck.
const newCard = (e) => {
    console.log("NEW CARD BUTTON PRESSED");
}

const wrongButtonPress = (e) => {
    console.log("WRONG BUTTON PRESSED");
}

const cardPress = (e) => {
    e.target.innerText = `${cards[0].Spanish}`;
    //console.log(`${cards."English"}`);
}

const nextButtonPress = (e) => {
    console.log("NEXT CARD BUTTON PRESSED");
}

// EVENT HANDLERS
rightButton.addEventListener("click", newCard);
wrongButton.addEventListener("click", wrongButtonPress);
cardButton.addEventListener("click", cardPress);
nextButton.addEventListener("click", nextButtonPress);

