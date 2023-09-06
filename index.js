const name = prompt('Введите ваше имя');
const dob = +prompt('Введите вашу дату рождения');
const currentYear = new Date().getFullYear();

if (isNaN(dob) || dob > currentYear) {
  do {
    dob
  } while (isNaN(dob) || dob > currentYear);
} else {
  const age = currentYear - dob;
  console.log('Меня зовут ' + name + ', мне ' + age + ' лет.');
}

var num = +prompt('Сколько примеров вы хотите решить?');

if (isNaN(num)) {
  alert('Пожалуйста, введите корректное число.');
} else {
  for (var i = 0; i < num; i++) {
    var num1 = Math.floor(Math.random() * 10) + 1; 
    var num2 = Math.floor(Math.random() * 10) + 1; 
    var operators = ['+', '-', '*', '/'];
    var operator = operators[Math.floor(Math.random() * operators.length)]; 

    var question = num1 + ' ' + operator + ' ' + num2;
    var userAnswer = +prompt('Решите пример: ' + question);
    var answer;

    switch (operator) {
      case '+':
        answer = num1 + num2;
        break;
      case '-':
        answer = num1 - num2;
        break;
      case '*':
        answer = num1 * num2;
        break;
      case '/':
        answer = num1 / num2;
        break;
      default:
        answer = NaN;
        break;
    }

    if (userAnswer === answer) {
      console.log('Ваш ответ верный: ' + userAnswer);
    } else {
      console.log('Ваш ответ неверный: ' + userAnswer + ' Правильный ответ: ' + answer);
    }
  }
}
