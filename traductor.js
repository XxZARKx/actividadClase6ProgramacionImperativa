const propmt = require('prompt-sync')({sigint: true})

let palabraATraducir = propmt('Ingrese su palabra a traducir: ')


switch(palabraATraducir){
    case 'casa':
         console.log('house')
        break;
    case 'perro':
         console.log('dog')
        break;
    case 'pelota':
         console.log('ball')
        break;
    case 'arbol':
         console.log('tree')
        break;
    case 'genio':
         console.log('genius')
        break;
    default:
        console.log('La palabra ingresada es incorrecta')
        break;
}