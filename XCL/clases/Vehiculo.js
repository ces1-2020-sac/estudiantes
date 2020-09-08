export class Vehiculo {
    color = ""
    numLlantes = 0
    numAsientos = 0
    
    constructor(color, numAsientos,  numLlantes){
        this.color = color
        this.numAsientos = numAsientos
        this.numLlantes = numLlantes
    }
    
    rodar(){
        console.log("El vehiculo de color " + this.color + " esta rodando");
    }
}
