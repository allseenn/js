// 01
// 1. В html создать элемент checkbox и текст рядом с ним 
// “Согласен с условиями”
// 2. Добавить кнопку отправить
// 3. При клике на кнопку отправить нужно проверять выбран 
// ли активным элемент checkbox
// 4. Если элемент не выбран, добавить текст под чекбоксом 
// “Необходимо согласиться с условиями”
// const input = document.querySelector('input');
// const button = document.querySelector('button');
// const form = document.querySelector('form');
// let error = false;
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (!input.checked && !error) {
//         const p = document.createElement('p');
//         p.textContent = 'Необходимо согласиться с условиями';
//         button.insertAdjacentElement('afterend',p);
//         error = true;
//     } else if(input.checked) {
//         form.submit();
//     }
// })

// 02
// 1. В html создать 2 элемента радио кнопки (input 
// type=”radio”) и текст “Чай”, “Кофе” соответственно
// 2. Кнопка отправить
// 3. Если выбран чай, необходимо вывести сообщение “Чай 
// закончился”
// 4. Если выбран кофе, необходимо вывести соообщение 
// “кофе закончился”
// const button = document.querySelector('button');
// const radio = document.querySelectorAll('input');
// button.addEventListener('click', (e) => {
//     const p = document.createElement('p');
//     e.preventDefault();
//     if(radio[0].checked) {
//         p.textContent = 'Кофе закончился';
//         button.insertAdjacentElement('afterend',p);
//     } else if(radio[1].checked) {
//         p.textContent = 'Чай закончился';
//         button.insertAdjacentElement('afterend',p);
//     }
// });

//03
// 1. Создать поле ввода (пароль)
// 2. Кнопка отправить
// 3. Если пользователь вводит текст “пароль” то поле ввода должно 
// быть подсвечено зеленым цветом
// 4. Если пароль неверный, у поля ввода появляется красная обводка и 
// текст “пароль неверный”
// const input = document.querySelector('input');
// const button = document.querySelector('button');
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     if(input.value === '12345') {
//        input.style.border = '2px solid green';

//     } else {
//        input.style.border = '2px solid red';
//        input.value = '';
//        input.placeholder = 'Пароль неверный';
//     }
// })

//04
// 1. Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// 2. При вводе текста в поле ввода необходимо чтобы текст внутри 
// заголовка менятся на введенный в поле ввода
const input = document.querySelector('input');
const h1  = document.querySelector('h1');
input.addEventListener('input', (e) => {
    h1.textContent = e.target.value;
})