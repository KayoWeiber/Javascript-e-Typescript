/*const pessoa1={
    nome:"Luiz",
    sobrenome:"Miranda",
    idade:25
}
console.log(pessoa1.nome)*/
/*
function criapessoa(nome,sobrenome,idade){
    return {
        nome,//nome:nome,
        sobrenome,//sobrenome:sobrenome,
        idade//idade:idade
    }

}
const pessoa1=criapessoa("Kayo","Weiber",19)
const pessoa2=criapessoa("Jorge","Freire",23)
const pessoa3=criapessoa("Matheus","Amanado",32)
const pessoa4=criapessoa("Athina","batistra",20)
const pessoa5=criapessoa("Yara","Oliveira",18)
console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(pessoa3.nome)
console.log(pessoa4.nome)
console.log(pessoa5.nome)
console.log(pessoa1.sobrenome)*/


const pessoa1={
    nome:"Luiz",
    sobrenome:"Miranda",
    idade:25,
    fala(){
        console.log(`${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`) //This se refere ao objeto está sendo usado no momento
    },inclementarIdade(){
        this.idade++
    }
}
pessoa1.fala()
pessoa1.inclementarIdade()
pessoa1.fala()
pessoa1.inclementarIdade()
pessoa1.fala()
pessoa1.inclementarIdade()
pessoa1.fala()