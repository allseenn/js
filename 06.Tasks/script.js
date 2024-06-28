// 1
const cube = (num) => num**3;
console.log(cube(+prompt("Enter number for cube: ")));

// 2
let number = prompt("Enter number: ");
if(typeof(number*1)==='string'){
    console.log(`its not number, its string`)
    exit(0);
}
const salary = (number) => number*0.87;
console.log(salary(+number));

// 3
let num1 = +prompt("Enter num1:");
let num2 = +prompt("Enter num2:");
let num3 = +prompt("Enter num3:");
function maximum(num1, num2, num3){
    let max = num1;
    if(num2 > max){
        max = num2;
    }
    if(num3 > max){
        max = num3;
    }
    return max;
}
console.log(maximum(num1, num2, num3));

// 4
let number1 = +prompt("Enter number1: ");
let number2 = +prompt("Enter number2: ");

const summa = (number1, number2) => number1 + number2;

const sub = function(number1, number2) {
    if (number1 > number2)
        return number1 - number2;
    return number2 - number1;
}

const mult = (number1, number2) => number1 * number2;
const div = (number1, number2) => number1 / number2;
console.log(`Summa: ${summa(number1, number2)}, Substruction: ${sub(number1, number2)}, Multiplication: ${mult(number1, number2)}, Division: ${div(number1, number2)}`);