const express =require('express')
const router=express.Router()
const postController=require('../controllers/post.controller')


router.route("/")
    .get(postController.getPost)



module.exports=router