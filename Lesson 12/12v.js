function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}
document.querySelector('.js-reset-score-button')
  .addEventListener('click', () => {
    resetScore();
  });