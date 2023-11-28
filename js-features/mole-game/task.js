document.addEventListener('DOMContentLoaded', () => {
  const holes = document.getElementsByClassName('hole');
  const scoreElem = document.getElementById('dead');
  const missesElem = document.getElementById('lost');
  let score = 0;
  let misses = 0;
  const getHole = (index) => document.getElementById(`hole${index}`);
  const handleClick = (event) => {
    const hole = event.target;
    if (hole.classList.contains('hole_has-mole')) {
      score++;
      hole.classList.remove('hole_has-mole');
      scoreElem.textContent = score;
      if (score === 10) {
        alert('Вы выиграли!');
        resetGame();
      }
    } else {
      misses++;
      missesElem.textContent = misses;
      if (misses === 5) {
        alert('Вы проиграли!');
        resetGame();
      }
    }
  };
  for (let i = 1; i <= holes.length; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', handleClick);
  }
  const resetGame = () => {
    score = 0;
    misses = 0;
    scoreElem.textContent = score;
    missesElem.textContent = misses;
    for (let i = 1; i <= holes.length; i++) {
      const hole = getHole(i);
      hole.classList.add('hole_has-mole');
    }
  };

});