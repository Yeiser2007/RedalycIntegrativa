const label = document.querySelectorAll('label')
const input = document.querySelectorAll('input')
const select = document.getElementById('prefijo')
const validate = document.getElementById('nomVal')
const validateNum = document.getElementById('numVal')
const validateEm = document.getElementById('emVal')
const validateDir = document.getElementById('dirVal')
const validateMen = document.getElementById('menVal')
const btn = document.getElementById('btn')
const validaciones = document.querySelectorAll(".validator")

const regexSoloLetras = /^[a-zA-Z ]+$/;
const numeroValidator = /^\d+$/;
const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var object = {}

input.forEach((item) =>
    item.addEventListener('input', () => {
        if (item.id == "nombre") {
            var nombre = item.value
            if (nombre != "") {
                if (regexSoloLetras.test(nombre)) {
                    validate.textContent = "correcto"
                    validate.style.color = "#07bf07"
                    object.nombre = nombre.toUpperCase()
                } else {
                    validate.textContent = "valor incorrecto"
                    validate.style.color = "#f40702"
                }
            } else {
                validate.textContent = ""
            }
        }
        else if (item.id == "telefono") {
            var numero = item.value
            if (numero != "") {
                if (numeroValidator.test(numero)) {
                    validateNum.textContent = "correcto"
                    validateNum.style.color = "#07bf07"
                    object.telefono = "+"+select.value+" "+numero;
                }
                else {
                    validateNum.textContent = "valor incorrecto"
                    validateNum.style.color = "#f40702"
                }
            }
        }
        else if (item.id == "email") {
            var email = item.value
            if (emailValidator.test(email)) {
                validateEm.textContent = "correcto"
                validateEm.style.color = "#07bf07"
                object.email = email
            }
            else {
                validateEm.textContent = "valor incorrecto"
                validateEm.style.color = "#f40702"
            }
        }
        else if (item.id == "direc" && item.value != "") {
            validateDir.textContent = "correcto"
            validateDir.style.color = "#07bf07"
            btn.disabled = false
            object.direccion = item.value
        }
        else if (item.id == "mensaje" && item.value != "") {
            validateMen.textContent = "correcto"
            validateMen.style.color = "#07bf07"
            btn.disabled = false
            object.mensaje = item.value
        }
    })
)

btn.addEventListener('click', (event) => {
    var flag = false
    var err = false
    input.forEach((item) => {
        if (item.value == "") {
            flag = true
            return;
        }
    })
    validaciones.forEach((Element) => {
        if (Element.textContent == "valor incorrecto") {
            err = true
            return
        }
    })
    if (flag == true) {
        alert("Hay un elemento vacio")
    } else if (err == true) {
        alert("Algun elemento es incorrecto")
        event.preventDefault()
    }else{
        alert("Registro Exitoso \n"+JSON.stringify(object, null, 2))
    }
})



