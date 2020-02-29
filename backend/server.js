require('dotenv').config()
const PORT = process.env.PORT || 3000;

const express = require('express');
var app = express();
app.use(require('body-parser').json());
var cors = require('cors');



var database = require('./controllers/database/api')

app.use(cors());
var server = require('http').Server(app);
var io = require('socket.io')(server);

var socket = require("./controllers/websocket/socket");
socket(io)

// database.connect().then(function(ms){
//     console.log(ms)
// }).catch(function(ms){
//     console.log(ms)
// })

var mainRoutes = require("./controllers/router/api");
app.use('/', mainRoutes);





app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT);
})

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://adminin:adminin@cluster0-qw89z.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });