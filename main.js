// precios comida almuerzo y cena
let precio1 = 1000
let precio2 = 1000
let precio3 = 1000
// precios bebidas almuerzo y cena
let preciobebidaalmuerzocena1 = 400
let preciobebidaalmuerzocena2 = 400
// precios merienda
let preciomerienda1 = 500
let preciomerienda2 = 500  
let preciomerienda3 = 500
// sistema
function pagarAlmuerzocena(preciobebida1) {
    alert("excelente, el total a pagar es " + (precio1 + preciobebidaalmuerzocena1))
    alert("Pase a pagar por caja! , muchas gracias por su compra")
}
function pagarMerienda(opccionMerienda) {
    alert("excelente, el total a pagar es " + preciomerienda1)
    alert("Pase a pagar por caja! , muchas gracias por su compra")
}
function elegirBebidaalmuerzocena( precio1 , precio2 , precio3 ){
    alert("excelente eleccion!, ahora elige la bebida!")
    alert("El menu de la bebida es: 1-cocacola, 2-pepsi")
    let opccionbebida = prompt("ingresa eleccion")
    switch(opccionbebida) {
        case "1":
            let preciobebida1 
            pagarAlmuerzocena(preciobebida1)
            break;
        case "2":
            let preciobebida2 
            pagarAlmuerzocena(preciobebida2)
            break;
        default:
            alert("operacion invalida")
            break;
    }
}
function menuMerienda() {
    alert("El menu de la merienda es: 1-cafe con medialunas, 2-cafe con leche y un tostado, 3-jugo exprimdo de naranja con tostado")
    let opccionMerienda = prompt("ingresar opicion")
    switch(opccionMerienda){
        case "1":
            pagarMerienda()
            break;
        case "2":
            pagarMerienda()
            break;
        case "3":
            pagarMerienda()
            break;
        default:
            alert("operacion invalida")
            break;
    }
}
function menuAlmuerzocena(eleccion) {
    alert("El menu del almuerzo y la cena es: 1-hambuerguesa con queso y papas, 2-milanesa a la napolitana con pure 3- pollo al spiedo con papas fritas.")
    let opccion = prompt("ingresar eleccion")
    switch(opccion){
        case "1":
            let precio1
            elegirBebidaalmuerzocena(precio1)
            break;
        case "2":
            let precio2
            elegirBebidaalmuerzocena(precio2)
            break;
        case "3":
            let precio3
            elegirBebidaalmuerzocena(precio3)
            break;
        default:
            alert("operacion invalida")
            break;
    }
}

function menu(eleccion) {
    if((eleccion === "almuerzo") || (eleccion === "cena")) {
        alert("okey le deja la carta!")
        menuAlmuerzocena()
    } else if(eleccion === "merienda") {
        alert("okey le deja la carta")
        menuMerienda()
    } else {
        alert("todavia eso no tenemos")
    }
}
 
function sentarse(dondeComer) {
    if(dondeComer){
        alert("perfecto se lo armo para comer aca")
        let comidaAdentro = prompt("que va a comer almuerzo, merienda o cena?")
        menu(comidaAdentro)
    }else {
        alert("perfecto se lo armo para llevar!")
        let comidaLlevar = prompt("que va a comer almuerzo, merienda o cena?")
        menu(comidaLlevar)
    }
}

function entrarAlrestaurante() {
    alert("Bienvenido a el Auto servicio de Mento resto")
    let dondeComer = confirm("Va a comer aca o es para llevar?")
    sentarse(dondeComer)
}
entrarAlrestaurante()