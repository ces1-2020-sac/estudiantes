//con estos comandos se declara una variable (var, let, const)// 
//Para poner a correr las cosas, utilizamos "node .\index.js". Depende de la carpeta
// en que estemos trabajando//

import { PI, imprimirImpares1al100, imprimirNumeros1al100, Numero1yNumero2 } from './funciones/misfunciones.js'
import { Moto } from './clases/Moto.js'

var numero1;
let numero2;
let suma;

numero1 = 203;
numero2 = 300;

suma = numero1 + numero2;

let akt = new Moto(4, 6);
let yamaha = new Moto(5, 4);
yamaha.rodar()
console.log(akt)
console.log(yamaha)

//console.log("PI vale " + PI);
//imprimirImpares1al100();
//imprimirNumeros1al100();
//Numero1yNumero2();

// esPar(5);
// esPar(4);
// esPar(47);
// esPar(400);

// imprimir(3, 4, 56);
// imprimir(numero1, numero2, suma);


function Numero1y2(){
    let numero1 = 1
    let numero2 = 9;
    if (numero1 % 2 == 0 & numero2 % 2 == 0){
        console.log(`suma: ${numero1 + numero2}`)
    }else if(numero1 % 2 == 0 & numero2 & 2 == 0){
        console.log(`resta: ${numero1 - numero2}`)
    }else{
        console.log(`multiplicacion: ${numero1 * numero2}`)
    }
}

//imprimir los números del 1 al 100

Numeros1y2();
//esPar(4);
//esPar(8);
//esPar(20);
//esPar(5);
//esPar(9);
//esPar(45);
// imprimir(3, 4, 56);
// imprimir(numero1, numero2, suma);

//Recibir 2 números, preguntar si son pares retornar la suma, si son impares retornar o imprimir la resta, sino retornar la multiplicación.

function imprimir(numero1, numero2, suma) {
    console.log("La suma de " + numero1 + " y " + numero2 + " es " + suma)
    console.log(`La suma de ${numero1} y ${numero2} es ${suma}`);
}
function esPar(suma) {
    if (suma % 2 == 0) {
        console.log(`${suma} es un numero par`)
    } else {
        console.log(`${suma} es un numero impar`)
    }
}
function imprimirImpares1al100() {
    for (contador = 1; contador <= 100; contador += 2) {
        console.log(contador);
    }
}
function imprimirNumeros1al100() {
    let contador = 1;
    while (contador <= 100) {
        console.log(contador)
        //contador = contador + 1;
        contador++;
    }
}


const express = require (`express`) 
 const app = express()

 app.get(`/`, function(req,res){
    res.send("Hola estudiantes!!!!")
})

app.get(`/estudiante/:documento`, function(req,res){
    console.log("El documento es", req.params.documento)
    res.send("Servicio para mostar un solo estudiante con documento #" +req.params.documento)
})

 app.get(`/estudiantes`, function(req,res){
    // res.send("<h1>Servicio para la lista de estudiantes</h1>")
    res.json ({nombre:"ximena", edad:"16"})
 })

 app.listen(8080,function(){
     console.log("El servidor escuchando en puerto 8080")
 })

 //Tarea desarrollar un midelware individualmente, con la siguiente ruta /numeros primos/ : limite hasta donde quiero imprimir los numeros
// el midelware debe imprimir en el navegador (puede ser json o string) con los numero primos
// hasta el limite donde se le indico el parametro (:limite)
//subir todos los cambios en el github para su revision y anexar la url de la carpeta del github en el clasrrom de la actividad propesta


app.get(`/numeros`, function(req,res){
    var c = 100;
var j = 2;
var numerosPrimos = [];

for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}
})
