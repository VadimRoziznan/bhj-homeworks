// Добавляем обработчик события для полной загрузки документа
document.addEventListener('DOMContentLoaded', () => {

  // Получаем все элементы с классом "hole"
  const holes = document.getElementsByClassName('hole');

  // Получаем элементы "score" и "misses" по их идентификаторам
  const scoreElem = document.getElementById('dead');
  const missesElem = document.getElementById('lost');

  // Инициализируем переменные score и misses
  let score = 0;
  let misses = 0;

  // Функция, которая получает элемент лунки по индексу
  const getHole = (index) => document.getElementById(`hole${index}`);

  // Функция, вызываемая при клике на лунку
  const handleClick = (event) => {
    // Получаем цель события (элемент, на котором произошло событие)
    const hole = event.target;

    // Проверяем, содержит ли лунка класс "hole_has-mole"
    if (hole.classList.contains('hole_has-mole')) {
      score++; // Увеличиваем счет
      hole.classList.remove('hole_has-mole'); // Удаляем класс "hole_has-mole" у лунки
      scoreElem.textContent = score; // Обновляем текстовое содержимое элемента "scoreElem"

      // Если набрано 10 очков, выводим сообщение о выигрыше и сбрасываем игру
      if (score === 10) {
        alert('Вы выиграли!');
        resetGame();
      }
    } else {
      misses++; // Увеличиваем количество промахов
      missesElem.textContent = misses; // Обновляем текстовое содержимое элемента "missesElem"

      // Если набрано 5 промахов, выводим сообщение о проигрыше и сбрасываем игру
      if (misses === 5) {
        alert('Вы проиграли!');
        resetGame();
      }
    }
  };

  // Регистрируем обработчики кликов для каждой лунки
  for (let i = 1; i <= holes.length; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', handleClick);
  }

  // Функция для сброса игры
  const resetGame = () => {
    score = 0; // Сбрасываем счет
    misses = 0; // Сбрасываем количество промахов
    scoreElem.textContent = score; // Обновляем текстовое содержимое элемента "scoreElem"
    missesElem.textContent = misses; // Обновляем текстовое содержимое элемента "missesElem"

    // Восстанавливаем все лунки с классом "hole_has-mole"
    for (let i = 1; i <= holes.length; i++) {
      const hole = getHole(i);
      hole.classList.add('hole_has-mole');
    }
  };

});



