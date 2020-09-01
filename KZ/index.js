/**
 * 1. git add . --- Este comando nos sirve para adicionar archivos o carpetas nuevas al stage o a la version local de mi equipo.
 * 2. git commit -m ""Comenario de commit--- Este comando nos sirve para adicionar los cambios nuevos o nuevo commit que enviaremos al respositorio.
 * */

/*VARIABLES*/

var numero1;
let numero2,
const PI = 3.1416;
//con esots comandos se declara una variable (var, let, const)//
//Para poner a correr las varibales, utilizamos "node .\index.js" //

numero1 = 100;
numero2 = 300;

suma = numero1 + numero2;
console.log("La suma de "+numero1+"  y "+numero2+" es "+suma)
console.log(`La suma de ${numero1} y ${numero2} es ${suma}`)



function imprimir(numero1, numero2, suma) {
    console.log("la suma de " + numero1 + " y " + numero2 + " es " + suma);
    console.log(`la suma de ${numero1} y ${numero2}  es ${suma}`);
}


if (suma % 2 == 0) {
    console.log(`${suma} es un numero par`)
} else {
    console.log(`${suma} es un nuemro impar`)
}


function esPar(suma) {
    if (suma % 2 == 0) {
        console.log(`${suma} es un numero par`)
    } else {
        console.log(`${suma} es un nuemro impar`)
    }
}

esPar (5)
function imprimir(numero1, numero2, suma){
    console.log("la suma de "+numero1+"  y "+numero2+" es "+suma)
    console.log(`La suma de ${numero1} y ${numero2} es ${suma}`);
}

imprimirImpares1al100();

//esPar(5);
//esPar(4);
//esPar(47);
//esPar(400);

//imprimir (3,4, 56);
//imprimir (numero1,  numero2, suma); 

//imprimir los numeros del 1 al 100//


function imprimirImpares1al100(){
    for(contador = 1; contaador <= 100; contador= contador + 2){
        console.log(contador);
    }
}


function ImprimirNumeros1al100(){
    let contador=1;
    while(contador <= 100){

        console.log(contador);
        contador = contador + 1;
    }
}

/*Crea una fucnión que reciba dos números un N1 o N2 ó A y B. Preguntar si los dos número son pares, se reotna la suma. Si los dos número son impares retorna la resta y si no se cumple esas dos regles la mulplicación de los dos*/


N1yN2();


function N1yN2(){
    var N1 = 1;
    var N2 = 6;

    if (N1 % 2 == 0 & N2 % 2 == 0){
        console.log(`suma: ${N1 + N2}`)

    }else if(N1 % 2 == 0 & N2 & 2 == 0){
        console.log(`resta: ${N1 - N2}`)
        
    }else{
        console.log(`multiplicacion: ${N1 * N2}`)
    }
} 