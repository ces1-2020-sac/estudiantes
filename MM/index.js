/**
 * 1. git . ---Este comando nos sirva para adicionar archivos o carpetas nuevas al slage o a la versión local de mi equipo.
 * 2. git commint -m "comentario del commit" --- Este comando nos sirve para adicionar los cambios..
 */
var numero1;
let numero2, suma;
const PI = 3.1416;

numero1 = 33
numero2 = 300

suma = numero1 + numero2;

console.log("La suma de "+numero1+" y "+numero2+" es "+suma)
console.log(`la suma de ${numero1} y ${numero2} es ${suma}`)

imprimirImpares1al100();
//esPar(4);
//esPar(8);
//esPar(20);
//esPar(5);
//esPar(9);
//esPar(45);

//imprimir(3, 4, 56);
imprimir(numero1, numero2, suma);

function imprimir (numero1, numero2, suma){
    console.log("La suma de " + numero1 + " y " + numero2 + " es " + suma)
    console.log(`La suma de ${numero1} y ${numero2} es ${suma}`);
}

function esPar(suma){
    if(suma%2 == 0) {
        console.log(`${suma} es un numero par`)
    }else{
        console.log(`${suma} es un numero impar`)
    }
}  

function imprimirImpares1al100(){
     for(contador = 1; contador <= 100; contador += 2){
     console.log(contador);
    } 
}   

function imprimirNumeros1al100(){
    let contador = 1;
    while(contador <= 100){
    console.log(contador)
    //contador = contador + 1;
    contador++;
    }     
}

//crear una función que me reciba dos numeros y si los dos numeros son pares, vas a retonar la suma.

numeroA = 2
numeroB = 4

function DosNumerosAB(){
    let numA = 2, numB = 4;
    if (numA% 2 == 0 & numB% 2 == 0){
        console.log(`suma: ${numA + numB}`)
    }else if (numA% 2 == 1 & numB% 2 == 1){
    console.log(`Resta: ${numA-numB}`)
}else{
    console.log(`Multiplicación: ${numA*numB}`)
}
}
