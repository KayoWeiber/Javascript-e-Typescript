const pessoa={nome:"Kayo",
    idade:19,
    email:"caioveiber598@gmail.com"}
function atualizarEmail(emailNovo){
    pessoa.email=emailNovo
    return console.log(`Email atualizado para ${emailNovo}`)
}
function exibirInformacoes(){
    console.log(pessoa)

}
atualizarEmail("caioveiber999@gmail.com")
exibirInformacoes()
