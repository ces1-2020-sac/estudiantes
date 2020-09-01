export const PI = 3.1416;

export function imprimir(numero1, numero2, suma) {
    console.log("La suma de " + numero1 + " y " + numero2 + " es " + suma)
    console.log(`La suma de ${numero1} y ${numero2} es ${suma}`);
}

export function esPar(suma) {
    if (suma % 2 == 0) {
        console.log(`${suma} es un numero par`)
    } else {
        console.log(`${suma} es un numero impar`)
    }
}

export function imprimirImpares1al100() {
    for(let contador = 1; contador <= 100; contador += 2) {
        console.log(contador);
    }
}

export function imprimirNumeros1al100() {
    let contador = 1;
    while (contador <= 100) {
        console.log(contador)
        //contador = contador + 1;
        contador++;
    }
}
//crear una función que me reciba dos numeros y si los dos numeros son pares, vas a retonar la suma.


export function ImprimirDosNumerosAB(numA, numB) {
    // let numA = 2, numB = 4;
    if (numA % 2 == 0 & numB % 2 == 0) {
        console.log(`Resta: ${numA - numB}`)
    } else if (numA % 2 == 1 & numB % 2 == 1) {
        console.log(`Suma: ${numA + numB}`)
    } else {
        console.log(`Multiplicación: ${numA * numB}`)
    }
}
