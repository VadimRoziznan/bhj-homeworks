const numberToGuess = Math.round(Math.random());

const userAnswer = +prompt("Введите нуль или единицу"); //приводит к числу

if (isNaN(userAnswer) || (![0, 1].includes(userAnswer))) {
    console.log("Вы ввели не подходящее значение!");
} else if (userAnswer === numberToGuess) {
    console.log("Угадали!");
} else {
    console.log("Не угадали!");
}

