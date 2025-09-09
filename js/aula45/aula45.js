/*
try{
    //Executada não a erros
    //console.log(a)
    console.log("Abri um arquivo")
    console.log("Manipulei o arquivo e gerou erro")
    console.log("fechei o arquivo")
}catch(e){
    //Executada quando a erros
    console.log("Tratando o erro")
}finally{
    //executada sempre
    console.log("FINALLY: Eu sempre sou executado")
}*/
function retorna(data){
    if (data && !(data instanceof Date)){
        throw new TypeError("Esperando instância de Date")
    }
    if(!data){
        data=new Date()
    }
    return data.toLocaleTimeString("pt-BR",{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:false
    })
}
try{
    const data=new Date("01-01-1970 12:58:12")
    const hora=retorna(data)
    console.log(hora)
}catch(e){
    console.log("data inválida")
}finally{
    console.log("tenha um bom dia.")
}