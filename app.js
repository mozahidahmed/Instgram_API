const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")
//middleware
app.use(express.json())
app.use(cors())


// routers
const postRoute=require('./routes/post.route')
//get data from route 
app.use('/post', postRoute)
//sent app file to other file to connect database 
module.exports = app;