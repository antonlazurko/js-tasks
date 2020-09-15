const amountItems = document.querySelectorAll('.item');
console.log(`В списке ${amountItems.length} категории.`);
document
    .querySelectorAll('.item h2')
    .forEach(text => console.log(`Категория: ${text.textContent}`));
const makeCtegoryList = document.querySelectorAll('.item ul');
makeCtegoryList.forEach(el =>
    console.log(`Количество элементов: ${el.children.length}`),
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
let item = '';
const ingredientsList = document.querySelector('#ingredients');
const list = ingredients.map(option => {
    item = document.createElement('li');
    item.textContent = option;
    ingredientsList.style.listStyle = 'none';
    return item;
});
ingredientsList.append(...list);
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
let imgItem = '';
const imageArray = images.map(option => {
    imgItem = document.createElement('li');
    imgItem.style.display = 'block';
    imgItem.style.marginLeft = '15px';
    imagesList.style.display = 'flex';
    imgItem.insertAdjacentHTML(
        'afterbegin',
        `<img src="${option.url}" alt="${option.alt}" width="50" height="50">`,
    );
    return imgItem;
});
imagesList.append(...imageArray);
console.log(imagesList);
//-------------------------------3
