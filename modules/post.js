const mongoose=require('mongoose')

const postSchema =mongoose.Schema(()=>{

   title:{
    type:String
   }
   description:{
    type:String
   }
})

const Post = mongoose.model('post', postSchema)
module.exports=Post