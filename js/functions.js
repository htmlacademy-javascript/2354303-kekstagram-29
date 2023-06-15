const checkLength = (str, maxLength) => str.lenght <= maxLength;
checkLength('проверяемая строка', 20);

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
