var numero1;
let numero2, suma;
const PI = 3.1416;

numero1 = 33;
numero2 = 300;

suma = numero1 + numero2;

imprimiNumeros1al100();
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


function imprimir(numero1, numero2, suma) {
    console.log("La suma de " + numero1 + ' y ' + numero2 + " es " + suma);
    console.log(`La suma de ${numero1} y ${numero2} es ${suma}`);
}

function esPar(suma) {
    if (suma % 2 == 0) {
        console.log(`${suma} es un numero par`)
    } else {
        console.log(`${suma} es un numero impar`)
    }
}

function imprimirImpares1al100(){
    for(contador = 1; contador <= 100; contador += 2){
        console.log(contador);
    }
}

function imprimiNumeros1al100(){
    let contador = 1;
    while(contador <= 100){
        console.log(contador);
        //contador = contador + 1;
        contador++;
    }
}