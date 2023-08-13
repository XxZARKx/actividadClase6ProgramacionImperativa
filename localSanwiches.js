const propmt = require('prompt-sync')({sigint: true})

let sandwichElegido = propmt('Ingrese el tipo base de su sandwich: ')
let tipoPanElegido = propmt('Ingrese el tipo de pan: ')
let conQueso = propmt('Anadir queso? - Si/No: ').toLowerCase() === 'si' 
let conTomate = propmt('Anadir tomate? - Si/No: ').toLowerCase() === 'si' 
let conLechuga = propmt('Anadir lechuga? - Si/No: ').toLowerCase() === 'si' 
let conCebolla = propmt('Anadir cebolla? - Si/No: ').toLowerCase() === 'si' 
let conMayonesa = propmt('Anadir mayonesa? - Si/No: ').toLowerCase() === 'si' 
let conMostaza = propmt('Anadir mostaza? - Si/No: ').toLowerCase() === 'si' 

console.log(`Su total a pagar por el sandwich de ${sandwichElegido} con pan ${tipoPanElegido} que incluye: ${conQueso? 'queso,' : ''}${conTomate? ' tomate,' : ''}
${conLechuga? ' lechuga,' : ''}${conCebolla? ' cebolla,' : ''}${conMayonesa? ' mayonesa,' : ''}${conMostaza? ' mostaza,' : ''} es de: $` + armadoSandwich(sandwichElegido, tipoPanElegido, conQueso, conTomate, conLechuga, conCebolla, conMayonesa, conMostaza))

function armadoSandwich (tipoSandwichBase, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {

    let sandwichBasePrecio;
    let tipoPanPrecio;

    switch(tipoSandwichBase){
        case "pollo":
            sandwichBasePrecio = 150
            break;
        case "carne":
            sandwichBasePrecio = 200
            break;
        case "veggie":
            sandwichBasePrecio = 100
            break;
        default:
            break;
    }

    switch(tipoPan){
        case "blanco":
            tipoPanPrecio = 50
            break;
        case "negro":
            tipoPanPrecio = 60
            break;
        case "s/glutten":
            tipoPanPrecio = 75
            break;
        default:
            break;
    }

    let anadirQueso = queso ? 20 : 0
    let anadirTomate = tomate ? 15 : 0
    let anadirLechuga = lechuga ? 10 : 0
    let anadirCebolla = cebolla ? 15 : 0
    let anadirMayonesa = mayonesa ? 5 : 0
    let anadirMostaza = mostaza ? 5 : 0

    let precioTotalIngredientes = anadirQueso + anadirTomate + anadirLechuga + anadirCebolla + anadirMayonesa + anadirMostaza

    return sandwichBasePrecio + tipoPanPrecio + precioTotalIngredientes

}