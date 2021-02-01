// Passing player selection value and styling icons
class PlayerChoice {
  constructor(computer, result, reset) {
    this.computer = computer;
    this.result = result;
    this.reset = reset;
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

  // Display Choice
  _displayChoice(choice, title, choiceEl) {
    // Add 'selected' styling & computerChoice
    choice.classList.add('selected');
    choiceEl.textContent = ` --- ${title}`;
  }

  _addEvent() {
    this._playerChoicesArray.forEach((playerChoice) => {
      playerChoice.addEventListener('click', () => {
        // reset styles
        console.log(this);
        this.reset.resetSelected();

        // Add 'selected' styling & playerChoice
        const playerTitle = playerChoice.getAttribute('title');
        this._displayChoice(playerChoice, playerTitle, playerChoiceEl);

        // Add 'selected' styling & computerChoice
        const computerChoice = this.computer.getComputerChoice();
        const computerTitle = computerChoice.getAttribute('title');
        this._displayChoice(computerChoice, computerTitle, computerChoiceEl);

        // Display Result
        this.result.updateScore(playerTitle.toLowerCase(), computerTitle.toLowerCase());
      });
    });
  }
}
