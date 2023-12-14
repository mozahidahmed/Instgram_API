const express=require('express')
const mongoose=require('mongoose')
const dotenv=require("dotenv").config()
require("colors")
const port=9000

//add app js file 
const app=require('./app')

//mongoose connect 
mongoose.connect(process.env.DATABASE)
.then(()=>{console.log("Database connect successful".red.bold)

})

//port 
app.listen(port,()=>{
console.log(`example app listing port ${port}`,port)
})



