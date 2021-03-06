// Passing computer selection value and styling icons
class ComputerChoice {
  constructor() {
    this._computerChoicesArray = this._computerChoicesArray();
  }

  _computerChoicesArray() {
    const computerRock = document.querySelector('#computerRock');
    const computerPaper = document.querySelector('#computerPaper');
    const computerScissors = document.querySelector('#computerScissors');
    const computerLizard = document.querySelector('#computerLizard');
    const computerSpock = document.querySelector('#computerSpock');
    const computerChoicesArray = [
      computerRock,
      computerPaper,
      computerScissors,
      computerLizard,
      computerSpock,
    ];
    return computerChoicesArray;
  }

  _getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // Random computer choice
  _computerRandomChoice() {
    const randomNumber = this._getRandomInt(4);
    const computerChoice = this._computerChoicesArray[randomNumber];
    return computerChoice;
  }

  getComputerChoice() {
    const computerChoice = this._computerRandomChoice();
    return computerChoice;
  }
}
