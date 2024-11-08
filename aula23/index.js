/*
Falsy // todos os valores abaixo são considerados falso
-false
0
"" '' ``
Null / underfined
NaN
*/ 
/*function falaoi(){
    return "oi"

}
const vaiExecutar= true

console.log(vaiExecutar && falaoi()) */
const a=0
const b=null
const c=false
const d=false
const e=NaN //mostra o ultimo falsy
console.log(a||b||c||d||e)