function meuEscopo(){
    const form=document.querySelector(`.form`)
    const resultado=document.querySelector(`.resultado`)
    const pessoas=[]
    /*form.onsubmit=function(evento){
        evento.preventDefault()
        alert(1)
        console.log("Teste")
    }*/
   form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nome=form.querySelector(".nome").value
    const sobrenome=form.querySelector(".sobrenome").value
    const peso=form.querySelector(".peso").value
    const altura=form.querySelector(".altura").value
    //console.log(nome,sobrenome,peso,altura)
    const dado={nome:nome,
        sobrenome:sobrenome,
        peso:peso,
        altura:altura
    }
    pessoas.push(dado)
    const ultimaPessoa=pessoas[pessoas.length - 1] //define a ultima pessoa
    resultado.innerHTML+=`<p>Nome:${ultimaPessoa.nome}</p>`
    resultado.innerHTML+=`<p>sobrenome:${ultimaPessoa.sobrenome}</p>`
    resultado.innerHTML+=`<p>peso:${ultimaPessoa.peso}</p>`
    resultado.innerHTML+=`<p>altura:${ultimaPessoa.altura}</p>`
    console.log(pessoas)
   })
}

meuEscopo()