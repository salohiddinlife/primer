function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minRange = +prompt('Введите минимальное значение диапазона');
const maxRange = +prompt('Введите максимальное значение диапазона');

if (isNaN(minRange) || isNaN(maxRange) || minRange >= maxRange) {
  alert('Пожалуйста, введите корректные значения для диапазона.');
} else {
  for (let i = 0; i < 5; i++) {
    const num1 = getRandomNumber(minRange, maxRange);
    const num2 = getRandomNumber(minRange, maxRange);
    const correctAnswer = num1 + num2;
    const userAnswer = +prompt(num1 + ' + ' + num2 + ' = ');

    if (userAnswer === correctAnswer) {
      alert(num1 + ' + ' + num2 + ' = ' + userAnswer + '. Ваш ответ ' + userAnswer + ' Молодец');
    } else {
      alert(num1 + ' + ' + num2 + ' = ' + correctAnswer + '. Ваш ответ ' + userAnswer + ' Ошибка');
    }
  }
}
