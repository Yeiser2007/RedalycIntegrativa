var entrada = document.getElementById('entrada1')
var salida = document.getElementById('entrada2')
const botton = document.querySelectorAll(".btn")
const oper = document.getElementById('signo')
const resultado = document.getElementById('resultado');

botton.forEach((item) =>{
    item.addEventListener('click',()=>{        
        oper.innerText = item.id
        if(entrada.value == ""){
            alert("digite una entrada")
        }else{
            salida.disabled = false
        }
    })
})

entrada.addEventListener('change',()=>{
    salida.value = ""
    resultado.value = ""
})

salida.addEventListener('change',()=>{
    var operacion = entrada.value + oper.textContent + salida.value
    resultado.value = eval(operacion)
})



console.log(entrada,salida);
