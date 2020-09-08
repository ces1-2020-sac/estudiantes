export const PI = 3.1419383;

export function imprimir(numero1, numero2, suma) {
    console.log("La suma de " + numero1 + ' y ' + numero2 + " es " + suma);
    console.log(`La suma de ${numero1} y ${numero2} es ${suma}`);
}

export function esPar(suma) {
    if (suma % 2 == 0) {
        console.log(`${suma} es un numero par`)
    } else {
        console.log(`${suma} es un nuemro impar`)
    }
}


export function imprimirImpares1al100(){
    for(contador = 1; contador <= 100; contador = contador + 2){
        console.log(contador);
    }
}

export function imprimirNumeros1al100(){
    let contador = 1;
    while(contador <= 100){
        console.log(contador);
        contador = contador + 1;
    }
}

//crear una funcion que me reciba dos numeros, que me reciba un N1 o N2 ó A y B. y preguntar 
// si los dos numeros son pares, retornar la suma. Si los dos numeros son impares retornar
// la resta y mostrarla. Si no cumplen esas dos reglas retornar la multiplicación de los dos.//*/


//Numero1yNumero2(3,5);
//Desarrollo//*/

export function Numero1yNumero2(){

    //let numero1 = 1
    //let numero2 = 9;

    if (Numero1 % 2 == 0 && Numero2 % 2 == 0){
        console.log(`suma: ${Numero1 + Numero2}`)
    }else if(Numero1 % 2 !=0 && Numero2 & 2 != 0){
        console.log(`resta: ${Numero1 - Numero2}`)
    }else{
        console.log(`multiplicacion: ${Numero1 * Numero2}`)
    }
}