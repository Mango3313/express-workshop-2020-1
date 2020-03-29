const express = require('express');
var dotenv = require('dotenv');
//const Font = require('ascii-art-font');
var {pokemon} = require('./PokedexData/pokedex.json');
var app = express();
dotenv.config();
/**Codigo anterior
app.get('/',(req,res,next)=>{
    res.send("Bienvenido");
});
app.get('/:nombre',(req,res,next)=>{
    //var nombre = req.query.nombre;
    //res.status(200).json({message:"Exito, "+nombre});
    res.send("Hola, "+req.params.nombre);
});
**/

app.get('/pokemon',(req,res,next)=>{
    /** No pude escribir pokedex en ASCII uwu
     * 
     * Font.create('Bievenido a la Pokedex', 'Doom', function(error,result){
        res.set('Content-Type', 'text/html');
        res.end(result);
    });
     * 
     */
    res.send("Bienvenido a la pokedex");
});
app.get('/pokemon/:id([0-9]{1,3})',(req,res,next)=>{
    var idpoke = req.params.id - 1;
    if (idpoke > 0 && idpoke < 150){
        res.status(200).send(pokemon[idpoke]);
    }else{
        res.status(404).send("Pokemon no existe");
    }
});
app.get('/pokemon/:name',(req,res,next)=>{
    var pokename = req.params.name;
    var encontrado = false;
   for(let element of pokemon ){
        if (element.name == pokename){
            encontrado = true;
            res.status(200).send(element);
            break;
        }
    }
    if(!encontrado){
        res.status(404).send("Pokemon no encontrado");
    }
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("App en el puerto 3000");
});
