let movies = {
    srk: 'Jawan',
    aamir: 'Dhoom2',
    salman: 'Tiger'
}
console.log('I want to watch '+ movies.aamir)

movies.salman = 'Tiger3'

let actors = ['Kartik Aryan', 'Ayushman Khurrana', 'Rajkumar Rao']
actors[2] = movies.aamir

console.log(actors)
console.log(movies)