// //1
// const week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье',
// };
// console.log(week[2]);
// // 2
// const user = {
//     name: 'Rostislav',
//     surname: 'Romashin',
//     age: 17
// };
// console.log(`${user.surname}-${user.name}-${user.age}`);
// // 3
// user.middlename = prompt('Enter your middlename: ');
// // 4
// delete user.surname;
// console.log(user);
// //5
// const good = {
//     id: 1234,
//     name: 'milk',
//     price: 100,
//     discountPercent: 20, 
//     applyDiscount () { 
//         return (this.price * (100 - this.discountPercent)/100);
//     }
// };
// console.log(good.applyDiscount())

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const week = {};
// if(arr1.length === 0 || arr2.length === 0){
//     console.log('В массиве нет элементов');
//     exit(1);
// }
// if (arr1.length === arr2.length) {
// for (let i = 0; i < arr1.length; i++) {
//     week[arr1[i]] = arr2[i];
// }
// console.log(week);
// }
// else{
//     console.log('В массивах не одинаковое кол-во элементов');
// }


// const obj = {x: 1, y: 2, z: 3};
// function bonus(obj, percent){
//     for (let key in obj) {
//         obj[key] = obj[key] + obj[key] * percent;
//     }
// }
// bonus(obj, 0.2);
// console.log(obj);

// const obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// };

// console.log(Object.values(obj).map(x => Object.values(x).reduce((a, b) => a + b, 0)).reduce((a, b) => a + b));

// let sum = 0;
// for (let key in obj) {
//     sum += Object.values(obj[key]).reduce((a, b) => a + b);
// }
// console.log(sum);



const riddles = {
    'question': 'В каком году был создан JavaScript?',
    'answer': '1995',
    'count': 2,
    askQuestion() {
        //console.log(this.question);
        let userAnswer = prompt(this.question);
        if (userAnswer.toLowerCase() === this.answer)
            return true;
        else
            return false;
    }
}

if (riddles.askQuestion()) {
    console.log('Правильно!');
}
else {
    console.log('Неправильно!');
}
