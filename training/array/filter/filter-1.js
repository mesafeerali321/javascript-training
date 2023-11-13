let num = [5, 2, 6, 8, 0]

let result = num.filter(checkNum)
console.log(result);

function checkNum(n){
    return n > 2
}