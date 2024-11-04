var moviemodel = require("../Models/Movie.model");
var shortUuid = require('short-uuid');
const theaterModel = require("../Models/Theater.model");

var getallmovies = async(req, res) => {
  var response = await moviemodel.find({})
  res.json({data:response});


};


const getavailabelmovies = async(req,res) =>
{
  try {
    const response = await moviemodel.find({}).populate("Movie")
    res.json({data:response})
    console.log(response)
    
  } catch (error) {
    
  }
 

}

const getavailabelmoviesbycity = async(req,res) =>
  {
    try {
    
      var response =  await theaterModel.find({}).populate("availablemovies")
    const allAvailableMovies = response.map(theater => theater.availablemovies).flat();

  
      res.json({data:allAvailableMovies})
    } catch (error) {
      console.log(error)
    }
   
  
  }

  const getmoviedetails = async(req,res) =>
  {
    try {
      const moviedetails = await moviemodel.findOne({movieId:req.params.movieid})
       res.json({data:moviedetails})
    } catch (error) {
      
    }
  }

  const getTheaterbyMovieIdandCity = async(req,res) =>
    {
      try {
    

           const movie = await moviemodel.findOne({movieId:req.params.movieid})
 
           console.log(movie)
           const theaterList =  await theaterModel.find({  availablemovies: {$elemMatch: { $eq:movie._id}} }).populate("availablemovies")
    
    
           res.json({data:theaterList})
     
      } catch (error) {
        console.log(error)
      }
    }
  
module.exports = { getallmovies,getavailabelmovies,getavailabelmoviesbycity,getmoviedetails,getTheaterbyMovieIdandCity};
