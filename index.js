//--------------task #1
const name = '«Генератор защитного поля»';
let price = 1000;
const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`;
price = 2000;
secondMessage = `'Выбран' ${name}, 'цена за штуку' ${price} кредитов`;

console.log(firstMessage);

console.log(secondMessage);
//-------------task#2
const invoice = 100;
const stock = 100;

const message =
  stock <= invoice
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';

console.log(message);

let cost;
const subscription = 'premium';

switch (subscription) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(cost);
//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'
