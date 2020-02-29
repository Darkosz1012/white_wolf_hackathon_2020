require('dotenv').config()
const PORT = process.env.PORT || 3000;

const express = require('express');
var app = express();
app.use(require('body-parser').json());
var cors = require('cors');

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(cors());


var mainRoutes = require("./controllers/router/api");
app.use('/', mainRoutes);





app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT);
})