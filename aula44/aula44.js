/*try{console.log(naoexiste)}catch(err){
    console.log("Erro, tente novamente")
}*/
function soma(x,y){
    if(typeof x!=="number" ||typeof y!=="number"){
        //throw("x e y precisam ser números.")
        throw new ReferenceError("x e y precisam ser números.")
    }
    return x+y
}
try{
console.log(soma(1,2))
console.log(soma(1,"a"))}catch(error){
    console.log(error)
}