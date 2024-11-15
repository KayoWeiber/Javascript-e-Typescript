/*
let controle=0
while (controle<=10){
    console.log(controle)
    controle++
}*/
function random(min,max){
    const r=(Math.random()*(max-min)+min)
    return Math.floor(r)
}
let count=0
const min=1
const max=50
let rand=random(1,50)
while(rand!==10){
    rand=random(min,max)
    console.log(rand)
    count++

}
console.log("#############")
console.log(`A quantidade de vez random foi criado ${count}`)
console.log("#############")
count=0
do{ //executa e depois checa
    rand=random(min,max)
    console.log(rand)
    count++
}while(rand!==10)
console.log("#############")
console.log(`A quantidade de vez random foi criado ${count}`)