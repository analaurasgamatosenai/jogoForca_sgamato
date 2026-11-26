let telaTentativas = document.querySelector('#saidaTentativas')
let telaDescartados = document.getElementById('saidaDescartados')
let campoDigito = document.getElementById('inpChute')
let btnTestar = document.getElementById('btnEnviar')
let statusMensagem = document.querySelector('#status')



let listaNomes = [
    "melancia",
    "caderno",
    "escola",
    "celular",
    "azul",
    "computador",
    "estojo",
    "armário",
    "privada",
    "banheira",
    "pia",
    "aluno",
    "mouse",
    "mesa",
    "garrafa"

]

let codigoSecreto = Math.round(Math.random() * 5)

codigoSecreto = listaNomes[codigoSecreto]


let tentativasRestantes = 6
let partesBoneco = ["cabeca", "corpo", "bracoEsq", "bracoDir", "pernaEsq", "pernaDir"]
let codigoOculto = []


for (let i = 0; i < codigoSecreto.length; i++) {
    codigoOculto.push("*")
}



let codigo = document.getElementById('saidaPalavraOculta')



btnTestar.addEventListener("click", testarCodigo)

function testarCodigo() {
    if (tentativasRestantes <= 0) {
        return
    }
    let digito = campoDigito.value
    campoDigito.value = ""
    campoDigito.focus()

    if (digito == "") {
        return
    }

    let encontrou = false

    for (let i = 0; i < codigoSecreto.length; i++) {
        if (codigoSecreto[i] == digito) {
            codigoOculto[i] = digito
            encontrou = true
        }
    }

    if (encontrou) {
        codigo.innerText = codigoOculto.join(" ")
    } else {
        tentativasRestantes--
        telaTentativas.innerText = tentativasRestantes
        telaDescartados.innerText += `${digito}`

    }
}

if (tentativasRestantes <= 0) {
    statusMensagem.innerHTML = `<p style="color: red;"><strong>Ish...</strong>`
    btnTestar.disabled = true
    campoDigito.disabled = true

} else if (!codigoOculto.includes("*")) {
    statusMensagem.innerHTML = `<p style="color: blue;"><strong>Você foi salvo!</strong>`
    btnTestar.disable = true
    campoDigito.disable = true
}