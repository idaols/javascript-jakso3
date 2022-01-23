/**TASK 1 */

/**
 * Algoritmi
 *
 * Arvaaminen aloitetaan min ja max arvojen puolivälistä. Tämän jälkeen arvattuun lukuun
 * lisätään tai siitä vähennetään puolet joka kerta sen mukaan, onko arvaus liian
 * korkea vai matala.
 */

const guessNumber = (min, max) => {
  let guess = Math.round((max - min + 1) / 2) + min;
  if (guessHistory.indexOf(guess) === -1) {
    return guess;
  } else {
    return guess - 1;
  }
};

const algorithm = () => {
  if (lastGuessTooHigh === null) {
    return guessNumber(guessMin, guessMax);
  } else {
    if (lastGuessTooHigh) {
      guessMax = guessHistory.at(-1);
      return guessNumber(guessMin, guessMax);
    } else {
      guessMin = guessHistory.at(-1);
      return guessNumber(guessMin, guessMax);
    }
  }
};

const maxValue = 90;
const minValue = 10;
let guessHistory = [];
let testAlgorithmCount = [];
let lastGuessTooHigh = null;
let guessMin = minValue;
let guessMax = maxValue;

for (let i = 0; i < 1500; i++) {
  let testRandomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  for (let i = 0; i < 1000; i++) {
    let testGuessed = algorithm();
    guessHistory.push(testGuessed);
    if (testGuessed === testRandomNumber) {
      break;
    } else if (testGuessed > testRandomNumber) {
      lastGuessTooHigh = true;
    } else {
      lastGuessTooHigh = false;
    }
  }
  testAlgorithmCount.push(guessHistory.length);
  guessHistory = [];
  lastGuessTooHigh = null;
  guessMin = minValue;
  guessMax = maxValue;
};


let algorithmSum = 0;

for (let i = 0; i < testAlgorithmCount.length; i++) {
  algorithmSum += testAlgorithmCount[i];
};

console.log('Algoritmin arvausten keskiarvo: ' + Math.round(algorithmSum / testAlgorithmCount.length));
console.log('Algoritmin arvausten maksimi: ' + Math.max(...testAlgorithmCount));
console.log('Algoritmin teoreettinen maksimi on 9 (jos random arvo on 10)');
console.log('Algoritmin teoreettinen minimi on 1 (jos random arvo on 51)');



guessHistory = [];
lastGuessTooHigh = null;
guessMin = minValue;
guessMax = maxValue;
let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
console.log('arvattava luku: ' + randomNumber);


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const desc = document.querySelector('.desc');
const timer = document.querySelector('#clock');
const numberOfGuesses = document.querySelector('#numberOfGuesses');

const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let startTime = Date.now();
const maxGuessCount = 10;
let resetButton;

desc.textContent = 'Computer chooses a number between ' + minValue + ' and ' + maxValue + '.';

const endTimer = () => {
  const endTime = Date.now() - startTime;
  timer.textContent += Math.floor(endTime / 1000) + ' seconds elapsed';
};

const countGuesses = () => {
  numberOfGuesses.textContent += 'You guessed ' + guessCount + ' times';
};


const checkGuess = () => {
  const guessedValue = algorithm();

  const userGuess = Number(guessedValue);
  guessHistory.push(userGuess);
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
      lastGuessTooHigh = false;
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
      lastGuessTooHigh = true;
    }
  }

  guessCount++;
};


guessSubmit.addEventListener('click', checkGuess);



const setGameOver = () => {
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

  guessSubmit.disabled = false;

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);

  guessHistory = [];
  lastGuessTooHigh = null;
  guessMin = minValue;
  guessMax = maxValue;
};

