let pergunta = require('prompt-sync')()



let dataAtual = new Date()
let dataevento = new Date(2022, 07, 18)

if(dataAtual > dataevento) {
    console.log("data do evento passou")
     precess.exit(0)
}



let idade =parseInt( pergunta("qual e sua idade?"))
if(idade < 18) {
    console.log("a idade nao e permitida")
    Process.exit(0)
} else if(idade >=18) {
    console.log("idade permitida")
} else {
    console.log("digite um numero")
    process.exit(0)
}

let participantes = 100
if(participantes >= 100) {
    console.log("limite de participantes excedido")
} else {
    console.log("cadastro concluido")
}


