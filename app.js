const express = require('express');
var app = express();
var path = require('path');
var pets = require('./script.js');

app.use(express.static(path.join(__dirname, '/img')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/hello.html'))
});

app.get('/info', (req, res) => {
	res.sendFile(path.join(__dirname + '/info.html'))
});

app.get('/img', (req, res) => {
	res.sendFile(path.join(__dirname + '/img.html'))
});

app.get('/style', (req, res) => {
	res.sendFile(path.join(__dirname + '/style.css'))
});

app.get('/script.js', (req, res) => {
	res.sendFile(path.join(__dirname + '/script.js'))
});

app.get('/data', (req, res) => {
	res.json(pets)
});


app.listen(process.env.PORT || 8080)