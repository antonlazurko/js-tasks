//task1
//Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.
// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {
//     return Array.from(vegetables);
// }
// const arr1 = arrayClone(vegetables);
// console.log(vegetables);
// console.log(arr1); // ['Капуста', 'Репа', 'Редиска', 'Морковка']
//task2
//Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.Элементы массива будут разделены запятой.Получите результат двумя разными методами.

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let string = '';
// const str = function (array) {
//     //variant1
//     for (const word of array) {
//         string += `${word}, `;
//     }
//     return string.slice(0, -2);
//     //variant2
//     //return array.join(', ');
// };
// const str1 = str(vegetables);
// const str2 = str(vegetables);

// console.log(str1); // "Капуста, Репа, Редиска, Морковка"
// console.log(str2); // "Капуста, Репа, Редиска, Морковка"

//task3
//Пользователь вводит многозначное число через promt.Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие(: ) между двумя нечетными числами.Например, если вводится число 55639217, то на выход должно быть 5: 563: 921: 7.

// const num = prompt('Введите число', 5558);
// function colonOdd(num) {
//     let str = num.split('');
//     let result = [str[0]];
//     for (let i = 1; i < str.length; i += 1) {
//         if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
//             result.push(':', str[i]);
//         } else {
//             result.push(str[i]);
//         }
//     }
//     return result.join('');
// }
// console.log(colonOdd(num));
