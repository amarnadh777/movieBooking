var express = require('express')
const { addmoviesToTheater } = require('../Controllers/Admin.controllers')
const {addShowTime} = require("../Controllers/TheaterOwner.controllers")
var router = express.Router()

router.post("/addmovies",addmoviesToTheater)
router.post("/addshowtime",addShowTime)
router.get("/test",(req,res) =>{
    res.json({data:"dsfd"})
})
module.exports = router