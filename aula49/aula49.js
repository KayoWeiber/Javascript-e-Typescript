falaOi()
function falaOi(){
    console.log("Oi")
}
// first-class obejct(objetos de primeira classe)

//function expression
const souUmDado=function(){
    console.log("Sou um dado.")
}
function executaFuncao(funcao){
    console.log("Vou executar sua função abaixo.")
    funcao()
}
executaFuncao(souUmDado)

//Arrow function
const funcaoArrow=()=>{
    console.log("Sou uma arrow function")
}
funcaoArrow()

//dentro de objeto
const obj={
    falar(){
        console.log("Estou falando...")
    }
}
obj.falar()