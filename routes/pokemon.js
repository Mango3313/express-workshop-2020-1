const express = require('express');
const pokeroute = express.Router();

//var {pokemon} = require('../PokedexData/pokedex.json');

const pokedb = require('../config/database');

pokeroute.post('/',async (req,res,next)=>{
    const getAllPokimones = await pokedb.query("SELECT * FROM pokemon;");
    res.status(200).json(getAllPokimones);
});
pokeroute.get('/',async (req,res,next)=>{
    /** No pude escribir pokedex en ASCII uwu
     * 
     * Font.create('Bievenido a la Pokedex', 'Doom', function(error,result){
        res.set('Content-Type', 'text/html');
        res.end(result);
    });
     * 
     */
    const getAllPokimones = await pokedb.query("SELECT * FROM pokemon;");
    //console.log(getAllPokimones);
    res.status(200).json(getAllPokimones);
});
/*

pokeroute.post('/',async (req,res,next)=>{
    var idpoke = req.body.id;
    const obtenerPokeId = await pokedb.query("SELECT * FROM pokemon WHERE pok_id = ?;",[idpoke]);
    (obtenerPokeId.length > 0) ? res.status(200).json(obtenerPokeId) : res.status(404).send("Pokemon no existe");
});
pokeroute.post('/',async (req,res,next)=>{
    var pokename = req.body.name;
    const obtenerPokeName = await pokedb.query("SELECT * FROM pokemon WHERE lower(pok_name) = ?;",[pokename.toLowerCase()]);
    (obtenerPokeName.length > 0) ? res.status(200).json(obtenerPokeName) : res.status(404).send("Pokemon no encontrado") ;
});

*/
pokeroute.get('/:id([0-9]{1,3})',async (req,res,next)=>{
    var idpoke = req.params.id;
    const obtenerPokeId = await pokedb.query("SELECT * FROM pokemon WHERE pok_id = ?;",[idpoke]);
    (obtenerPokeId.length > 0) ? res.status(200).json(obtenerPokeId) : res.status(404).send("Pokemon no existe");
});
pokeroute.get('/:name([A-Za-z]+)',async (req,res,next)=>{
    var pokename = req.params.name;
    const obtenerPokeName = await pokedb.query("SELECT * FROM pokemon WHERE lower(pok_name) = ?;",[pokename.toLowerCase()]);
    (obtenerPokeName.length > 0) ? res.status(200).json(obtenerPokeName) : res.status(404).send("Pokemon no encontrado") ;
    //var monster = pokemon.filter(p => p.name.toLowerCase() == pokename.toLowerCase());
    //(monster.length > 0) ? res.status(200).send(monster) : res.status(404).send("Pokemon no encontrado") ;
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
module.exports = pokeroute;