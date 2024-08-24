let obj = {
    roll: 34,
    class: '12th',
    school: 'National High School'
}

function checkKey(){
    if('roll' in obj){
        return true
    }else{
        return false
    }
}
console.log(checkKey(obj))



// let checkkey1 = obj.hasOwnProperty('roll')
// console.log(checkkey1)

// let checkkey2 = obj.hasOwnProperty('name')
// console.log(checkkey2)