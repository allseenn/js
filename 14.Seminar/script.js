// const input = document.querySelector('input');
// const btn = document.querySelector('.btn');
// let h1 = document.querySelector('h1');

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   if (input.value.trim() === '') {
//     if (!h1) {
//       h1 = document.createElement('h1');
//       input.parentElement.insertAdjacentElement('afterend', h1);
//     }
//     h1.textContent = 'Вы не заполнили поле ввода';
//     input.style.border = '4px solid red';
//   } else {
//     if (h1) {
//       h1.remove();
//       input.style.border = '1px solid black';
//     }
//   }
// });

// const div = document.querySelector('.block');
// const item = document.createElement('div');
// div.appendChild(item);
// item.textContent = 'Элемент внутри';
// item.style.color = 'blue';
// item.style.border = '1px solid black';
// item.style.backgroundColor = '#f8f8f8';
// item.style.padding = '16px';
// item.setAttribute('class', 'item1');

// 1. Дан код
// <div class="elem">
// <img src="photo.png" alt="photo">
// <div class="content">
// <h2 class="heading">Lorem, ipsum dolor.</h2>
// <p class="text">Lorem ipsum, dolor sit amet consectetur
// adipisicing elit. Recusandae, ea!</p>
// </div>
// </div>
// Необходимо с помощью querySelector найти параграф с
// классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem
// const p = document.querySelector('.text');
// console.log(p.previousElementSibling);
// console.log(p.parentNode);
// console.log(p.parentElement.previousElementSibling);
// console.log(p.parentElement.parentElement);

// Задание 3 (тайминг 20 минут)
// <div class="item">
// <div class="elem">
// <div class="info">
// <h2 class="subtitle">Lorem, ipsum dolor.</h2>
// </div>
// </div>
// </div>
// С помощью querySelector найти элемент h2 и вывести в
// консоль всех его родителей
// const h2 = document.querySelector('.subtitle');
// console.log(h2.parentElement);
// console.log(h2.parentElement.parentElement);
// console.log(h2.parentElement.parentElement.parentElement);

// Задание 4 (тайминг 25 минут)
// <form action="#">
// <input type="text">
// <button class="btn">Отправить</button>
// </form>
// 1. Дано поле ввода и кнопка отправить, необходим
// реализовать функционал, если пользователь нажимает на
// кнопку отправить, а поле ввода пустое, то под полем ввода
// и кнопкой должен появиться заголовок h2 с текстом вы не
// заполнили поле ввода
// 2. Цвет у рамки сделать красным
const x = document.querySelector('.btn');
const y = document.querySelector('input');
const form = document.querySelector('form');
let h2;
form.addEventListener('click', (e) => {
    if (y.value.trim() === '') {
        e.preventDefault();
        if(!h2) {
        h2 = document.createElement('h2');
        h2.textContent = 'Вы не заполнили поле ввода';
        y.after(h2);
        }
        y.style.border = '4px solid red';

    } else {
        if (h2) {
            h2.remove();
            h2 = null;
        }
        y.style.border = '1px solid black';
        form.submit();
        form.reset();
    }
});