let efectivo = 20000

function menu(eleccion) {
    if((eleccion === "almuerzo") || (eleccion === "cena")) {
        alert("okey le deja la carta!")
    } else if(eleccion === "merienda") {
        alert("okey le deja la carta")
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
    let eleccion = {
        vaar : comidaAdentro,
        vaaar : comidaLlevar,
    }
}

function entrarAlrestaurante() {
    alert("Bienvenido a el Auto servicio de Mento resto")
    let dondeComer = confirm("Va a comer aca o es para llevar?")
    sentarse(dondeComer)
}
entrarAlrestaurante()