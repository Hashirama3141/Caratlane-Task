//TODO refactor in seperate modules for redis,models etc

var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var redis = require('redis');
var client = redis.createClient();

client.on('error', function (err) {
    throw err;
});

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.send('public/index.html');
});

app.get('/messages', function (request, response) {
    client.lrange('messages', 0, -1, function (error, messageString) {
        if (error) response.json(503, { error: true });
        messageString = messageString.map(JSON.parse);
        response.json(messageString);
    });
});

app.post('/messages', jsonParser, function (request, response) {
    var message = request.body;
    if (!message.name || !message.email || !message.description || message.name.length < 1 || message.email.length < 1 || message.description.length < 1) {
        response.sendStatus(400);
    }
    else {
        client.lpush("messages", JSON.stringify(message), function (error) {
            if (error) response.json(503, { error: true });
            response.status(201).send(message.name);
        });
    }
});


module.exports = app;