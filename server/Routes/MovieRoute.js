const express = require("express");
const route = express.Router();
const movie = require("../Controller/MovieController");
route.post("/postdata", movie.postData);
route.get("/getMovie", movie.getMovie);
route.get("/searchMovie/:text", movie.searchMovie);
route.get("/:movieId", movie.getMovieDetail);
module.exports = route;
route.get("/filterMovie/:filterField", movie.getFilterMovies);
module.exports = route;
