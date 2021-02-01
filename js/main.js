const playerChoiceEl = document.querySelector('#playerChoice');
const computerChoiceEl = document.querySelector('#computerChoice');
const playerScoreEl = document.querySelector('#playerScore');
const computerScoreEl = document.querySelector('#computerScore');
const resultText = document.querySelector('#resultText');

let playerScoreNumber = 0;
let computerScoreNumber = 0;

document.addEventListener('DOMContentLoaded', () => {
  new Main();
});

class Main {
  constructor() {
    this.reset = new Reset();
    this.computer = new ComputerChoice();
    this.result = new ShowResult();
    this.player = new PlayerChoice(this.computer, this.result, this.reset);
    this._init();
  }

  _init() {
    this.reset.resetAll();
  }
}
