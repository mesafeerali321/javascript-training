let obj = {
    roll: 34,
    class: '12th',
    school: 'National High School'
}

function checkKey(prop){
    // if(prop in obj){
    //     return true
    // }else{
    //     return false
    // }
    return prop in obj ? true : false
}

console.log(checkKey('class'))