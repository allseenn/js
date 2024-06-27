// function helloName(name) {
//     console.log(`Hello, ${name}`);
// }

// helloName('John');

// let count = 5;

// function counter() {
//     return count++;
// }

// counter();
// console.log(count);
// let age = +prompt("Ваш возраст: ", 30);
// function upAge() {
//     return age+5;
// }
// console.log(`After 5 years you will be ${upAge()}`);

// let age = +prompt("Ваш возраст: ", 30);
// const lvUpAge = () => age + 5;
// console.log(`After 5 years you will be ${lvUpAge()}`);

// function hello() {
//     console.log("Hello");
// }

// hello();

// const sum = (param1, param2) => {
//     return param1 + param2;
// }

// console.log(sum(2,5));

// const salary = (money) => (money *= 0.87)*0.75;

// let userMoney = +prompt("Ваша зарплата: ", 100);

// let monthMoney = salary(userMoney);

// console.log(`Ваша остаток: ${monthMoney}`);

// console.log(`На еду можно тратить ${monthMoney *0.3}`);

// const hello2 = () => {
//     alert("Hello2");
// }
// hello2();

// function sayHello() {
//     alert("Hello");
//     alert("You pressed button");
// }

function askQuestion(answer ,question) {
    let userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer) 
        return true;  
    else 
        return false;
}

answer = askQuestion('лук', 'Сидит дед, во 100 шуб одет, кто его раздевает, тот слезы приливает!')
    
answer = askQuestion('елка', 'Зимой и летом одним цветом!')