let movies = {
    salman: 'Tiger',
    srk: 'Jawan',
    akki: 'Welcome'
}

console.log('I want to watch '+ movies.salman)
// I want to watch Tiger

movies.srk = 'Pathan'
let actors = ['Kartik Aryan', 'Ayushman Khurrana', 'Rajkumar Rao']
actors[1] = movies.salman

console.log(actors)  //['Kartik Aryan', 'Tiger', 'Rajkumar Rao']
console.log(movies)  // { salman: 'Tiger', srk: 'Pathan', akki: 'Welcome' }