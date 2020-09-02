export const PI = 3.147474
export function imprimir(numero1, numero2, suma) {
    console.log("La suma de " + numero1 + " y " + numero2 + " es " + suma)
    console.log(`La suma de ${numero1} y ${numero2} es ${suma}`);
}

export function esPar(suma) {
    if (suma % 2 == 0) {
        console.log(`${suma} Es un numero par`)
    } else {
        console.log(`${suma} Es un numero impar`)
    }
}

export function imprimirImpares1al100() {
    for ( contador = 1; contador <= 100; contador += 2) {
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

export function DosNumeros() {
    let Num1 = 4, Num2 = 3;
    if (Num1 % 2 == 0 & Num2 % 2 == 0) {
        console.log(`Suma: ${Num1 + Num2}`)
    } else if (Num1 % 2 == 1 & Num2 % 2 == 1) {
        console.log(`Resta: ${Num1 - Num2}`)
    } else {
        console.log(`Multiplicación: ${Num1 * Num2}`)
    }
}