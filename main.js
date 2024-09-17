"use strict";
// letters
const letters = 'abcdefghijklmnopqrstuvwxyz';
// make an array from letters
let lettersArray = Array.from(letters);
//select Letters Container
let lettersContainer = document.querySelector('.letters');
// Genrate Letters
lettersArray.forEach(i => {
    // Create Span
    let span = document.createElement('span');
    // Append Text Node
    span.appendChild(document.createTextNode(i));
    //Add Class 
    span.className = 'letter-box';
    //Append span to letters Container
    lettersContainer === null || lettersContainer === void 0 ? void 0 : lettersContainer.appendChild(span);
});
//Category Movies
let words = {
    movies: [
        "The Shawshank Redemption",
        "The Godfather",
        "The Dark Knight",
        "Schindler's List",
        "Pulp Fiction",
        "Forrest Gump",
        "Inception",
        "Fight Club",
        "The Matrix"
    ],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
    fruits: ['apple', 'banana', 'orange', 'mango', 'grape'],
    animals: ['dog', 'cat', 'elephant', 'tiger', 'lion']
};
let allkeys = Object.keys(words);
let randomPropNum = Math.floor(Math.random() * allkeys.length);
let randomPropName = allkeys[randomPropNum];
let randomPropValue = words[randomPropName];
let randomValueNum = Math.floor(Math.random() * randomPropValue.length);
let randomValueName = randomPropValue[randomValueNum];
//Set Category Name
document.querySelector('.game-info .category span').textContent = randomPropName;
//Letter Guess Container
let letterGuessContainer = document.querySelector('.letters-guess');
//Set The Game Status / Attempts
let gameStatus = false;
let gameAttempts = 0;
//QuerySelect The Draw
//Convert Chosen Word To Array
let letterGuessArray = Array.from(randomValueName.toLowerCase());
letterGuessArray.forEach(e => {
    let empty = document.createElement('span');
    if (e === " ") {
        empty.classList.add('space');
    }
    letterGuessContainer.appendChild(empty);
});
// Select The Spans Of The ChosenWord
let letterSpans = document.querySelectorAll('.letters-guess span');
console.log(letterGuessArray);
document.addEventListener('click', (e) => {
    var _a;
    gameStatus = false;
    const target = e.target;
    if (target.className === 'letter-box') {
        target.classList.add('clicked');
        let clickedLetter = target.textContent.toLowerCase();
        letterGuessArray.forEach((wordLetter, wordIndex) => {
            //If The CLicked Letter Is In The Array
            if (clickedLetter === wordLetter) {
                gameStatus = true;
                letterSpans.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = clickedLetter;
                    }
                });
            }
        });
        //if the letter is wrong
        if (gameStatus === false) {
            gameAttempts++;
            (_a = document.querySelector('.hangman-draw')) === null || _a === void 0 ? void 0 : _a.classList.add(`wrong-${gameAttempts}`);
            const fail = document.getElementById('fail');
            fail.play();
            if (gameAttempts === 8) {
                lettersContainer === null || lettersContainer === void 0 ? void 0 : lettersContainer.classList.add('finished');
                endgame();
            }
        }
        else {
            const success = document.getElementById('success');
            success.play();
        }
    }
});
//EndGame Function
function endgame() {
    //crete game over div
    let gameOverDiv = document.createElement('div');
    let gameOverText = document.createTextNode(`Game Over!! The Word Was ${randomValueName}`);
    gameOverDiv.appendChild(gameOverText);
    gameOverDiv.className = 'popup';
    document.body.appendChild(gameOverDiv);
}
