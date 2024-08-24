let ages = [8, 11, 14, 17, 1, 20,]
let a = ages.some(checkAdult);

function checkAdult(age){
    return age >= 18
}

console.log(a)