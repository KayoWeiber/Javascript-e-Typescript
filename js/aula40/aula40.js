const numeros=[1,2,3,4,5,6,7,8,9]
for (let numero of numeros){
    if(numero ===2){
        console.log("Achei o numero 2")
        continue
    }
    
    console.log(numero)
    if(numero===7){
        console.log("Achei o numero 7")
        break
    }
}
console.log("Sai do laço")