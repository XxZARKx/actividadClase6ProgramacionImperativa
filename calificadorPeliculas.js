const propmt = require('prompt-sync')({sigint: true})

let valoracion = propmt('Ingrese su valoracion de la pelicula: ')

switch(valoracion){
    case 'muy mala':
        console.log('Disculpe los inconvenientes')
        break;
    case 'mala':
        console.log('Intentaremos mejorar')
        break;
    case 'mediocre':
        console.log('Mejoraremos nuestra seleccion de peliculas')
        break;
    case 'buena':
        console.log('Nos alegra que le gustara')
        break;
    case 'muy buena':
        console.log('Muchas gracias por su buena resena')
        break;
    default:
        console.log('Ingresaste un valor inválido')
        break;
}

console.log('agradecemos su visita')