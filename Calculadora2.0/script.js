const btn = document.querySelectorAll("button")
const display = document.getElementById("display")

btn.forEach(element => {
   element.onclick = ()=>{
    if(element.id == "clear"){
        display.textContent = ""
    }
    else if(display.textContent == "" && element.id == "equal" ){
        display.innerText = "null"
        setTimeout(()=>(display.innerText=""),2000)
    }
    else if(element.id == "equal"){
        try{
            display.innerText = eval(display.innerText)
        }catch{
            display.innerText = "Invalid"
            setTimeout(()=>(display.innerText=""),2000)
        }
            
        }
    else if(element.id == "punto"){
        display.innerHTML += "."
    }
    else{
        display.innerText += element.id
    }
   }
});