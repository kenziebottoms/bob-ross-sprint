"use strict";

const express = require("express");
const app = express();
const movieApi = require("imdb-api");

app.use(express.static(__dirname + "/client"));

app.get("/movies", (req, res, next) => {
  movieApi
    .search(
      { title: req.query.keyword },
      { apiKey: require("./server/key").key }
    )
    .then(movieData => {
      console.log(movieData);
    });
  res.end();
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
