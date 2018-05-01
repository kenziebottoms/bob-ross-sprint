'use strict';

const { Router } = require('express');
const router = Router();

const movieApi = require('imdb-api');

// api endpoints
router.get("/search/:q", (req, res, next) => {
  movieApi
    .search(
      { title: req.params.q },
      { apiKey: require("../key").key }
    )
    .then(({ results }) => {
      res.status(200).json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;