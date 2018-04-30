"use strict";

const express = require("express");
const app = express();
const movieApi = require("imdb-api");

app.use(express.static(__dirname + "/client"));
app.use('/angular', express.static(__dirname+'/node_modules/angular'));
app.use('/angular-route', express.static(__dirname+'/node_modules/angular-route'));

app.get("/movies/:q", (req, res, next) => {
  movieApi
    .search(
      { title: req.params.q },
      { apiKey: require("./server/key").key }
    )
    .then(({results}) => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
