/*function soma(a,b){
    return a+b

document.addEventListener("click",(e)=>{
    document.body.style.background="red"
})}
function criaPessoa(nome,sobrenome){
    return {nome,sobrenome}
}
const p1=criaPessoa('Luiz',"Otavio")
const p2={nome:"João",sobrenome:"Oliveira"}
console.log(typeof p1)
console.log( typeof p2)

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}
const fala=falaFrase("Olá")
const resto=fala("Mundo")

console.log(resto)
*/
function criaMultiplicador(multiplicador){
    return (n)=>{
        return n*multiplicador
    }
}
const duplica=criaMultiplicador(2)
const triplica=criaMultiplicador(3)
const quadriplica=criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))