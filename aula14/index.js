//IEEE 754-2008

let num1=0.7
let num2=0.1

num1+=num2 //0.08
num1+=num2 //0.09
num1+=num2 //1.00

num1=parseFloat(num1.toFixed(2)) // num1=Number(num1.toFixed(2))//definiu um número não inteiro para inteiro
console.log(num1)
console.log(Number.isInteger(num1))

//console.log(num1.toString()+num2.toString()) // muda para string
//num1=num1.toString() //muda para string para sempre
//console.log(num1.toString(2)) // muda para número binário
//console.log(num1.toFixed(2)) //arredondar definindo a quantidade de casas decimais
//console.log(Number.isInteger(num1))// para saber se o número é inteiro
//let temp=num1*"5"
//console.log(Number.isNaN(temp)) //para saber se o numero é NaN
