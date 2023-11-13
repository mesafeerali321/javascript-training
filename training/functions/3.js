function myName(a, b, c){
    let statement = 'my name is '+ a.slice(0,3) + ' and my age is ' + b +' and i study in '+ c.slice(0,7)
    return statement.replaceAll('and', '&')
}

console.log(myName('zafri', 20, 'Nalanda College'))