//----------------task1
// function-constructor
// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.

// В prototype функции - конструктора добавь метод getInfo(), который возвращает строку со значениями свойств login и email объекта.
// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };
// Account.prototype.getInfo = function () {
//     return `login : ${this.login}, email : ${this.email}`;
// };
// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

//----------------task2
// class
//     Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers
// class User {
//     constructor(name, age, followers) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
// }
// User.prototype.getInfo = function () {
//     return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
// };
// console.log(typeof User);
// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo());
// console.log(mango);

//----------------task3
// использование методов класса
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         this.items.push(item);
//     }
//     removeItem(item) {
//         if (this.items.includes(item)) {
//             this.items.splice(1, this.items.indexOf(item));
//         }
//     }
// }
// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];
// const storage = new Storage(goods);

// console.log(storage.getItems());
// console.log(storage);
// storage.addItem('Дроид');
// console.log(storage.getItems());
// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
