export const PI = 3.1419383;

export function imprimir(numero1, numero2, suma) {
    console.log("La suma de " + numero1 + ' y ' + numero2 + " es " + suma);
    console.log(`La suma de ${numero1} y ${numero2} es ${suma}`);
}

export function esPar(suma) {
    if (suma % 2 == 0) {
        console.log(`${suma} es un numero par`)
    } else {
        console.log(`${suma} es un numero impar`)
    }
}


export function imprimirImpares1al100(){
    for(let contador = 1; contador <= 100; contador += 2){
        console.log(contador);
    }
}

export function imprimiNumeros1al100(){
    let contador = 1;
    while(contador <= 100){
        console.log(contador);
        //contador = contador + 1;
        contador++;
    }
}

export function sumar(a, b){
    return a + b
}