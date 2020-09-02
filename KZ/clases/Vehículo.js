//Característica y propiedades de un atributo (color,número de llantas...) de una clase
export class Vehículo {
    color = ""
    numLlantes = 0
    numAsientos = 0

    constructor(color, numAsientos,  numLlantes){
        this.color = color
        this.numAsientos = numAsientos
        this.numLlantes = numLlantes
    }

    rodar(){
        console.log("El vehículo de color " + this.color + " esta rodando");
    }
}
//let audi =new vehículo();
// Se ejecuta como "node .\clases/Vehículo.js"
