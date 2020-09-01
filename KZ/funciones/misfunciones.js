
export const PI= 3.1416;

function imprimir(numero1, numero2, suma) {
    console.log("la suma de " + numero1 + " y " + numero2 + " es " + suma);
    console.log(`la suma de ${numero1} y ${numero2}  es ${suma}`);
}

function esPar(suma) {
    if (suma % 2 == 0) {
        console.log(`${suma} es un numero par`)
    } else {
        console.log(`${suma} es un nuemro impar`)
    }
}

function imprimirImpares1al100(){
    for(let contador = 1; contador <= 100; contador= contador + 2){
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

//N1yN2(3,5);

function N1yN2(N1, N2){
   // var N1 = 1;
   // var N2 = 6;

    if (N1 % 2 == 0 && N2 % 2 == 0){
        console.log(`suma: ${N1 + N2}`)
    }else if(N1 % 2 != 0 && N2 % 2 != 0){
        console.log(`resta: ${N1 - N2}`)
    }else{
        console.log(`multiplicacion: ${N1 * N2}`)
    }
} 