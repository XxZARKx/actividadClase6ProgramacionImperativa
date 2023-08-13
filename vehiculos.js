const propmt = require('prompt-sync')({sigint: true})

let vehiculoTransporte = propmt('Ingrese su tipo de vehiculo: ')
let litrosUsados = parseInt(propmt('Ingrese la cantidad de litros consumidos: ')) 

console.log('Tiene que pagar $' + totalAPagar(vehiculoTransporte, litrosUsados))

function totalAPagar(vehiculo, litrosConsumidos) {

    let precioLitro;
    
    switch(vehiculo) {
        case 'coche':
            precioLitro = 86
            break;
        case 'moto':
            precioLitro = 70
            break;
        case 'autobus':
            precioLitro = 55
            break;
        default:
            break;
    }
    
    let precioTotal = precioLitro * litrosConsumidos;

    if(litrosConsumidos > 0 && litrosConsumidos <= 25){
       precioTotal += 50
    } else if(litrosConsumidos > 25){
       precioTotal += 25
    }

    return precioTotal
}