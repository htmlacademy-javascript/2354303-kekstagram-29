/*
Функция для проверки длины строки. Она принимает строку,
которую нужно проверить, и максимальную длину и возвращает true,
если строка меньше или равна указанной длине, и false, если строка длиннее.
*/

const checkLength = (str, maxLength) => str.lenght <= maxLength;
checkLength('проверяемая строка', 20);


/*
Функция для проверки, является ли строка палиндромом.
Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево
*/

const checkPalindrom = (str) => {
  if (str && str === 0) {
    return true;
  }
  let parametr = '';
  str = str.replaceAll(' ', '').toLowerCase();
  for (let i = str.length - 1; i >= 0; i--) {
    parametr += str[i];
  }
  /*
    [...str].rewerse
    return [...str].rewerse.join('')===str;
    */
  return parametr === str;
};
checkPalindrom('Лёша на полке клопа нашёл');

/*
Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN:
*/

const createNumber = (str) => {
  if (str && str.lenght === 0) {
    return NaN;
  }
  /* const string = str.toString();
  const number = string.match(/\d+/g);
*/
  return parseInt(str.replace(/\D+/g,''), 10);

  //return (number === 0) ? NaN : Number(number.toString().replaceAll(',', ''));
};
createNumber('1 кефир, 0.5 батона');


/* Функция рандома
  возвращает случайное число в диапазоне
*/
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
export {getRandomInteger};
