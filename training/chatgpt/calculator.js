function calculate(num1, num2, operation){
    if(operation == 'add'){
        return num1 + num2
    } else if(operation == 'subtract'){
        return num1 - num2
    } else if(operation == 'multiply'){
        return num1 * num2
    } else if(operation == 'divide'){
        return num1 / num2
    } else if(operation == 'modulus'){
        return 
    }
}

console.log(calculate(10, 5, 'divide'));