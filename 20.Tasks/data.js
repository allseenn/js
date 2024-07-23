// То, чем интересовался на семинаре:
// Поиск достопримечательностей, объектов или адресов, например в промпте вводим: Кремль
// Запрос отправляется к API openstreetmap.org
// В JSON ответе myData - содержится информация, включая GPS координаты, описание и рейтинг
// Т.к. Кремль есть в нескольких городах России, то отобразится несколько карточек и их карта
const url = 'https://nominatim.openstreetmap.org/search.php'
let address = prompt("Enter address: ");

async function getData(url, address) {
    const response = await fetch(url + '?q=' + address + '&format=json');
    const json = await response.json();
    return json;
}

const main = document.querySelector('.main');

try {
    const myData = await getData(url, address);
    console.log(myData);
    myData.forEach((element, index) => {
        // Добавляем div для карты с уникальным идентификатором
        main.insertAdjacentHTML('beforeend', `
            <div class="card">
            <h2>${element.display_name}</h2>
            <p>Рейтинг: <strong>${element.place_rank}</strong></p>    
            <p>Координаты: ${element.lat}, ${element.lon}</p>
            <p>Описание: ${element.display_name}</p>
            <div id="map${index}" style="height: 200px;"></div>
            </div>
        `);

        // Инициализируем карту с использованием Leaflet - это пришлось погуглить ))
        const map = L.map(`map${index}`).setView([element.lat, element.lon], 15);
        
        L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([element.lat, element.lon]).addTo(map)
            .bindPopup(`${element.display_name}`)
            .openPopup();
    });
} catch (error) {
    console.log(error.message);
}
