// Brian Mays
// General Assembly SEI Project #1
// April 2021
// Spanish Flashcard Game

// VARIABLES

// TODO: Research why neither of these work here (module/require/import/node):
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
    {"id": 50,  "spanish": "el arte",               "english": "art"},
    {"id": 51,  "spanish": "el período",            "english": "period"},
    {"id": 52,  "spanish": "el pie",                "english": "foot"},
    {"id": 53,  "spanish": "la piedra",             "english": "stone"},
    {"id": 54,  "spanish": "la piel",               "english": "skin"},
    {"id": 55,  "spanish": "la pierna",             "english": "leg"},
    {"id": 56,  "spanish": "las píldoras",          "english": "pills"},
    {"id": 57,  "spanish": "el pimentón",           "english": "green pepper"},
    {"id": 58,  "spanish": "la pimienta",           "english": "pepper"},
    {"id": 59,  "spanish": "la piña",               "english": "pineapple"},
    {"id": 60,  "spanish": "las pinturas",          "english": "paints"},
    {"id": 61,  "spanish": "la piscina",            "english": "swimming pool"},
    {"id": 62,  "spanish": "el piso",               "english": "floor, apartment"},
    {"id": 63,  "spanish": "el cajero automático",  "english": "ATM"},
    {"id": 64,  "spanish": "la prueba",             "english": "quiz"},
    {"id": 65,  "spanish": "la taza",               "english": "cup"},
    {"id": 66,  "spanish": "la tarea",              "english": "homework, task"},
    {"id": 67,  "spanish": "tampoco",               "english": "neither"},
    {"id": 68,  "spanish": "el tamaño",             "english": "size"},
    {"id": 69,  "spanish": "la talla",              "english": "size (shoes or clothes)"},
    {"id": 70,  "spanish": "el suelo",              "english": "floor"},
    {"id": 71,  "spanish": "subir",                 "english": "to go up"},
    {"id": 72,  "spanish": "sonar",                 "english": "to ring"},
    {"id": 73,  "spanish": "soñar (con)",           "english": "to dream (of)"},
    {"id": 74,  "spanish": "soleado/a",             "english": "sunny"},
    {"id": 75,  "spanish": "el sobrino / la sobrina",   "english": "nephew / niece"},
    {"id": 76,  "spanish": "sobresaliente",         "english": "outstanding"},
    {"id": 77,  "spanish": "el sobre",              "english": "envelope"},
    {"id": 78,  "spanish": "sobre",                 "english": "about, above"},
    {"id": 79,  "spanish": "simpatico/a",           "english": "friendly, likeable"},
    {"id": 80,  "spanish": "la servilleta",         "english": "napkin"},
    {"id": 81,  "spanish": "séptimo/a",             "english": "seventh"},
    {"id": 82,  "spanish": "la semana que viene",   "english": "next week"},
    {"id": 83,  "spanish": "el semáforo",           "english": "traffic light"},
    {"id": 84,  "spanish": "la selva",              "english": "jungle"},
    {"id": 85,  "spanish": "el sello",              "english": "stamp"},
    {"id": 86,  "spanish": "seguir",                "english": "to continue"},
    {"id": 87,  "spanish": "la seda",               "english": "silk"},
    {"id": 88,  "spanish": "la sandía",             "english": "watermelon"},
    {"id": 89,  "spanish": "la salsa",              "english": "sauce"},
    {"id": 90,  "spanish": "la salchicha",          "english": "sausage"},
    {"id": 91,  "spanish": "la sal",                "english": "salt"},
    {"id": 92,  "spanish": "sacar",                 "english": "to take out, to take away"},
    {"id": 93,  "spanish": "sacar una mala nota",   "english": "to get a bad grade"},
    {"id": 94,  "spanish": "el sacapuntas",         "english": "pencil sharpener"},
    {"id": 95,  "spanish": "sabroso/a",             "english": "delicious"},
    {"id": 96,  "spanish": "rubio/a",               "english": "blond"},
    {"id": 97,  "spanish": "la libertad",           "english": "freedom"},
    {"id": 98,  "spanish": "el león",               "english": "lion"},
    {"id": 99,  "spanish": "la lengua",             "english": "tongue"},
    {"id": 100,  "spanish": "las legumbres",         "english": "vegetables"}
    ];

const instructions = document.querySelector("#instructions");
const closeButton = document.querySelector("#close");
const newGameButton = document.querySelector("#newgame");
const rightButton = document.querySelector("#right");
const wrongButton = document.querySelector("#wrong");
const cardButton = document.querySelector("#card");
const nextButton = document.querySelector("#next");
let score = document.getElementById("score");
let currentScore = 0;
let rightAnswer = 0;
let wrongAnswer = 0;
let currentCard;


// FUNCTIONS

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

// "NEW GAME" BUTTON CLICKED
const newGame = (e) => {
    shuffleDeck();
    // rightAnswer = 0;
    wrongAnswer = 0;
    currentScore = 0;
    score.innerText = 0;
    currentCard = cards[0];
}


// GO TO NEXT CARD IN CARDS ARRAY
const nextCard = (e) => {
    // if cards[currentIndex] go to cards[currentIndex +1]
    currentCard.innerText=""; // <- TODO: This line does not work.
    for (i = 0; i < cards.length; i++) {
        if (currentCard === cards[i]) {
            currentCard = cards[i + 1];
            currentCard.innerText = currentCard.spanish;
            return currentCard;
        }
    }
}

// "NEXT CARD" BUTTON CLICKED
const nextButtonPress = (e) => {
    nextCard();
}

// FLASH CARD CLICKED
const cardPress = (e) => {
    // If the card is showing one language, clicking on it again will show the other.
    // BUG - this cannot target card[i] or currentCard.  What does it need?
    if (e.target.innerText === currentCard.spanish)
    {
        e.target.innerText = `${currentCard.english}`;
    } else {
        e.target.innerText = `${currentCard.spanish}`;
    }
}

// "RIGHT" BUTTON CLICKED
const rightButtonPress = (e) => {
    currentScore += 1;
    score.innerText = currentScore;
    nextButtonPress();
}

// "WRONG" BUTTON CLICKED
const wrongButtonPress = (e) => {
    wrongAnswer += 1;
    nextButtonPress();
}

// "INSTRUCTIONS" BUTTON CLICKED
const instructionsModal = (e) => {
    modal.style.display = "block";
}

// "CLOSE" BUTTON IN MODAL BOX CLICKED
const closeModal = () => {
    modal.style.display = 'none'
}

// EVENT HANDLERS
rightButton.addEventListener("click", rightButtonPress);
wrongButton.addEventListener("click", wrongButtonPress);
cardButton.addEventListener("click", cardPress);
// NOTE: Keeping for future iteration of game.  In this instance it is no longer used.
// nextButton.addEventListener("click", nextButtonPress);
instructions.addEventListener("click",instructionsModal);
closeButton.addEventListener("click", closeModal);
newGameButton.addEventListener("click", newGame);