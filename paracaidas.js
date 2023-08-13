const propmt = require('prompt-sync')({sigint: true})

let velocidadActual = parseInt(propmt('Ingrese la velocidad a la que va: '))
let alturaActual = parseInt(propmt('Ingrese su altura actual: '))

abrirParacaidas(velocidadActual, alturaActual)

function abrirParacaidas(velocidad, altura){
    if(velocidad < 1000 && altura >= 2000 && altura < 3000){
        console.log('Abrir paracaidas')
    } else{
        console.log('Aun no abra el paracaidas')
    }
}