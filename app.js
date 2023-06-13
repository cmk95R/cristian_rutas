const express = require("express");
const path = require("path")
const app = express();
const PORT = 3030;

//RUTAS 
app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/about', (req,res) => res.sendFile(path.join(__dirname,'views','about.html')));
app.get('/contact', (req,res) => res.sendFile(path.join(__dirname, 'views','contact.html')));
app.get('/music', (req,res) => res.sendFile(path.join(__dirname, 'views','music.html')));
app.get('/*', (req,res) => res.sendFile(path.join(__dirname,'views','404.html')));

//Confimacion Servidor Corriendo Correctamente
app.listen(PORT,() => console.log("Servidor corriendo en http://localhost:"+ PORT));

