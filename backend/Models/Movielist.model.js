var mongoose = require("mongoose");
var movieListSchema = mongoose.Schema({
  movieId: String,
  movieTitle: String,
  genre: String,
  moviePoster: String,
  likes: Number,
  rating: Number,
  
});
var movieListmodel = mongoose.model("movieList", movieListSchema);
module.exports = movieListmodel;
