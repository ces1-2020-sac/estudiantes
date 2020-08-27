var numero1
let numero2
const PI = 3.1416;
//con estos comandos se declara una variable (var, let, const)// 
//Para poner a correr las cosas, utilizamos "node .\index.js". Depende de la carpeta
// en que estemos trabajando//
 
numero1 = 203;
numero2 = 300;

suma = numero1 + numero2;
console.log("La suma de "+numero1+" y "+numero2+" es "+suma)
console.log(`La suma de ${numero1} y ${numero2}
            es ${suma}`)

if(suma%2 == 0){
    console.log(`${suma} es un número par`)
}else{
    console.log(`${suma} es un número impar`)
}

function esPar(suma){
    if(suma%2 == 0){
        console.log(`${suma} es un número par`)
    }else{
        console.log(`${suma} es un número impar`)
    }
}
esPar (5)
function imprimir(numero1, numero2, suma){
    console.log("La suma de "+numero1+" y "+numero2+" es "+suma)
    console.log(`La suma de ${numero1} y ${numero2} es ${suma}`);
}

imprimirImpares1al100();

// esPar(5);
// esPar(4);
// esPar(47);
// esPar(400);

// imprimir(3, 4, 56);
// imprimir(numero1, numero2, suma);*/

//imprimir los números del 1 al 100//

function imprimirImpares1al100(){
    for(contador = 1; contador <= 100; contador = contador + 2){
        console.log(contador);
    }
}

function imprimirNumeros1al100(){
    let contador = 1;
    while(contador <= 100){
        console.log(contador);
        contador = contador + 1;
    }
}

//crear una funcion que me reciba dos numeros, que me reciba un N1 o N2 ó A y B. y preguntar 
// si los dos numeros son pares, retornar la suma. Si los dos numeros son impares retornar
// la resta y mostrarla. Si no cumplen esas dos reglas retornar la multiplicación de los dos.//*/