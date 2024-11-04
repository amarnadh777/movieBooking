var express = require('express')
var router = express.Router()
var {getallmovies,getavailabelmovies,getavailabelmoviesbycity,getmoviedetails,getTheaterbyMovieIdandCity} = require("../Controllers/Move.controllers")
router.get("/getmoviesdetails",getallmovies)
router.get("/getmoviesdetails/:id",getmoviedetails)


router.get("/getavailabelmovies",getavailabelmovies)
router.get("/availablemoviebycity",getavailabelmoviesbycity)
router.get("/movieavailable",getavailabelmoviesbycity)
router.get("/:movieid/availabletheaters/:city",getTheaterbyMovieIdandCity)


router.get("/",getallmovies)

module.exports = router