const mongoose = require('mongoose')

 mongoose.connect(process.env.Mongodburl).then(() =>{

    console.log("Mongodb connected succesfully")
}).catch((err) =>
{
    console.log(err)
})
module.exports