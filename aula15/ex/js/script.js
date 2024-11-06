let num=Number(prompt("Digite seu número:"))
const numeroTitulo=document.getElementById("numero-titulo")
const texto=document.getElementById("texto")

numeroTitulo.innerHTML=num

/*texto.innerHTML=`
<p>Raiz quadrada do seu número é ${num**0.5}</p>
<p>${num} é inteiro:${Number.isInteger(num)}</p>
<p>É NaN: ${Number.isNaN(num)}  </p>
<p>Arredondando para baixo:${Math.floor(num)}  </p>
<p>Arredondando para cima:${Math.ceil(num)}  </p>
<p>Com duas casas decimais: ${num.toFixed(2)}  </p>
`*/
texto.innerHTML+=`<p>Raiz quadrada do seu número é ${num**0.5}</p>`
texto.innerHTML+=`<p>${num} é inteiro:${Number.isInteger(num)}</p>`
texto.innerHTML+=`<p>É NaN: ${Number.isNaN(num)}  </p>`
texto.innerHTML+=`<p>Arredondando para baixo:${Math.floor(num)}  </p>`
texto.innerHTML+=`<p>Arredondando para cima:${Math.ceil(num)}  </p>`
texto.innerHTML+=`<p>Com duas casas decimais: ${num.toFixed(2)}  </p>`
/*
document.body.innerHTML+=`<h1>Seu número é ${num}</h1>`
document.body.innerHTML+=`<p>Raiz quadrada do seu número é ${num**0.5}</p>`
document.body.innerHTML+=`<p>${num} é inteiro:${Number.isInteger(num)}</p>`
document.body.innerHTML+=`<p>É NaN: ${Number.isNaN(num)}  </p>`
document.body.innerHTML+=`<p>Arredondando para baixo:${Math.floor(num)}  </p>`
document.body.innerHTML+=`<p>Arredondando para cima:${Math.ceil(num)}  </p>`
document.body.innerHTML+=`<p>Com duas casas decimais: ${num.toFixed(2)}  </p>`
*/