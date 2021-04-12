// Brian Mays
// General Assembly SEI Project #1
// April 2021
// Spanish Flashcard Game

// VARIABLES

// Research why neither of these work here (module/require/import/node):
// const cards = require('./cards.json');
// import * as cards from "./cards.json";
let cards = [
    {"id": 1,   "spanish": "la silla",              "english": "chair"},
    {"id": 2,   "spanish": "caerse",                "english": "to fall"},
    {"id": 3,   "spanish": "la caja",               "english": "box, cash register"},
    {"id": 4,   "spanish": "los calcitines",        "english": "socks"},
    {"id": 5,   "spanish": "cambiar",               "english": "to change"},
    {"id": 6,   "spanish": "la cancha",             "english": "court (for sports)"},
    {"id": 7,   "spanish": "el canal",              "english": "channel"},
    {"id": 8,   "spanish": "la camiseta",           "english": "t-shirt"},
    {"id": 9,   "spanish": "la camisa",             "english": "shirt"},
    {"id": 10,  "spanish": "el anillo",             "english": "ring"},
    {"id": 11,  "spanish": "tener calor",           "english": "to be hot"},
    {"id": 12,  "spanish": "tener ... años",        "english": "to be ... years old"},
    {"id": 13,  "spanish": "el tenedor",            "english": "fork"},
    {"id": 14,  "spanish": "el templo",             "english": "temple"},
    {"id": 15,  "spanish": "el televisor",          "english": "television set"},
    {"id": 16,  "spanish": "el cibercafé",          "english": "internet café"},
    {"id": 17,  "spanish": "la reserva",            "english": "reservation"},
    {"id": 18,  "spanish": "el viernes",            "english": "Friday"},
    {"id": 19,  "spanish": "el viento",             "english": "wind"},
    {"id": 20,  "spanish": "viajar",                "english": "to travel"},
    {"id": 21,  "spanish": "el vestido",            "english": "dress"},
    {"id": 22,  "spanish": "el verano",             "english": "summer"},
    {"id": 23,  "spanish": "ventoso/a",             "english": "windy"},
    {"id": 24,  "spanish": "vendido/a",             "english": "sold"},
    {"id": 25,  "spanish": "el vecino / la vecina", "english": "neighbor"},
    {"id": 26,  "spanish": "el vecindario",         "english": "neighborhood"},
    {"id": 27,  "spanish": "vaso",                  "english": "glass"},
    {"id": 28,  "spanish": "las uvas",              "english": "grapes"},
    {"id": 29,  "spanish": "la tarifa",             "english": "fee"},
    {"id": 30,  "spanish": "la uña",                "english": "nail (finger or toe)"},
    {"id": 31,  "spanish": "último/a",              "english": "last"},
    {"id": 32,  "spanish": "el animal",             "english": "animal"},
    {"id": 33,  "spanish": "el año",                "english": "year"},
    {"id": 34,  "spanish": "el año pasado",         "english": "last year"},
    {"id": 35,  "spanish": "el año que viene",      "english": "next year"},
    {"id": 36,  "spanish": "anoche",                "english": "last night"},
    {"id": 37,  "spanish": "anteayer",              "english": "day before yesterday"},
    {"id": 38,  "spanish": "los anteojos",          "english": "glasses"},
    {"id": 39,  "spanish": "antipático/a",          "english": "unpleasant, mean"},
    {"id": 40,  "spanish": "el anuncio",            "english": "announcement, advertisement"},
    {"id": 41,  "spanish": "el apartamento",        "english": "apartment"},
    {"id": 42,  "spanish": "el apellido",           "english": "last name"},
    {"id": 43,  "spanish": "aprender",              "english": "to learn"},
    {"id": 44,  "spanish": "apretado/a",            "english": "tight"},
    {"id": 45,  "spanish": "el árbol",              "english": "tree"},
    {"id": 46,  "spanish": "el arete",              "english": "earring"},
    {"id": 47,  "spanish": "el arquitecto / la arquitecta", "english": "architect"},
    {"id": 48,  "spanish": "arreglar",              "english": "to fix, to arrange"},
    {"id": 49,  "spanish": "el arroz",              "english": "rice"},
    {"id": 50,  "spanish": "el arte",               "english": "art"}
    ];

const instructions = document.querySelector("#instructions");
const closeButton = document.querySelector("#close");
const newGameButton = document.querySelector("#newgame");
const rightButton = document.querySelector("#right");
const wrongButton = document.querySelector("#wrong");
const cardButton = document.querySelector("#card");
const nextButton = document.querySelector("#next");

// If "Correct" is pressed, correct count goes up by 1 and card is discarded.
// If "Wrong" is pressed, card is pushed to end of deck for retry.




// FUNCTIONS

// INSTRUCTIONS

const instructionsModal = (e) => {
    modal.style.display = "block";
}
// SHUFFLE DECK:
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

const shuffleDeck = (e) => {
    for (i = cards.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let newDeck = cards[i];
        cards[i] = cards[j];
        cards[j] = newDeck;
    }
}

// Create a new array of cards from the deck.
const newGame = (e) => {
    cardButton.innerText = "";
    shuffleDeck();
    for (i = 0; i < cards.length; i++){
    console.log(cards[i]);
    }

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
    console.log("NEXT CARD BUTTON PRESSED");
}

const newCard = (e) => {

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
newGameButton.addEventListener("click", newGame);
