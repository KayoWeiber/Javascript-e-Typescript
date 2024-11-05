const nome="Luiz" //string
const nome2='Luiz'//string
const nome1=`Luiz`//string

const num1=10 //number
const num2=10.70 //number
let nomeAluno //undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null //nulo -> não aponta para local nenhum na memória

const boolean=true // ou false

const a =[1,2]
const b = a // criou uma cópia
console.log(a,b)
b.push(3) // coloca o valor no A e no B
console.log(a,b)