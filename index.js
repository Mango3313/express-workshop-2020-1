const express = require('express');
var app = express();
app.get('/ora',(req,res)=>{
    res.end("Exito");
});