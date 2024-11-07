/*
Primitivos (imutáveis) - string,number,boolean, underfined,null(bigint,symbol) -valor
Referência (mutável) - array, object, function

*/

let a=[1,2,3]
let b=a
a.push(5) 
console.log(b) // a e b se baseia no mesmo local e independente de eu puxar a referência vai ser a mesma
let d=[...a] //para copiar o array atual
console.log(d)
a.push(55)
console.log(d)
console.log(b) 