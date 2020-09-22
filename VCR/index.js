const express = require('express')
const app = express()


// desarrollar un midelware individual, con la ruta: /numerosprimos/:limite. debe imprimir en el navegador (json o string) con los numeros primos hasta el limite donde se le indico en el parametro (:limite), subir todos los cambios a github para su revision y anexar la url de la carpeta de git hub en el classroom de la actividad propuesta

//intento
app.get('/numerosprimos/:limite', function (req, res) {
    function Primos(n) {
        for(var i=2;i<=n-1;i++) {
            if(n%i==0) {
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
    res.json("números primos hasta: " + req.params.limite)
})

app.get('/', function (req, res) {
    res.send('Holaa!!!!')
})

app.get('/estudiantes/:documento', function (req, res) {
    console.log('el documento es', req.params)
    res.send('Servicio para mostrar un solo estudiante con documento # ' + req.params.documento)
})

app.get('/estudiantes', function (req, res) {
    //res.send('<h1>Servicio para los estudiantes</h1>')
    res.json({ nombre: "Valentina", edad: 16 })
})

app.listen(8080, function () {
    console.log('El servidor esta corriendo en un puerto :)')

})