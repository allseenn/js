const url = './data.json';
async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

document.addEventListener('DOMContentLoaded', async (e) =>{
    const data = await getData(url);
    const list = document.querySelector('.list-items__wrapper');
    data.forEach(element => {
        list.insertAdjacentHTML('beforeend', `
        <div class="list-items__item">
            <div class="item__img" style="background-image: url('./img/item${element.id=== 1? '' : '-'+ element.id}.png')">
                <div class="item__img_blackout">
                    <button>Add to Cart</button>
                </div>
            </div>
            <div class="item__description">
                <h3>${element.h3}</h3>
                <p>
                    ${element.p}
                </p>
                <span>$${element.$}</span>
            </div>
        </div>
        `)
    }
);
});