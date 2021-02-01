class ShowResult {
  _choices() {
    const choices = {
      rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
      paper: { name: 'Paper', defeats: ['rock', 'spock'] },
      scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
      lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
      spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
    };
    return choices;
  }

  _displayWon() {
    resultText.textContent = 'You Won!';
    playerScoreNumber++;
    playerScoreEl.textContent = playerScoreNumber;
    startConfetti();
  }

  _displayLose() {
    resultText.textContent = 'Your Lost!';
    computerScoreNumber++;
    computerScoreEl.textContent = computerScoreNumber;
  }

  // Check result, increase scores, update resultText
  updateScore(playerChoice, computerChoice) {
    const choices = this._choices();
    const choice = choices[playerChoice];

    playerChoice === computerChoice
      ? (resultText.textContent = "It's a tie.")
      : choice.defeats.indexOf(computerChoice) > -1
      ? this._displayWon()
      : this._displayLose();
  }
}
