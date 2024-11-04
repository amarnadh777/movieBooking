var mongoose = require("mongoose");
var MovieSchema = mongoose.Schema({
  movieTitle: String,
  movieId: String,
  description: String,
  rating: Number,
  voteCount: Number,
  moviePoster: String,
  genre:String,
  duration:String,
  releaseDate:String,

  
});
var moviemodel = mongoose.model("Movie", MovieSchema);
module.exports = moviemodel;
