let num = [5, 1, 2, 6, 8, 0, 3]

let result = num.filter(checkNum)
console.log(result);

function checkNum(n){
    return n > 2
}