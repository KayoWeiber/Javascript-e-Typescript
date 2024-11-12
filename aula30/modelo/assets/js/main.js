function dataHoje(){
    const h1=document.querySelector("#h1")
    const data=new Date()
    const diaSemana=data.getDay()
    const diaMes=zeroAEsquerda(data.getDate())
    const mes=data.getMonth()
    const mesTexto=getMesTexto(mes)
    const diaSemanaTexto=getDiasemana(diaSemana)
    const ano=data.getFullYear()
    const hora=data.getHours()
    const minutos=data.getMinutes()
    h1.innerHTML=`<p>${diaSemanaTexto},${diaMes} de ${mesTexto} de ${ano}</p>`
    h1.innerHTML+=`${hora}:${minutos}`
}

function zeroAEsquerda(num){
    return num>=10?num:`0${num}`
}

function getDiasemana(diaSemana){
    let diaSemanaTexto
    switch(diaSemana){
        case 0:
            diaSemana="Domingo"
            return diaSemana
        case 1:
            diaSemana="Segunda-Feira"
            return diaSemana
        case 2:
            diaSemana="Terça-feira"
            return diaSemana
        case 3:
            diaSemana="Quarta-Feira"
            return diaSemana
        case 4:
            diaSemana="Quinta-Feira"
            return diaSemana
        case 5:
            diaSemana="Sexta-Feira"
            return diaSemana
        case 6:
            diaSemana="Sábado"
            return diaSemana
        default:
            diaSemana=""
            return diaSemana
    }

}
function getMesTexto(num){
    let mesTexto
    switch(num){
        case 0:
            mesTexto="Janeiro"
            return mesTexto
        case 1:
            mesTexto="Fevereiro"
            return mesTexto
        case 2:
            mesTexto="Março"
            return mesTexto
        case 3:
            mesTexto="Abril"
            return mesTexto
        case 4:
            mesTexto="Maio"
            return mesTexto
        case 5:
            mesTexto="Junho"
            return mesTexto
        case 6:
            mesTexto="Julho"
            return mesTexto
        case 7:
            mesTexto="Agosto"
            return mesTexto
        case 8:
            mesTexto="Setembro"
            return mesTexto
        case 9:
            mesTexto="Outubro"
            return mesTexto
        case 10:
            mesTexto="Novembro"
            return mesTexto
        case 11:
            mesTexto="Dezembro"
            return mesTexto
        default:
            mesTexto=""
            return mesTexto
    }
}
dataHoje()