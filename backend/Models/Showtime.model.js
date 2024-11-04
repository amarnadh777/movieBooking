var mongoose = require("mongoose");
var showtimeSchema = mongoose.Schema({
  showtimeId: String,
  movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
  theater: { type: mongoose.Schema.Types.ObjectId, ref: "Theater" },
  date: { type: Date, require: true },
  time: { type: String, required: true },
});
var showTimeModel = mongoose.model("showtime",showtimeSchema)
module.exports = showTimeModel