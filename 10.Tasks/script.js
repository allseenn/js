// 01
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

Object.values(numbers).forEach((element) => {
    if (element >= 3) {
        console.log(element);
    }
});

// 02
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(`Автор поста ${post.author} получил ${post.comments[0].rating.dislikes} дизлайка, \
один из которых от пользователя с id ${post.comments[1].userId} имеет комент ${post.comments[1].text}`);

// 03
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

Object.values(products).forEach((element) => {
    element.price *= 0.85;
});
console.log(products);

// 04
const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

products2.sort((a, b) => a.price - b.price);

products2.forEach(product => {
    console.log(`id: ${product.id}, price: ${product.price}, photos: ${JSON.stringify(product.photos)}`);
});

// 05
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const week = {};
en.forEach((element, index) => {
    week[element] = ru[index];
});
console.log(week);