//-----------------------task1
//CRUD для свойств объекта
// С - create(создать)
// R - read(читать)
// U - update(обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ: значение
// c переносом строки('\n')

// let message = '';
// const user = {
//     age: 20,
//     hobby: 'html',
//     name: 'Mango',
//     premium: true,
// };
// user.mood = 'happy';
// user['full time'] = true;
// user['hobby'] = 'skydiving';
// user['premium'] = false;
// for (const element in user) {
//     message += `${element}: ${user[element]}\n`;
// }
// const keys = Object.keys(user);
// for (const key of keys) {
// }
// console.log(message);

//-----------------------task2

// const countProps = function (obj) {
//     'use strict';
//     return Object.keys(obj).length;
// };
// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 }));

//-----------------------task3
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".
// const findBestEmployee = function (employees) {
//     'use strict';
//       const entries = Object.entries(employees);

//     if (entries.length !== 0) {
//         let bestEmployee = entries[0];
//         for (const employee of entries) {
//             if (employee[1] > bestEmployee[1]) {
//                 bestEmployee = employee;
//             }
//         }
//         return bestEmployee[0];
//     }
//     return '';
// };
// const developers = {
//     // ann: 29,
//     // david: 35,
//     // helen: 1,
//     // lorence: 99,
// };
// console.log(findBestEmployee(developers));

//-----------------------task4
// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму зарплаты работников и возвращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".
// const countTotalSalary = function (employees) {
//     'use strict';
//     const totalSalary = Object.values(employees);
//     let countTotalSalary = 0;
//     for (let salary of totalSalary) {
//         countTotalSalary += salary;
//     }
//     return countTotalSalary;
// };

// // Объекты и ожидаемый результат
// const developers = {
//     mango: 300,
//     poly: 250,
//     alfred: 450,
// };
// console.log(countTotalSalary(developers));

//-----------------------task5
// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.
// function getAllPropValues(array, prop) {
//     'use strict';
//     let allPropValue = [];
//     for (const value of array) {
//         if (prop in value) {
//             allPropValue.push(value[prop]);
//             continue;
//         }
//         return allPropValue;
//     }
//     return allPropValue;
// }
// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват'];
// console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2];

// console.log(getAllPropValues(products, 'category'));
// [];
//-----------------------task6
// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта(значение свойства name).Возвращает общую стоимость продукта(цена умноженная на количество).
// function calculateTotalPrice(array, prop) {
//     'use strict';
//     let totalPrice = 0;
//     if (array.length === 0) {
//         return totalPrice;
//     }
//     for (const obj of array) {
//         if (obj.name === prop) {
//             totalPrice += obj.price * obj.quantity;
//             continue;
//         }
//     }
//     return totalPrice;
// }

// // Объекты и ожидаемый результат
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Радар', price: 1280, quantity: 2 },
//     { name: 'Радар', price: 1320, quantity: 1 },
//     { name: 'Сканер', price: 2700, quantity: 1 },
//     { name: 'Сканер', price: 2500, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(products, 'Радар'));
// // 9080
// console.log(calculateTotalPrice(products, 'Сканер'));
// // // 10200

// console.log(calculateTotalPrice(products, 'Захват'));
// // // 2400

// console.log(calculateTotalPrice(products, 'Дроид'));
// // // 2800
