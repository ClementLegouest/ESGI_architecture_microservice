const express = require('express');
const mongoose = require('mongoose');
const routes = require('./mongo-api/routes/index');
const bodyParser = require('body-parser');
const server = express();

mongoose.Promise = global.Promise;

server.use(bodyParser.json());
routes(server);

server.listen(3000, () => {
    console.log("Ecoute sur le port 3000");

    //connexion à la base de donnée
    mongoose.connect('mongodb://database_tables:27017/api_3', {
        useMongoClient: true,
    });

    //évènement de controle sur la connexion a la base
    mongoose.connection
        .once('open', function () {
            console.log("Connexion à la mongoDB établie")
        })

        .on('error', (error) => {
            console.warn(' Warning', error);
        });
})
