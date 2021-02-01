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

let playerChoice = '';
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
function addSelectedClassAndSHowText(name, side) {
  const firstLetterUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
  const selectedId = side + firstLetterUpperCase;
  const selectedClass = document.getElementById(selectedId);
  const targetEl = side + 'ChoiceEl';
  // Change Selected Item Style and show text
  selectedClass.classList.add('selected');
  targetEl.textContent = ` --- ${selectedId}`;
}

function computerSelected() {
  const itemsArray = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  computerChoice = itemsArray[Math.floor(Math.random() * itemsArray.length)];
  addSelectedClassAndSHowText(computerChoice, 'computer');
}

function getDefeatsItems() {
  let defeatsItems = [];
  switch (playerChoice) {
    case 'rock':
      defeatsItems = choices.rock.defeats;
      break;
    case 'paper':
      defeatsItems = choices.paper.defeats;
      break;
    case 'scissors':
      defeatsItems = choices.scissors.defeats;
      break;
    case 'lizard':
      defeatsItems = choices.lizard.defeats;
      break;
    case 'spock':
      defeatsItems = choices.spock.defeats;
  }
  return defeatsItems;
}

function showScore() {
  playerChoiceEl.textContent = playerScore;
  computerChoiceEl.textContent = computerScore
}

function resultGame() {
  computerSelected();
  let defeatsItems = getDefeatsItems();
  console.log(defeatsItems);
  console.log('player: ', playerChoice, ', computer: ', computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else if (computerChoice === defeatsItems[0] || computerChoice === defeatsItems[1]) {
    resultText.textContent = "You Won!";
    playerScore++;
    // startConfetti();
  } else {
    resultText.textContent = "You Lost!";
    computerScore++;
  }
  showScore();
}

function removeSelected() {
  for (let i = 0; i < allGameIcons.length; i++) {
    allGameIcons[i].classList.remove('selected');
  }
}

// Passing player selection value and styling icons
function select(playerSelected) {
  if (playerScore > 0 || computerScore > 0) {
    removeSelected();
  }
  playerChoice = playerSelected;
  addSelectedClassAndSHowText(playerChoice, 'player');
  resultGame();
}


// On load, show score
showScore();