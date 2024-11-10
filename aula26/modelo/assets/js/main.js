function tabela(){
    
    const form=document.querySelector(".form")
    const resultados=document.querySelector(".resultados")
    const resultadoVermelho=document.querySelector(".resultadoVermelho")
    const resultadoVerde=document.querySelector(".resultadoVerde")
    const resultadoAmarelo=document.querySelector(".resultadoAmarelo")
    form.addEventListener("submit",(e)=>{
        e.preventDefault()
        resultados.querySelector(".resultadoVerde").innerHTML=""
        resultados.querySelector(".resultadoVermelho").innerHTML=""
        resultados.querySelector(".resultadoAmarelo").innerHTML=""
        let peso=Number(form.querySelector(".peso").value)
        let altura=Number(form.querySelector(".altura").value)
        if (peso || altura){
            let imc=(peso/(altura**2)).toFixed(1)
            if(imc<0){
                resultadoVermelho.innerHTML="<p>Os valores digitado não é válido<p>"
            }else{
                if(imc<18.5){
                    resultadoAmarelo.innerHTML+=`<p>Seu IMC é <strong>${imc}</strong> e está <strong>ABAIXO DO PESO</strong></p>`
                }else if(imc<=24.9){
                    resultadoVerde.innerHTML+=`<p>Seu IMC é <strong>${imc}</strong> e está com <strong>PESO NORMAL</strong></p>`
                }else if(imc<=29.9){
                    resultadoVerde.innerHTML+=`<p>Seu IMC é <strong>${imc}</strong> e está com <strong>SOBREPESO</strong></p>`
                }else if(imc<=34.9){
                    resultadoAmarelo.innerHTML+=`<p>Seu IMC é <strong>${imc}</strong> e está com <strong>OBESIDADE GRAU 1</strong></p>`
                }else if(imc<=39.9){
                    resultadoVermelho.innerHTML+=`<p>Seu IMC é <strong>${imc}</strong> e está com <strong>OBESIDADE GRAU 2</strong></p>`
                }else if(imc>=40){
                    resultadoVermelho.innerHTML+=`<p>Seu IMC é <strong>${imc}</strong> e está com <strong>OBESIDADE GRAU 3</strong></p>`
                }else{
                    resultadoVermelho.innerHTML+="O Valor digitado não é válido"
                }
            }
        }else if(altura>2.51){
            resultadoVermelho.innerHTML="<p>O valor digitado não é possível, essa é altura da pessoa mais alta do mundo</p>"
        }else if(altura===0 ||peso===0){
            resultadoVermelho.innerHTML="<p>O valor digitado não é possível, os valores não pode ser 0</p>"
        }
        else{
            resultadoVermelho.innerHTML="<p>O valor digitado não é válido</p>"
            //resultadoVerde.innerHTML="O valor digitado não é válido"
        }
        
        
    })

}
tabela()