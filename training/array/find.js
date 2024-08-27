let ages = [10, 12, 19, 18, 20,22]
let result = ages.find(checkAdult)

function checkAdult(age){
    return age >= 18
}

console.log(result)