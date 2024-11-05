/*Peça ao usuário para digitar o nome de uma cidade usando prompt.
Depois, pergunte ao usuário, com um confirm, se ele deseja saber quantas letras tem o nome da cidade.
Se o usuário confirmar:
Mostre um alert com a quantidade de letras do nome da cidade.
Se o usuário recusar:
Mostre um alert dizendo: "Tudo bem, fica para a próxima!".*/
let cidade=prompt("Digite o nome da sua cidade: ")
let confirma=confirm("Deseja saber quantas letras tem o nome da cidade ")
if(confirma==true){//não precisa do ==true
   let contador=cidade.length
   alert(`A quantidade de letras no nome ${cidade} é igual a ${contador}`)
}else{
    alert("Tudo bem, fica para a próxima")
}
