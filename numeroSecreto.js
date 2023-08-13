const propmt = require('prompt-sync')({sigint: true})

let numeroIngresado = parseInt(propmt('Ingresa un numero del 1 al 10: '))

function adivinaElNumeroSecreto (numero){
    let numeroSecreto = Math.round(Math.random() * 10 + 1)

    if(numero === numeroSecreto){
        console.log('Felicidades adivinaste el numero secreto')
    } else{
        console.log('Buen intento, el numero secreto era: ' + numeroSecreto)
    }
}

adivinaElNumeroSecreto(numeroIngresado)