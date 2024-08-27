let ages = [10, 14, 18, 19, 22]
let result = ages.findIndex(checkAdult)

function checkAdult(age){
    return age >= 18
}
console.log(result)