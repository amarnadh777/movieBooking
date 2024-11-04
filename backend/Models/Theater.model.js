var mongoose = require("mongoose");
var theaterSchema = mongoose.Schema({
  theaterId: String,
  theaterName: String,
  location: String,
  availablemovies:[{type: mongoose.Schema.ObjectId , ref: "Movie"}]
});
var theaterModel = mongoose.model("Theater", theaterSchema);
module.exports = theaterModel;
