// favoriteNumber.js

const theFavNumber = 9;
let guess;

while (guess !== theFavNumber) {
    guess = ("Guess the favorite number:");

    if (guess < theFavNumber) {
        console.log("Too low, try again.");
    } else if (guess > theFavNumber) {
        console.log("Too high, try again.");
    } else {
        console.log("Correct! You've guessed the favorite number.");
    }
}


