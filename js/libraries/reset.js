class Reset {
  constructor() {
    this._init();
  }

  _init() {
    this._addEvent();
  }

  // Reset all 'selected' icons
  resetSelected() {
    const allGameIcons = document.querySelectorAll('.far');

    allGameIcons.forEach((icon) => {
      icon.classList.remove('selected');
    });
    stopConfetti();
    removeConfetti();
  }

  // Reset score & playerChoice/computerChoice
  resetAll() {
    // Reset Css and Animation
    this.resetSelected();
    // Reset Score
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber;
    computerScoreEl.textContent = computerScoreNumber;
    // Reset Text
    playerChoiceEl.textContent = '';
    computerChoiceEl.textContent = '';
    resultText.textContent = '';
  }

  _addEvent() {
    const resetIcon = document.querySelector('.reset-icon');
    resetIcon.addEventListener('click', () => this.resetAll());
  }
}
