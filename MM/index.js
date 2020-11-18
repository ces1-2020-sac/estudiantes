const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Hola Santos Angeles!")
})

app.get("/estudiante/:documento", function(req, res){
    console.log("el documento es ", req.params.documento)
    res.send("Servicio para mostrar un solo estudiante con documento # " + req.params.documento)
})


  app.get("/estudiantes", function(req, res){
   //res.send("</h1>Servicio para la lista de estudiantes</h1>")
    res.json({nombre: "Manuela", edad : 16})
  })

app.listen(8080, function() {
    console.log("El servidor está corriendo en puerto")
})

//desarrollar un midelware INDIVIDUAL (si es posible) con la siguente ruta /numerosprimos/:limite
//el midelware debe imprimir en e navegador (puede ser un JSON o un string) con los números primos
//hasta el limite donde se le indico en el parametro (:limite).
// Subir todos los cambios a Github para su revisión y anexar la url de la carpeta de Github en el 
//ClassRoom de la actividad propuesta.

app.get("/numerosprimos/:limite", function(req, res){
  console.log("los numeros primos del 1 al 100 son ", req.params.limite)

  res.json("servicio para mostrar los números primos")

})

/* 
TAREA
Desarrollar un midelware INDIVIDUALMENTE (si es posible) con la siguiente ruta /numerosprimos/:limite (hasta donde los quiero imprimir)
El midelware debe imprimir en el navegador (puede ser un JSON o un string) con los números primos hasta el límite donde se le indico en el parametro (:limite).
Subir todos los cambios a Github para su revision y anexar la url de la carpeta de GitHub en el classroom de la actividad propuesta
*/

app.get("/numerosprimos/:limite", function(req, res){
  function Primos(num) {
      for(var i=2;i<=num-1;i++) {
          if(num%i==0) {
              return false;
          }
      }
      return true;
  }
  for(var i=1;i<=req.params.limite;i++) {
      if(Primos(i)) {
          console.log(i);
      }
  }
  res.json("números primos hasta el: " + req.params.limite)
})