// import { startConfetti, stopConfetti, removeConfetti } from './venders/confetti.js';

const playerScoreEl = document.querySelector('#playerScore');

const computerScoreEl = document.querySelector('#computerScore');
const resultText = document.querySelector('#resultText');

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// Reset score & playerChoice/computerChoice
function resetAll() {
  // Reset Css and Animation
  // resetSelected();
  // Reset Score
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  // Reset Text
  computerChoice = '';
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
}
window.resetAll = resetAll;

// Call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// On startup, set initial values
resetAll();

new PlayerChoice();
