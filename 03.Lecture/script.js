let userAnswer = prompt('Зимой и летом одним цветом?');
// if(userAnswer === '') 
//     console.log("Empty");
// else{
//     if (userAnswer === "Елка") {
//         alert("Правильно!");
//     } else {
//         alert("Неправильно!");
//     }
// }

// if(userAnswer === '') 
//     alert("Empty");
// else if (userAnswer === "Елка") {
//     alert("Правильно!");
// }
// else {
//     alert("Неправильно!");
// }

//(userAnswer === "Елка") ? alert("Правильно!") : alert("Неправильно!");

alert((userAnswer.toLowerCase() === "елка") ? "yes" : "no");