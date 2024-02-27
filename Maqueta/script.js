const active = document.querySelectorAll(".btn")
var mainColor = document.querySelector('.secc1')
var colHead = document.querySelector('.container-head')
var text = ""
function activar(){
    active.forEach((p) => 
    p.classList.remove('active'))
    this.classList.add('active')
}
active.forEach( (p => 
    p.addEventListener('click',activar)))