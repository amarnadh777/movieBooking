 const showTimeModel = require("../Models/Showtime.model")
 const moviemodel = require("../Models/Movie.model")
 const theatermodel = require("../Models/Theater.model")


 const shortid = require("short-uuid")
const theaterModel = require("../Models/Theater.model")
const addShowTime = async(req,res) =>
{
 
var movie = await moviemodel.findOne({movieId:req.body.movieid})
var theater = await theaterModel.findOne({theaterId:req.body.theaterid})

 var newShow = new showTimeModel({showtimeId:shortid.generate(),movie:movie._id,theater:theater._id,

    date:req.body.date,time:req.body.time
 })
 await newShow.save()
 res.json({date:newShow})
}
const test = (req,res) =>
{

}
module.exports = {addShowTime,test}