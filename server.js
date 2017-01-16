var express = require('express');
var app = new express();

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.send('public/index.html');
});

module.exports=app;