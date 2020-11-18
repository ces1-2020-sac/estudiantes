const express = require(`express`)
//const { json } = require("express")
const app = express()
//const json = require ("numerosprimos")

app.get("/", function (req, res) {
    res.send("Hola Santos Angeles...")
})

app.get("/estuudiante/:documento", function (req, res) {
    console.log("El documento es ", req.params.documento)
    res.send("Servicio para mostrar un solo estudiante")

})

app.get("/estuudiantes", function (req, res) {
    res.send("Servicio para la lista de estantes")
    //res.json ({nombre:katherine})
})

app.listen(8080, function () {
    console.log("El servidor esta corriedno en un puerto 8080")
})


/*Desarrollar un midelware en express INDIVIDUALMENTE (si es posible) con la siguiente ruta /numerosprimos/:limite
/*El midelware debe imprimir en el navegador (puede ser un JSON o un string) con los número primos 
hasta el liminte donde se le indico en el parametro (:limite)*/

app.get("/numerosprimos/:limite", function (req, res) {
    console.log("Los números primos del 1 al 100 son ", req.params.limite)
    var n1, numerosprimos;
    n1= parseInt (prompt ("introduce un numero"));
    i=0;
    numerosprimos=true;

    for (i=2; i<n1; i++){
        if (n1& i==0){
            numerosprimos = false;
        }
    }

    if (numerosprimos==true) {
        document.write ("El numero "+n1+" es primo");
    }else{
        document.write ("El numero "+n1+" no es primo");
    }

    res.json("Servicio para mostrar los números primos")

})
