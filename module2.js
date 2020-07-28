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
//-----------------------task5
// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку. Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true, если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.
//1- приводим строку к нижнему регистру
//2- с помощью тернарника ищем слова и выводим
// function checkForSpam(str) {
//     let message =
//         str.toLowerCase().includes('sale') || str.toLowerCase().includes('spam')
//             ? true
//             : false;
//     return message;
// }
// console.log(checkForSpam('Get best sale offers now!')); // true
//-----------------------task6
// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел. Функция создает новый массив numbers размером в длину массива array и заполняет его числами из массива array умноженными на 10. Для перебора массива и добавления новых значений используй цикл for. По завершению перебора массива array возвращается массив numbers.
// 1- читаем начальный массив
// 2- присваеваем значения старого массива новому
//function mapArray(array) {
//     const numbers = new Array(array.length);
//     for (let i = 0; i < array.length; i += 1) {
//         numbers[i] = array[i] * 10;
//     }
//     return numbers;
// }
// console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//-----------------------task7
// Создание нового массива на основе отбора из исходного массива
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив. Функция проверяет каждое значение массива - является ли значение конечным числом (Number.isFinite). Для проверки используй цикл for. Числа добавляются в новый массив numbers с помощью метода push, а не числа - игнорируются. По завершению проверки массива array возвращается массив numbers.
//1 - проверяем является ли число конечным
//2 - если конечное - записываем
// function filterArray(array) {
//     const numbers = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (Number.isFinite(array[i])) {
//             numbers.push(array[i]);
//         }
//     }
//     return numbers;
// }
// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]
//-----------------------task8
// Вычисление суммы массива
// Напиши функцию reduceArray(array), которая принимает числовой массив array.Если массив array не пустой, необходимо посчитать сумму всех элементов массива, используя цикл for.Для подсчета суммы используй переменную total.Функция должна возвращать 0 если массив пустой и значение total в противном случае.
// 1- читаем массив
// 2- проверяем пустой или нет, суммируем или ноль
// function reduceArray(array) {
//     let total = 0;
//     for (const number of array) {
//         total = 0 <= array.length ? (total += number) : 0;
//     }
//     return total;
// }
// console.log(reduceArray([1, 2, 3]));
// 6
