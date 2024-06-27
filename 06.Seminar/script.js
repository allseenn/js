// function fullName(firstName, lastName, age) {
//     console.log(`Привет ${firstName} ${lastName} с возрастом ${age}`);
// }
// let fullName = (firstName, lastName, age) => console.log(`Привет ${firstName} ${lastName} с возрастом ${age}`);
// fullName(prompt("Ваше имя: "), prompt("Ваша фамилия: "), +prompt("Ваш возраст: "));

// function square(number) {
//     console.log(`Квадрат числа ${number} = ${number * number}`);
// }
// let square = number => console.log(`Квадрат числа ${number} = ${number ** 2}`);
// square(+prompt("Введите число: "));

// function evenOrOdd(number) {
//     if(number % 2 === 0) {
//         console.log(`+++`);
//     }
//     else {
//         console.log(`---`);
//     }
// }
// let evenOrOdd = number => console.log(number % 2 === 0 ? `+++` : `---`);
// evenOrOdd(+prompt("Введите число: "));

// let summa = (a, b, c) => +a + +b + +c;

// let param1 = '1';
// let param2 = 2;
// let param3 = 3;
// console.log(summa(param1, param2, param3));

// function func(num = 5){
//     console.log(num * num);
// }

// func(2);
// func(3);
// func();

// const sqrt = number => number ** 0.5;
// const summa = (a, b) => a + b;
// console.log(summa(sqrt(3), sqrt(4)));

// const min = (number1, number2) => number1 < number2 ? number1 : number2;

// let number1 = +prompt("Введите число 1: ");
// let number2 = +prompt("Введите число 2: ");
// console.log(min(number1, number2));

// function weeksDay(day) {
//     if(day === 1) {
//         console.log("Понедельник");
//     }   
//     else if(day === 2) {
//         console.log("Вторник");
//     }   
//     else if(day === 3) {
//         console.log("Среда");
//     }       
//     else if(day === 4) {
//         console.log("Четверг");
//     }   
//     else if(day === 5) {
//         console.log("Пятница");
//     }   
//     else if(day === 6) {
//         console.log("Суббота");
//     }   
//     else if(day === 7) {
//         console.log("Воскресенье");
//     }   
//     else {
//         console.log("Такого дня нет");
//     }
// }

// console.log(weeksDay(+prompt("Введите день недели: ")));

// function greetings() {
//     let hour = new Date().getHours();

//     if (hour >= 0 && hour < 6) {
//         console.log("Доброй ночи");
//     }
//     else if (hour >= 6 && hour < 12) {
//         console.log("Доброе утро");
//     }
//     else if (hour >= 12 && hour < 18) {
//         console.log("Добрый день");
//     }
//     else {
//         console.log("Добрый вечер");
//     }
// }

// greetings();


// function lunch(time) {
//     if(time >= 8 && time < 9)
//         console.log("Время обеда!");
//     else if(time >= 13 && time < 14)
//         console.log("Время обеда!");
//     else if(time >= 18 && time < 19)
//         console.log("Время ужина!");
//     else
//         console.log("Есть рано!");
// }

// lunch(+prompt("Введите время: "));

function askQuestion(answer ,question) {
    let userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer) 
        return true;  
    else 
        return false;
}

if(!askQuestion('лук', 'Сидит дед, во 100 шуб одет, кто его раздевает, тот слезы приливает!'))
    console.log('Горький!');
    