const express = require('express');
var dotenv = require('dotenv');
const bodyparser = require('body-parser');
//const Font = require('ascii-art-font');
var {pokemon} = require('./PokedexData/pokedex.json');
var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

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
app.get('/',(req,res,next)=>{
    res.send("Beinvenido a la pokedex...");
});
app.post('/pokemon',(req,res,next)=>{
    res.status(200).send("Estas en /pokemon POST");
});
app.get('/pokemon',(req,res,next)=>{
    /** No pude escribir pokedex en ASCII uwu
     * 
     * Font.create('Bievenido a la Pokedex', 'Doom', function(error,result){
        res.set('Content-Type', 'text/html');
        res.end(result);
    });
     * 
     */
    res.status(200).send(pokemon);
});
app.post('/pokemon',(req,res,next)=>{
    var idpoke = req.body.id - 1;
    (idpoke > 0 && idpoke < 150) ? res.status(200).send(pokemon[idpoke]) : res.status(404).send("Pokemon no existe");
});
app.get('/pokemon/:id([0-9]{1,3})',(req,res,next)=>{
    var idpoke = req.params.id - 1;
    (idpoke > 0 && idpoke < 150) ? res.status(200).send(pokemon[idpoke]) : res.status(404).send("Pokemon no existe");
});
app.post('/pokemon',(req,res,next)=>{
    var pokename = req.body.name;
    var monster = pokemon.filter(p => p.name.toLowerCase() == pokename.toLowerCase());
    (monster.length > 0) ? res.status(200).send(monster) : res.status(404).send("Pokemon no encontrado") ;
});
app.get('/pokemon/:name([A-Za-z]+)',(req,res,next)=>{
    var pokename = req.params.name;
    var monster = pokemon.filter(p => p.name.toLowerCase() == pokename.toLowerCase());
    (monster.length > 0) ? res.status(200).send(monster) : res.status(404).send("Pokemon no encontrado") ;
    /**
     * var pokename = req.params.name;
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
     */
    
});
app.listen(process.env.PORT || 3000,()=>{
    console.log("App en el puerto 3000");
});
