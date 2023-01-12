const hamburger = document.getElementById("hamburger")
const secciones = document.getElementById("secciones")
const main = document.getElementById("main")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    secciones.classList.toggle("mostrar")
    secciones.classList.toggle("slide-right")

})

main.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    secciones.classList.remove("mostrar")
    secciones.classList.remove("slide-right")

} )