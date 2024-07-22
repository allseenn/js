const div = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(div);
let parseData = JSON.parse(data);
console.log(parseData);
parseData.message.forEach(element => {
    div.insertAdjacentHTML('beforeend', `
    <figure>
    <img src=${element} alt="Elephant at sunset" />
    <figcaption>An elephant at sunset</figcaption>
    </figure>
`)
});
let url = 'https://jsonplaceholder.typicode.com/users'
async function getData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

let myData;

try {
    myData = await getData(url);
    console.log(myData);
    myData.forEach(element => {
        div.insertAdjacentHTML('beforeend', `
            <h3>${element.name}</h3>
            <p>${element.email}</p>
        `)
    });
} catch (error) {
    console.log(error.message);
}