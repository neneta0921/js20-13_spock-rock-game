// Passing player selection value and styling icons
const playerChoiceEl = document.querySelector('#playerChoice');
const computer = new ComputerChoice();
const result = new ShowResult();

class PlayerChoice {
  constructor() {
    this._playerChoicesArray = this._playerChoicesArray();
    this._init();
  }

  _init() {
    this._addEvent();
  }

  _playerChoicesArray() {
    const playerRock = document.querySelector('#playerRock');
    const playerPaper = document.querySelector('#playerPaper');
    const playerScissors = document.querySelector('#playerScissors');
    const playerLizard = document.querySelector('#playerLizard');
    const playerSpock = document.querySelector('#playerSpock');
    const playerChoicesArray = [playerRock, playerPaper, playerScissors, playerLizard, playerSpock];
    return playerChoicesArray;
  }

  // Reset all 'selected' icons
  _resetSelected() {
    const allGameIcons = document.querySelectorAll('.far');

    allGameIcons.forEach((icon) => {
      icon.classList.remove('selected');
    });
    stopConfetti();
    removeConfetti();
  }

  _addEvent() {
    this._playerChoicesArray.forEach((choice) => {
      choice.addEventListener('click', () => {
        this._resetSelected();
        const playerChoice = choice.getAttribute('title');

        // Add 'selected' styling & playerChoice
        choice.classList.add('selected');
        playerChoiceEl.textContent = ` --- ${playerChoice}`;

        // Display computer choice
        const ComputerChoice = computer.displayComputerChoice();

        // Display Result
        result.updateScore(playerChoice.toLowerCase(), ComputerChoice.toLowerCase());
      });
    });
  }
}
