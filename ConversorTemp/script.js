const celcius = document.getElementById("celcius")
const fare = document.getElementById("faren")
const ceResult = document.getElementById("ce")
const faResult = document.getElementById("fa")
const btn = document.getElementById("btn")
const frase = document.getElementById("frase")
const contenedor = document.getElementById("contenedor")

btn.addEventListener('click',()=>{
    if(celcius.value !=""){
        var farenheit =  celcToFare(celcius.value)
        faResult.textContent = farenheit
        evaluar(farenheit)
    }
    else if(fare.value !=""){
        ceResult.textContent = fareToCelc(fare.value)
    }
    else{
        alert("Ingrese algun dato a convertir")
    }
    
})

function celcToFare(value){
    var fareGrad = (9/5)*value + 32
    return fareGrad
}

function fareToCelc(value){
    var celcGrad = (value-32)/1.8
    return celcGrad
}

function evaluar(value){
    if(value>14 && value<=32){
        frase.textContent = "Temperatura baja"
        contenedor.style.backgroundColor = "blue";
    }
    else if(value>32 && value<=68){
        frase.textContent = "Temperatura adecuada"
        contenedor.style.backgroundColor = "green";
    }
    else if(value>68 && value<=96){
        frase.textContent = "Temperatura alta"
        contenedor.style.backgroundColor = "red";
    }
    else{
        frase.textContent = "TEMPERATURA DESCONOCIDA"
        contenedor.style.backgroundColor = "orange";
    }
}