"use strict"

var path = require('path');
var express = require('express');
var app = express();
var http = require('http')
var chat = require('./lib/chat');
var routes = require('./routes/index');

var server = http.createServer(app);
chat(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use('/', routes);