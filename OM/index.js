const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send("Hola Santos Angeles!!!!!")
})

app.get('/estudiante/:documento', function(req, res){
	console.log("El documento es ",  req.params.documento)
    res.send("Servicio para mostrar un solo estudiante con documenot # " + req.params.documento)
})

/**
 * Desarrollar un midelware INDIVIDUALMENTE (si es posible) con la siguiente ruta /numerosprimos/:limite
 * El midelware debe imprimir en el navegador (puede ser un JSON o un string) con los número primos 
 * hasta el liminte donde se le indico en el parametro (:limite).
 * Subir todos los cambios a GitHub para su revisión y anexar la url de la carpeta de GitHub en el
 * ClassRoom de la activivdad propuesta. 
 */

app.get('/estudiantes', function(req, res){
    //res.send("<h1>Servicio para la lista de estudiantes</h1>")
    res.json({nombre:"oscar", edad : 29})
})

app.listen(8080, function() {
    console.log("Servidor escuchando en puerto 8080")
})