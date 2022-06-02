const express = require('express');
const app = express();
const Characters = require('./Characters');
const Seasons = require('./Seasons');
const Episodes = require('./episodes')

app.get('/characters', (req,res) =>{
    res.send(Characters)
});

app.get('/seasons',(req,res) =>{
    res.send(Seasons);
})

app.get('/episodes',(req,res) =>{
    res.send(Episodes)
})

app.listen(3000);