const paragrafos=document.querySelector(".paragrafos")
const ps= paragrafos.querySelectorAll("p")

const estilos = getComputedStyle(document.body)
const backgroundColorBody=estilos.backgroundColor
console.log(backgroundColorBody)

for (let p of ps ){
    p.style.background=backgroundColorBody
    p.style.color="#FFFFFF"
}