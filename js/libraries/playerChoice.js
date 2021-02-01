// Passing player selection value and styling icons
class PlayerChoice {
  constructor() {
    this.playerChoicesArray = this._playerChoices();
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _playerChoices() {
    const playerRock = document.querySelector('#playerRock');
    const playerPaper = document.querySelector('#playerPaper');
    const playerScissors = document.querySelector('#playerScissors');
    const playerLizard = document.querySelector('#playerLizard');
    const playerSpock = document.querySelector('#playerSpock');
    const playerChoicesArray = [playerRock, playerPaper, playerScissors, playerLizard, playerSpock];
    return playerChoicesArray;
  }

  _addEvent() {
    this.playerChoicesArray.forEach((choice) => {
      choice.addEventListener('click', () => console.log('clicked'));
    });
  }
}

// function select(playerChoice) {
//   // Add 'selected' styling & playerChoice
//   switch (playerChoice) {
//     case 'rock':
//       playerRock.classList.add('selected');
//       playerChoiceEl.textContent = ' --- Rock';
//       break;
//     case 'paper':
//       playerPaper.classList.add('selected');
//       playerChoiceEl.textContent = ' --- Paper';
//       break;
//     case 'scissors':
//       playerScissors.classList.add('selected');
//       playerChoiceEl.textContent = ' --- Scissors';
//       break;
//     case 'lizard':
//       playerLizard.classList.add('selected');
//       playerChoiceEl.textContent = ' --- Lizard';
//       break;
//     case 'spock':
//       playerSpock.classList.add('selected');
//       playerChoiceEl.textContent = ' --- Spock';
//       break;
//     default:
//       break;
//   }
// }
