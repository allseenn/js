const user1 = { name: { first: "Иван", last: "Иванов" }, age: [32, 1] };
const user2 = { name: { first: "Иван", last: "Иванов" }, age: [32, 1] };

function compare(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false
    for(let key in obj1){
        if(typeof obj1[key] == 'object'){
            if(!compare(obj1[key], obj2[key])) return false
        }
        else if(obj1[key] !== obj2[key]) return false
    }
    return true
}

console.log(compare(user1, user2))