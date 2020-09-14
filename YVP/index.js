const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Hola Santos Ángeles Custodios :)")
})

app.get("/estudiante/:documento", function(req, res){
    console.log("El documento es ", req.params)
    res.send("Servicio para mostrar un solo estudiante con documento # " + req.params.documento)
})

/* 
TAREA
Desarrollar un midelware INDIVIDUALMENTE (si es posible) con la siguiente ruta /numerosprimos/:limite (hasta donde los quiero imprimir)
El midelware debe imprimir en el navegador (puede ser un JSON o un string) con los números primos hasta el límite donde se le indico en el parametro (:limite).
Subir todos los cambios a Github para su revision y anexar la url de la carpeta de GitHub en el classroom de la actividad propuesta
*/

app.get("/estudiantes", function(req, res){
    //res.send("Servicio para la lista de estudiantes")
    res.json({nombre:"Yuliana", edad : 15})
})

app.listen(8080, function() {
    console.log("Servidor escuchando en puerto 8080")
})