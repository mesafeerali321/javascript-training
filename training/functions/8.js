function callMe(param1, param2, param3, ...rest){
    console.log(param1)
    console.log(param2)
    console.log(param3)
    console.log(...rest)
}
callMe(1, 2, 3, 4, 5)



function callu(...rest){
    console.log(...rest)
}
callu('zafri', 'zeeshan', 'labib')