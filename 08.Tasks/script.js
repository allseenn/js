// 01
for (let i = 0; i < 11; i++) {
    if(i === 0)
        console.log("это ноль");
    else if(i % 2 === 0)
        console.log("это четное число");
    else
        console.log("это нечетное число");
}

// 02
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(arr.indexOf(4), 1);
arr.splice(arr.indexOf(5), 1);
console.log(arr);

// 03
const arr2 = [];
for (let i = 0; i < 5; i++) {
    arr2.push(Math.floor(Math.random()*10));
}
sum = 0;
for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
}
min = arr2[0];
for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] < min)
        min = arr2[i];
}
console.log(arr2);
console.log(sum);
console.log(min);

for (let i = 0; i < arr2.length; i++) {
    if(arr2[i]===3){
        console.log(`в массиве есть число 3`);
        break;
    }
}

// 04
str = ``;
for (let i = 0; i < 20; i++) {
    str += `#`;
    console.log(str);
}
