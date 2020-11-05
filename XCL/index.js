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