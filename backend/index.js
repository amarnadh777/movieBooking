var express = require('express')
var app = express()
const dotenv = require('dotenv').config()
var connect = require("./Config/mongodb")
var cloudinary = require("./Config/cloudinary")
var moviesRoute =  require("./Routes/movies")
var  adminRoute = require("./Routes/admin")
var theaterOwnreRoute = require("./Routes/theaterOwner")
var cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use("/movies",moviesRoute)
app.use("/admin",adminRoute)
app.use("/theater",theaterOwnreRoute)

app.listen(8500,() =>{
    console.log("server is runng at localhost 8500")
})