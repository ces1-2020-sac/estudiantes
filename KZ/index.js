// 1. git add . --- Este comando nos sirve para adicionar archivos o carpetas nuevas al stage o a la version local de mi equipo.
//2. git commit -m ""Comenario de commit--- Este comando nos sirve para adicionar los cambios nuevos o nuevo commit que enviaremos al respositorio.

//con esots comandos se declara una variable (var, let, const)//
//Para poner a correr las varibales, utilizamos "node .\index.js" //

import {PI} from './funciones/misfunciones.js'
import { PI, imprimiNumeros1al100, imprimirImpares1al100, N1yN2 } from './funciones/misfunciones.js'
import { Moto } from './clases/Moto.js'
var numero1;
let numero2, suma;

numero1 = 33;
numero2 = 300;

suma = numero1 + numero2;
//console.log("PI es " + PI);

//imprimiNumeros1al100();
//imprimirImpares1al100();
//N1yN2();

let akt = new Moto(4, 6);
let yamaha = new Moto(5, 4);
yamaha.rodar()
console.log(akt)
console.log(yamaha)

//console.log("PI vale " + PI);
// imprimirImpares1al100();
// console.log("la suma de 3 y 5 es "  + sumar(3, 5));
/*esPar(4);
esPar(40);
esPar(8);
esPar(41);
esPar(5);
esPar(1);
esPar(0);
esPar(434534234);
esPar(437723472734);

imprimir(3, 4, 56);
imprimir(numero1, numero2, suma); */






