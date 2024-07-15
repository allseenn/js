// 01
// 1. В html создать кнопку button
// 2. После загрузки страницы вывести в консоль текст 
// “страница загрузилась”
// 3. Добавить событие onclick которое выводит в консоль 
// текст “событие onclick”
// 4. Добавить событие addEventListener которое выводит в 
// консоль текст “событие addEventListener”
// const body = document.querySelector('body');
// body.insertAdjacentHTML('afterbegin', '<button>Кнопка</button>');
// const button = document.querySelector('button');
// window.onload = () => console.log('страница загрузилась');
// button.addEventListener('click', () => console.log('событие onclick'));
// button.onclick = () => console.log('событие addEventListener');
// 02
// 1. Создать в html три кнопки button с нумерацией (1, 2, 3 
// соответственно)
// 2. Добавить клик на кнопку , чтобы в консоль выводилась именно та 
// кнопка на которую мы нажали
// 3. Добавить кнопку button с текстом 4, которая считает сколько раз на 
// нее нажали и количество нажатий на эту кнопку выводит в консоль
// 4. Создать кнопку button с текстом 5, При клике на которую, меняется 
// текст данной кнопки на “Вы нажали на эту кнопку”
// const body = document.querySelector('body');

// for (let i = 0; i < 4; i++) {
//     body.insertAdjacentHTML('afterbegin', `<button>Кнопка ${i}</button>`);
    
// }

// body.addEventListener('click', (e) => {
//     if(e.target.nodName === 'BUTTON') {
//         console.log(`Кнопка ${e.target.textContent}`);
//     }
// })

// body.insertAdjacentHTML('afterbegin', `<button class="button">Кнопка 4</button>`);
// const button = document.querySelector('.button');
// let count = 0;
// button.addEventListener('click', () => {
//     count++;
//     button.textContent = `Вы нажали на эту кнопку ${count} раз`;
// })
//03
// 1. Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый 
// заголовок, данный элемент нужно расположить после кнопки
// 2. Создать вторую кнопку, которая будет удалять созданный заголовок 
// h1
// 3. Создать третью кнопку, при наведении на которую в консоль будет 
// выводиться текст “вы навели на данную кнопку” , как только вы 
// убираем курсор мыши с кнопки, в консоли должен появиться текст 
// “Наведения на кнопку больше нет”
// const button = document.createElement('button');
// button.textContent = 'кнопка';
// document.body.appendChild(button);
// button.addEventListener('click', () => {
//     const h1 = document.createElement('h1');
//     h1.textContent = 'Новый заголовок';
//     button.insertAdjacentElement('afterend', h1);
// })
// const button2 = document.createElement('button');
// button2.textContent = 'кнопка2';
// document.body.appendChild(button2);
// button2.addEventListener('click', () => {
//     document.querySelector('h1').remove();
// })

// const button3 = document.createElement('button');
// button3.textContent = 'кнопка3';
// document.body.appendChild(button3);
// button3.addEventListener('mouseover', () => {
//     console.log('вы навели на данную кнопку');
// })
// button3.addEventListener('mouseout', () => {
//     console.log('Наведения на кнопку больше нет');
// })
// 04
// 1. Создать в html список состоящий из 3-х произвольных элементов li
// 2. Нужно создать кнопку которая будет добавлять элементы списка с 
// текстом “новый элемент списка”
// 3. Создать кнопку, которая будет удалять первый элемент из 
// созданного списка
// 4. Создать кнопку, при клике на которую ей добавляется класс “click”
const body = document.querySelector("body");
const ol = document.querySelector('ol')
const btn = document.createElement('button')
btn.innerText = 'Кнопка'
ol.insertAdjacentElement('afterend', btn)
btn.addEventListener('click', ()=>{
    ol.insertAdjacentHTML('beforeend','<li>Новый элемент списка</li>')
})
const btn2 = document.createElement('button')
btn2.innerText = 'Кнопка 2'
ol.insertAdjacentElement('afterend', btn2)
btn2.addEventListener('click', ()=>{
    ol.removeChild(ol.firstElementChild);
})

const btn3 = document.createElement('button')
btn3.innerText = 'Кнопка 3'
ol.insertAdjacentElement('afterend', btn3)
btn3.addEventListener('click', ()=>{
    btn3.classList.add("click");
})