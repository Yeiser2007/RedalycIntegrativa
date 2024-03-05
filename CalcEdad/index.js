const dias = document.getElementById("dias")
const meses = document.getElementById("meses")
const anios = document.getElementById("años")
const valD = document.getElementById("diaVal")
const valM = document.getElementById("mesVal")
const valA = document.getElementById("anVal")
const input = document.querySelectorAll("input")
const fechaP = document.getElementById("fecha")
var fechaActual = new Date()
var anAct = fechaActual.getFullYear()
var date = ""
var dia =""
var mes = ""
var año = ""
var mil = 1000*60*60*24
var flag = true
input.forEach((item) =>{
    item.addEventListener('change',()=>{
        if(item.id == "dia"){
            if(parseInt(item.value) > 31 || parseInt(item.value) < 1 || item.value == ""){
                valD.textContent = "incorrecto"
                flag = false
            }else{
                flag = true
                dia = item.value 
                valD.textContent = ""   
            }
        }
        else if(item.id == "mes"){
            if(parseInt(item.value) > 12 || parseInt(item.value) < 1 || item.value == "" ){
                valM.textContent = "incorrecto"
                flag = false    
            }else{
                valM.textContent = ""
                flag = true
                mes = item.value 
            }
        }
        else if(item.id == "anio"){
            if(parseInt(item.value) > anAct || parseInt(item.value) <1 || item.value == "" ){
                valA.textContent = "incorecto"
                flag = false
            }else{
                flag = true
                año = item.value 
                if(flag != false){
                    date = año + "-"+ mes + "-" + dia
                    validarDatos(new Date(date))
                }else{
                    alert("datos incorrectos")
                }
            }
        }else if(item.value == " "){
            input.forEach((e) =>{
                e.value = " "
            })
        }
    })
})

function validarDatos(fecha){
    
        var datos = fechaActual - fecha
        if(datos < 0){
            alert("Aun no naces")
        }
        else{
        fechaP.textContent = fecha
        dias.textContent = Math.floor(datos/mil)
        meses.textContent = Math.floor(((datos/mil)/365)*12)
        anios.textContent = Math.floor(((datos/mil)/365))}
}

function limpiar(){
    fechaP.textContent = ""
    dias.textContent = ""
    meses.textContent = ""
    anios.textContent = ""
}