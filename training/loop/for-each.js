let arr = [2, 4, 10, 3, 1]

// arr.forEach(myFunc)

// function myFunc(value, key){
//     // console.log(value, key);
//     console.log(`${value} ${key} index par hai`)
// }

//Make above code in such a way that forEach will contain function and arrow function within itself.


// arr.map(function(value, key){
//     console.log(value, key)
// })

arr.map((value, key) => console.log(value, key))