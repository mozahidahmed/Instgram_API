const Post = require("../modules/post")



exports.getPost=async (req,res)=>{
    try{
        const allPost=await Post.find({})
        res.status(200).json({
            status:'success',
            message:'data get successfully',
            data: allPost
        })

    }
    catch(error){
        res.status(400).json({
            status: 'fail',
            message: 'data is not get',
            data: error.message
        })

    }
}