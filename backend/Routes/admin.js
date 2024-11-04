var express = require('express')
var{ createMovies,createTheater,addmoviesToTheater,availableMoviesinatheater} = require("../Controllers/Admin.controllers")
const {addShowTime} = require("../Controllers/TheaterOwner.controllers")
var router = express.Router()
router.post("/createmovies",createMovies)
router.post("/createtheater",createTheater)
router.post("/addmoviestotheater",addmoviesToTheater)
router.post("/addshowtime",addShowTime)



module.exports =router