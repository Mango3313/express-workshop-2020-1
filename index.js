const express = require('express');
var dotenv = require('dotenv');
var app = express();
dotenv.config();
app.get('/',(req,res,next)=>{
    res.send("Bienvenido");
});
app.get('/:nombre',(req,res,next)=>{
    //var nombre = req.query.nombre;
    //res.status(200).json({message:"Exito, "+nombre});
    res.send("Hola, "+req.params.nombre);
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("App en el puerto 3000");
});