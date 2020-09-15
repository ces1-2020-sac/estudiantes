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