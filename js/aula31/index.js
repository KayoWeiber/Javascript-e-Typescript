const verdadeira=true
//let tem escopo de blolo {...}
//Var tem escopo de função
 let nome="Luiz"
 var nome2="Ronaldo"

 if (verdadeira){
    let nome="Otavio" //criando
    var nome2="Rogério" // criando
    if (verdadeira){
        var nome2 ="Luiz"
        let nome ="Outra coisa"
    }
 }
 console.log(nome,nome2)