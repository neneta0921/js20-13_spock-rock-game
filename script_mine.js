// import './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');
const resetBtn = document.querySelector('.reset-icon');

let computerChoice = '';
let playerScore = 0;
let computerScore = 0;

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

// Passing player or Computer selection value and styling icons
function addSelectedClassAndSHowText(choice, side) {
  const firstLetterUpperCase = choice.charAt(0).toUpperCase() + choice.slice(1);
  const selectedClass = document.getElementById(`${side + firstLetterUpperCase}`);
  const targetTextEl = document.getElementById(`${side + 'Choice'}`);
  // Change Selected Item Style
  selectedClass.classList.add('selected');
  // Show text
  targetTextEl.textContent = ` --- ${firstLetterUpperCase}`;
}

function computerSelected() {
  const itemsArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  computerChoice = itemsArray[Math.floor(Math.random() * itemsArray.length)];
  addSelectedClassAndSHowText(computerChoice, 'computer');
}

function showScore() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function resultGame(playerChoice) {
  computerSelected();
  let defeatsItems = choices[playerChoice].defeats;

  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    // Check defeatItems includes computerChoice, return true/false
    let isDefeated = false;
    defeatsItems.forEach((item) => {
      if (item === computerChoice) {
        isDefeated = true;
      }
    });
    if (isDefeated) {
      resultText.textContent = "You Won!";
      playerScore++;
    } else {
      resultText.textContent = "You Lost!";
      computerScore++;
    }
  }
  showScore();
}

function removeSelectedClass() {
  // Remove 'selected' class
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected')
  });
}

// Passing player selection value and styling icons
function select(playerChoice) {
  // Remove 'selected' class
  removeSelectedClass();
  addSelectedClassAndSHowText(playerChoice, 'player');
  resultGame(playerChoice);
}

// Remove 'selected' style , initialize text and score
function resetAll() {
  // Remove 'selected' class
  removeSelectedClass();
  // initialize let
  playerScore = 0;
  computerScore = 0;
  computerChoice = '';
  // Score turn 0
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  // Remove text
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
}

// On load
resetAll();
