const moviemodel = require("../Models/Movie.model");
const theaterModel = require("../Models/Theater.model");
const shortid = require("short-uuid");

const createMovies = async (req, res) => {
  try {
    console.log(req.body)
    const newMovie = new moviemodel({
      movieTitle: req.body.movieTitle,
      movieId: shortid.generate(),
      rating: 0,
      voteCount: 0,
      moviePoster:req.body.moviePoster,
      genre: "Acton/Period drama",
      description:
        "Set in Northern Kerala across the years 1900, 1950, and 1990, this epic tale follows three generations of heroes Maniyan, Kunjikelu, and Ajayan as they strive to protect the land's most vital treasure.",
      releaseDate: "12/02/2032",
    });
    await newMovie.save();
    console.log("movie created succefully 🍎");
    res.json({ message: "movie created succefully 🍎" });
  } catch (error) {
    console.log(error);
  }
};

const createTheater = async (req, res) => {
  try {
    console.log(req.body);
    const newTheater = new theaterModel({
      theaterId: shortid.generate(),
      theaterName: req.body.theaterName,
      location: req.body.location,
    });
    await newTheater.save()
    res.json({ message: "theate created 🎥🍿" });
  } catch (error) {
    console.log(error);
  }
};

const addmoviesToTheater = async(req,res) =>
{
  try {
    const movie = await moviemodel.findOne({movieId:req.body.movieId})
    console.log(movie._id)
    const addMovie = await theaterModel.updateOne({theaterId:req.body.theaterId},{$push:{availablemovies:movie._id}})
    res.json({message:"movie added"})
  } catch (error) {
    console.log(error)
  }
}
const availableMoviesinatheater = async(req,res) =>
    {
      try {
         const movies = await theaterModel.find().populate("Movies")
        res.json({message:movies})
      } catch (error) {
        console.log(error)
      }
    }
    

module.exports = { createMovies, createTheater,addmoviesToTheater, availableMoviesinatheater };
