let age = [25, 16, 33, 12, 60, 10, 14, 20]

let result = age.filter(checkAge)
console.log(result)

function checkAge(n){
    return n < 18
}