"use strict";

const express = require("express");
const app = express();
const movieApi = require("imdb-api");

// static routes
app.use(express.static(__dirname + "/client"));
app.use('/angular', express.static(__dirname + '/node_modules/angular'));
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route'));

// auth
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

require('./server/config/passport-strat.js');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./server/routes'));

// TODO: move into routes/
// api endpoints
app.get("/movies/:q", (req, res, next) => {
  movieApi
    .search(
      { title: req.params.q },
      { apiKey: require("./server/key").key }
    )
    .then(({ results }) => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
