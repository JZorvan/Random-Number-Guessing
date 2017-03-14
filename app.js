'use strict';

// Variables

const highestNum = 10000;
let guess;
let attempts = 0;

// Random Number Generator

const getRandomNum = (highestNum) => {
  return Math.floor( Math.random() * highestNum) + 1;
}

// Creates the Number to Guess
const randomNum = getRandomNum(highestNum);

// Computer makes guesses until correct, logging # of attempts
while ( guess !== randomNum ) {
	guess = getRandomNum(highestNum);
	attempts++;
}

// Print results
document.write(`<p>The random number is: ${randomNum}</p>`);
document.write(`<p>The computer guessed it after ${attempts} attempts.</p>`);