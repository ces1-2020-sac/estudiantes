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
    for (let contador = 1; contador <= 100; contador += 2) {
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

//Recibir 2 números, preguntar si son pares retornar la suma, si son impares retornar o imprimir la resta, sino retornar la multiplicación.

export function DosNumeros() {
    let num1 = 3, num2 = 7;
    if (num1% 2 == 0 & num2 % 2 == 0){
        console.log(`Suma: ${num1+num2}`)
    }else if (num1% 2 == 1 & num2 % 2 == 1){
        console.log(`Resta: ${num1-num2}`)
    }else{
        console.log(`Multiplicación: ${num1*num2}`)
    }
}