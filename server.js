var express = require('express');
var app = new express();


app.get('/', function (request, response) {
    response.send('public/index.html');
});

module.exports=app;