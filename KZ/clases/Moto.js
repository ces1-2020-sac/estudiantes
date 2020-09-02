import {Vehiculo} from './Vehiculo.js'

export class Moto extends Vehiculo{
    cilindraje = 0 
    torke = 0
    
    constructor(cilindraje, torke){
        super("negra", 2, 2)
        this.cilindraje =  cilindraje
        this.torke = torke
    }
}
