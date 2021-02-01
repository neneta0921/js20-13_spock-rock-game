// Passing player selection value and styling icons
const playerChoiceEl = document.querySelector('#playerChoice');

class PlayerChoice {
  constructor() {
    this._playerChoicesArray = this._playerChoices();
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
    this._playerChoicesArray.forEach((choice) => {
      choice.addEventListener('click', () => {
        const playerChoice = choice.getAttribute('title');

        // Add 'selected' styling & playerChoice
        choice.classList.add('selected');
        playerChoiceEl.textContent = ` --- ${playerChoice}`;
      });
    });
  }
}
