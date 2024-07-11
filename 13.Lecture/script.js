// const content = document.querySelector('.content');

// const h1El = document.createElement('h1');
// h1El.textContent = 'H1 element';
//h1El.style.backgroundColor = "#ccc";
//h1El.style.textAlign = "center";
// h1El.setAttribute('class', 'heading');

// const imgEl = document.createElement('img');
// imgEl.src = 'photo.jpg';
// imgEl.alt = 'photo';
// imgEl.setAttribute('alt', 'photo');

// content.appendChild(h1El);
// content.appendChild(img);

const liEl = document.querySelectorAll('.menu__list');
console.log(liEl);
const liElone = document.querySelector('.menu__list');
console.log(liElone.parentNode.children);
const linkEl = document.querySelector('.menu__link');
console.log(linkEl.childNodes);
const menuEl = document.querySelector('.menu');
// console.log(menuEl.children);
// console.log(menuEl.childNodes);
menuEl.childNodes.forEach(element => {
    console.log(element);
});
