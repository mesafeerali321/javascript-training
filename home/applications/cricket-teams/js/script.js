
function clickme(a){
// document.getElementById('para').innerHTML = a 
var element = document.querySelector('.app')
    const data = a.map((cal) => {
        return '<li>' + cal + '</li>'
    })
    element.innerHTML = '<ul>'+data.join('')+'<ul>'

}