const amountItems = document.querySelectorAll('.item');
console.log(`В списке ${amountItems.length} категории.`);
const itemList = document.querySelectorAll('.item');
itemList.forEach(el =>
    console.log(
        `Категория: ${el.children[0].textContent}\nКоличество элементов: ${el.children[1].children.length}`,
    ),
);
//---------------------------------------------1
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
let itemEl = '';
const ingredientsList = document.querySelector('#ingredients');
const ingredientsArray = ingredients.map(option => {
    itemEl = document.createElement('li');
    itemEl.textContent = option;
    return itemEl;
});
ingredientsList.append(...ingredientsArray);
console.log(ingredientsList);
//-------------------------------2
const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
const imagesList = document.querySelector('#gallery');
const imageArray = images.map(option => {
    let imgEl = document.createElement('li');
    imgEl.classList.add('gallary__item');
    imgEl.insertAdjacentHTML(
        'afterbegin',
        `<img src="${option.url}" alt="${option.alt}" >`,
    );
    return imgEl;
});
imagesList.append(...imageArray);
console.log(imagesList);
//-------------------------------3
const counter = {
    counterValue: 0,
    increment() {
        this.counterValue += 1;
    },
    decrement() {
        this.counterValue -= 1;
    },
};
const incrementBtn = document.querySelector(
    '#counter button[data-action="increment"]',
);
const decrementBtn = document.querySelector(
    '#counter button[data-action="decrement"]',
);
const valueEl = document.querySelector('#value');

incrementBtn.addEventListener('click', function () {
    counter.increment();
    valueEl.textContent = counter.counterValue;
});
decrementBtn.addEventListener('click', function () {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
});
//-------------------------------4
const inputText = document.querySelector('#name-input');
const outputTextContent = document.querySelector('#name-output');
console.log(inputText);
console.log(outputTextContent.textContent);
inputText.addEventListener('input', takeInputText);
function takeInputText(event) {
    outputTextContent.textContent = event.currentTarget.value;
}
//--------------------------------5;
