//--------------MODULE 1
//--------------task #1
// const name = '«Генератор защитного поля»';
// let price = 1000;
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
// price = 2000;
// secondMessage = `'Выбран' ${name}, 'цена за штуку' ${price} кредитов`;

// console.log(firstMessage);

// console.log(secondMessage);
//-------------task#2
// const invoice = 100;
// const stock = 100;

// const message =
//   invoice > stock
//     ? 'Заказ оформлен, с вами свяжется менеджер'
//     : 'На складе недостаточно товаров!';

// console.log(message);
//-------------task#3
// const userPassword = 'jqueryismyjam';
// const ADMIN_PASSWORD = 'jqueryismyjam';
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;
// if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else if (userPassword !== ADMIN_PASSWORD) {
//   message = ACCESS_DENIED;
// } else if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// }
// console.log(message);
//--------------task#4
// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice; // Write code in this line
// let balanceСredit; // Write code in this line
// let message;
// if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else if (orderPieces === 0) {
//   balanceСredit = credits - pricePerDroid * orderPieces;
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceСredit} кредитов`;
// } else if (orderPieces === 1) {
//   balanceСredit = credits - pricePerDroid * orderPieces;
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceСredit} кредитов`;
// } else if (orderPieces === 4) {
//   balanceСredit = credits - pricePerDroid * orderPieces;
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceСredit} кредитов`;
// } else if (orderPieces === 7) {
//   balanceСredit = credits - pricePerDroid * orderPieces;
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceСredit} кредитов`;
// } else if (orderPieces === 8) {
//   message = ACCESS_DENIED;
// } else if (orderPieces === 12) {
//   message = ACCESS_DENIED;
// }
// console.log(message);
//---------------task#5
// const countryName = 'КитаЙ';
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//     message = CANCELED_BY_USER;
// } else {
//     country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
//     switch (country) {
//         case INDIA:
//             price = 80;
//             break;
//         case CHINA:
//             price = 100;
//             break;
//         case JAMAICA:
//             price = 120;
//             break;
//         case AUSTRALIA:
//             price = 170;
//             break;
//         default:
//             message = NO_DELIVERY;
//     }
// }
// if (price > 0) {
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }
// console.log(message);
//------------task6
// console.log('ABC'.charCodeAt(0));
// const source = 'Привет';
// let messege;
// for (let i = 0; i <= source.length; i += 1) {
//     let unicode = source.charCodeAt(i);

//     messege = `${i}: ${unicode}`;
// }
// console.log(messege);
//-----------------------MODULE 2
//-----------------------task1
// const getItemsString1 = function (array) {
//     let result = '';

//     for (let i = 0; i < array.length; i += 1) {
//         result += `${i + 1} - ${array[i]}\n`;
//     }
//     return result;
// };
// console.log(getItemsString1(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
//-----------------------task2
//1 привести строку в массив
//2 посчитать длину массива
//3 перемножить длину на стоимость одного слова
// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//     pricePerWord * message.split(' ').length;

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         10,
//     ),
// );
//-----------------------task3
//1- привести строку в массив
//2- пройтись по массиву
//3- найти большее по длине слово
//4- вернуть это слово
// function findLongestWord(string = '') {
//     let array = string.split(' ');
//     console.log(array);
//     let bigestWord = '';
//     for (const word of array) {
//         if (bigestWord.length < word.length) {
//             bigestWord = word;
//         }
//     }
//     return bigestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'
//-----------------------task4
// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.
//1- проверяем длину строки
//2- с помощью тернарника вырезаем из строки нужное количество слов и присваиваем другой переменной ил оставляем как есть
// function formatString(string, maxLength = 40) {
//     let currentString =
//         maxLength <= string.length
//             ? `${string.slice(0, maxLength)}...`
//             : string;
//     return currentString;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'
// const maxLength = 40;
