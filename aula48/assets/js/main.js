function iniciar(){
    const contador=document.querySelector(".contador")
    const buttonIniciar=document.querySelector(".iniciar")
    const buttonPausar=document.querySelector(".pausar")
    const buttonZerar=document.querySelector(".zerar")

    let time=new Date("01-01-1970 00:00:00" )
    let intervalo;

    buttonIniciar.addEventListener("click",(e)=>{
        e.preventDefault()
        if (intervalo) return;
        intervalo=setInterval(function(){
            time.setSeconds(time.getSeconds()+1)
            contador.innerHTML=timer(time)
            contador.style.color=""
        },1000)
        })
    buttonPausar.addEventListener("click",(e)=>{
        e.preventDefault()
        clearInterval(intervalo)
        intervalo=null
        contador.style.color="red"
    })
    buttonZerar.addEventListener("click",(e)=>{
        e.preventDefault()
        clearInterval(intervalo)
        intervalo=null
        time=new Date("01-01-1970 00:00:00" )
        contador.innerHTML=timer(time)
        contador.style.color="red"
        setTimeout((e)=>{
            contador.style.color=""
        },3000)

    })

}

function timer(tempo){
     return tempo.toLocaleTimeString("pt-BR",{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:false
    }) 
}
iniciar()