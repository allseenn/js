// let pass;
// for (let i = 0; pass !== 234; i++) {
//     if(i>=3)
//         alert('Password is not correct');
//     pass = +prompt('Enter password');
// }

// const arr = [1, 2, 'Hello'];
// arr.push(4, 5, 9);
// console.log(arr[arr.length-1]);

// const user = [];
// user.push(prompt('Enter your name'));
// user.push(+prompt('Enter your age'));
// console.log(user);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// alert(numbers.pop());
// console.log(numbers);

// const word = 'example';
// const arrWord = word.split("");
// const upWord = arrWord.pop();
// console.log(upWord.toUpperCase());
// arrWord.push(upWord);
// console.log(arrWord.join(""));

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < array.length; i++) {
//     if(array[i] > 5)
//         console.log(array[i]) 
// }

// console.log(array.indexOf(3));

const answers = ['елка', 'ёлка', 'ель'];
const userAnswer = prompt('Зимой и летом одним цветом?');

for (let i = 0; i < answers.length; i++) {
    if(userAnswer == answers[i]){
        console.log('GoodMan');
        break;
    }
}
