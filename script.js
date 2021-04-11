
// VARIABLES
const rightButton = document.querySelector("#right");
const wrongButton = document.querySelector("#wrong");
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

    // 
}

const wrongButtonPress = (e) => {
    console.log("WRONG BUTTON PRESSED");
}

// EVENT HANDLERS
rightButton.addEventListener("click", newCard);
wrongButton.addEventListener("click", wrongButtonPress);

