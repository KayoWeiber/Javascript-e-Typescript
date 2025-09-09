// (condição) ? "valor verdadeiro" :  "valor Falso"
const pontuacaoUsuario=100
const nivelUsuario=pontuacaoUsuario >=1000?"usuario VIP" : "usuario Normal"

const corUsuario=null
const corPadrao=corUsuario||"preta"

console.log(nivelUsuario,corPadrao)

/*
if (pontuacaoUsuario>=1000){
    console.log("usuario Vip")
}else{
    console.log("usuario normal")
}
    */