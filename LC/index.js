//con estos comandos se declara una variable (var, let, const)// 
//Para poner a correr las cosas, utilizamos "node .\index.js". Depende de la carpeta
// en que estemos trabajando//

import { PI, imprimirImpares1al100, imprimirNumeros1al100, Numero1yNumero2 } from './funciones/misfunciones.js'
import { Moto } from './clases/Moto.js'

var numero1;
let numero2;
let suma;

numero1 = 203;
numero2 = 300;

suma = numero1 + numero2;

let akt = new Moto(4, 6);
let yamaha = new Moto(5, 4);
yamaha.rodar()
console.log(akt)
console.log(yamaha)

//console.log("PI vale " + PI);
//imprimirImpares1al100();
//imprimirNumeros1al100();
//Numero1yNumero2();

// esPar(5);
// esPar(4);
// esPar(47);
// esPar(400);

// imprimir(3, 4, 56);
// imprimir(numero1, numero2, suma);

<<<<<<< HEAD
function Numero1y2(){
    let numero1 = 1
    let numero2 = 9;
    if (numero1 % 2 == 0 & numero2 % 2 == 0){
        console.log(`suma: ${numero1 + numero2}`)
    }else if(numero1 % 2 == 0 & numero2 & 2 == 0){
        console.log(`resta: ${numero1 - numero2}`)
    }else{
        console.log(`multiplicacion: ${numero1 * numero2}`)
    }
}

=======
//imprimir los números del 1 al 100
>>>>>>> 3a61b0183644be08851bd3da708a1bca610287bc
