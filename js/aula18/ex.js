const listaDeCompras=["maçã", "banana", "arroz", "feijão", "leite"]
function adicionarItem(item){
    listaDeCompras.push(item)
    return console.log("Lista atualizada:",listaDeCompras)
}
function removerItem(item){
    const index=listaDeCompras.indexOf(item) //achar um item específico no array
    //console.log(index)
    if(index!==-1){
        listaDeCompras.splice(index,1)
        console.log(`O item ${item} foi removido com sucesso, lista atualizada:`,listaDeCompras)
    }else{
        console.log("O item não foi encontrado na lista.")
    }
}
function exibirLista(){
    console.log(listaDeCompras)
}
adicionarItem("salsicha")
removerItem("sak")
exibirLista()
