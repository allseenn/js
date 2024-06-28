// 1
let num1 = +prompt("Enter num1:");
let num2 = +prompt("Enter num2:");
(num1<=1)?console.log(`${num1} less or equal to 1`):console.log(`${num1} more than 1`);
(num2>=3)?console.log(`${num2} more or equal to 3`):console.log(`${num2} less than 3`);

// 2
let test = true;
test ? console.log('+++') : console.log('---');

// 3
let day = +prompt("Enter day of month:");
if(day <= 10 || day > 0)
    console.log(`${day} in first decade`);
else if(day <= 20 || day > 10)
    console.log(`${day} in second decade`);
else if(day <= 31 || day > 20)
    console.log(`${day} in third decade`);
else
    console.log("Wrong day");

// 4
let number = +prompt("Enter number: ");
let ones = number%10;
let tens = (number-ones)/10%10;
let hundreds = (number-tens*10-ones)/100%10;
console.log(`In ${number} we have hundreds: ${hundreds}, tens: ${tens}, ones: ${ones}`);

