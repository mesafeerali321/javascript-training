function clickme(players){
    // document.getElementById('para').innerHTML = a 
    var element = document.querySelector('.app')
    // element.innerHTML = a
    const data = players.map((val) => {
        return '<li>' + val + '</li>'   // <li>Virat Kohli</li>
    })
    element.innerHTML = '<ul>'+data.join('')+'</ul>'
}