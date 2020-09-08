export class Vehiculo{
    color = ""
    numLlantas = 0
    numAsientos = 0

    constructor(color, numLlantas, numAsientos){
        this.color = color
        this.numLlantas = numLlantas
        this.numAsientos = numAsientos
    }

    rodar(){
        console.log("El vehiculo de color " + this.color + " está rodando")
    }
}

// let audi = new Vehiculo();