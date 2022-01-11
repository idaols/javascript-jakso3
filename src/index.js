/**TASK 2 */

const maxValue = 90;
const minValue = 10;
let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
console.log(randomNumber);

// const randomNumber = (minValue, maxValue) => {
//   return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue); //The maximum is inclusive and the minimum is inclusive
// };


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const desc = document.querySelector('.desc');
const timer = document.querySelector('#clock');
const numberOfGuesses = document.querySelector('#numberOfGuesses');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let startTime = Date.now();
const maxGuessCount = 8;
let resetButton;
guessField.focus();

desc.textContent = 'Choose a number between ' + minValue + ' and ' + maxValue + '. You have ' + maxGuessCount + ' guesses!';

const endTimer = () => {
  const endTime = Date.now() - startTime;
  timer.textContent += Math.floor(endTime / 1000) + ' seconds elapsed';
};

const countGuesses = () => {
  numberOfGuesses.textContent += 'You guessed ' + guessCount + ' times';
};


const checkGuess = () => {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lastResult.style.borderRadius = '3px';
    lowOrHi.textContent = '';
    setGameOver();
    endTimer();
    countGuesses();
  } else if (guessCount === maxGuessCount) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
    endTimer();
    countGuesses();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    lastResult.style.borderRadius = '3px';
    if (userGuess < minValue || userGuess > maxValue) {
      lowOrHi.textContent = 'Number must be between ' + minValue + ' and ' + maxValue + "!";
    } else if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
};


guessSubmit.addEventListener('click', checkGuess);

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
};

const resetGame = () => {
  guessCount = 1;
  startTime = Date.now();

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  timer.textContent = '';
  numberOfGuesses.textContent = '';

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};

