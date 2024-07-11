/* <div id="block">
	<p>1</p>
	<p>2</p>
</div>
Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> */

// const block = document.querySelector('#block p');
// console.log(block);

// const www = document.querySelectorAll('.www')[0];
// console.log(www);

// 02
// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
// const link = document.querySelector('.link');
// link.textContent = 'link text js';
// link.href = 'https://developer.mozilla.org/ru/';
// console.log(link);

// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
// const photo = document.querySelector('.photo');
// photo.src = 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/82/98/76/829876a9-81e0-d57a-9a7f-79fc4b68703e/AppIcon-85-220-4-2x.png/1200x630bb.png';

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// const p = document.createElement('p');
// p.textContent = 'Новый текстовый элемент';
// const div = document.querySelector('.content');
// div.appendChild(p);
// //div.removeChild(p);
// p.remove();
//04
// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const div = document.querySelector('.content');
// const button = document.createElement('button');
// button.textContent = 'Кнопка';
// div.appendChild(button);
// button.addEventListener('click', () => {
//     console.log('Кнопка нажата');
// })
// let count = 0;
// button.onclick = () => {
//     count++;
//     console.log(count);
// }
// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
const div = document.querySelector('.content');
const button = document.createElement('button');
button.textContent = 'Кнопка';
div.appendChild(button);
button.onclick = () => {
    button.textContent = 'Текст отправлен';
}