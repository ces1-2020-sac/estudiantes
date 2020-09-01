var numero1;
let numero2;
const PI = 3.1416;

numero1 = 33
numero2 = 300

suma = numero1+numero2

DosN();
// imprimir100();
// imprimirImpares100();
// par(3)
// par(456777)
// par(9)
// par(344)
// par(32)

// imprimir (3, 4, 45)
// imprimir (numero1, numero2, suma)


function par(suma) {
   if(suma%2 == 0){
    console.log(`${suma} es un numero par`)
} else {
    console.log(`${suma} es un numero impar`)
}
}

function imprimir(numero1, numero2, suma) {
    console.log("la suma de "+numero1+" y "+numero2+" es "+suma)
    console.log(`la suma de ${numero1}y ${numero2} es ${suma}`)

}

function imprimir100() {
    let contador = 1;
       while(contador <= 100){
           console.log(contador)
        // contador = contador +1;
        contador++;
    }
}

function imprimirImpares100() {
    for(contador = 1; contador<= 100; contador = contador + 2){
        console.log(contador);
    }
    
}

// funcion que reciba dos numeros, a y b preguntar si los dos numeros son pares, entonces sale la suma si son impares mostrar la restaa, si son diferentes la multiplicacion

function DosN() {
    let N1 = 8, N2 = 10;
    if (N1% 2 == 0 & N2 % 2 == 0){
        console.log(`la Suma es: ${N1+N2}`)
    }else if (N1% 2 == 1 & N2 % 2 == 1){
        console.log(`la Resta es: ${N1-N2}`)
    }else{
        console.log(`la Multiplicación es: ${N1*N2}`)
    }
}
