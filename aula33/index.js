const pessoa={
    nome:"Luiz",
    sobrenome:"Miranda",
    idade:30,
    endereço:{
        rua:"Av Brasil",
        numero:321
    }
}
//const {nome='não existe',sobrenome,idade}=pessoa //="não existe" é se não existir o nome
const {nome:n,sobrenome,idade}=pessoa //="não existe" é se não existir o nome
//console.log(pessoa.endereço.numero)
//console.log(n,sobrenome)
const {endereço:{rua,numero}}=pessoa
console.log(rua,numero)