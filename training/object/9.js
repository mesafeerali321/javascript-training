let fruits ={
    red: 'apple',
    green: 'guava',
    yellow: 'papaya'

}
let name = 'Ram'
console.log(fruits.green) //guava
fruits.green = 'grapes'   //grapes
name = fruits.red         //apple
if(name == 'Ram'){
    fruits.yellow = 'yellow guava'
}else {
    name = 'Major Ram'   //Major Ram
}
console.log(fruits)     //{red: 'apple' green: 'grapes' yellow: 'papaya'}
console.log(name)       //Major Ram