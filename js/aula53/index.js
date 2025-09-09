function retornaFuncao(nome){
    //const nome="Kayo"
    return function(){
        return nome
    }
}
const funcao=retornaFuncao("Luiz")
const funcao2=retornaFuncao("Kayo")
console.dir(funcao)
console.dir(funcao2)