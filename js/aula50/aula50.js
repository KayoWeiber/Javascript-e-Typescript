/*
function funcao(){
    console.log(arguments)//agruments sustenta todos os argumentos enviados
    for (let i of arguments){
        console.log(i)
    }
}
funcao("teste",1,2,3,4,5,6,7,8,)

function funcao(a,b=3,c=2){ // definindo valores padrões caso não seja enviado nenhum número.
    console.log(a+b+c)
}
funcao(2,undefined,2)

function funcao({nome,sobrenome,idade}){
    console.log(nome,sobrenome,idade)
}
let obj={nome:"Kayo",sobrenome:"Weiber",idade:19
}
funcao(obj)

function funcao2([valor1,valor2,valor3]){
    console.log(valor1,valor2,valor3)
}
let obj2=["Kayo","Weiber","19 anos"]
funcao2(obj2)
*/
function conta(operador,acumulador,...numeros){ // rest
    for (let numero of numeros){
        if(operador==="+") acumulador+=numero
        if(operador==="-") acumulador-=numero
        if(operador==="/") acumulador/=numero
        if(operador==="*") acumulador*=numero
    }
    console.log(acumulador)
}
conta('+',1,1,2,3,4,5,6,7,8,10)
