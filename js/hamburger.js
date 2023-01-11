const hamburger = document.getElementById("hamburger")
const secciones = document.getElementById("secciones")


hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active")
    secciones.classList.toggle("mostrar")
    secciones.classList.toggle("slide-right")
})